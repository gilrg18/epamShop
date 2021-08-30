import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import AdminPage from './AdminPage'
import Login from './Login'
import UserPage from './UserPage'
import { CartProvider } from './CartContext'

const NavbarComponent = () => {

    return (
        <CartProvider>
            <Router>
                <div>
                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        <Navbar.Brand href="/">epamShop</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to={"/user"}>Shop</Nav.Link>
                                <Nav.Link as={Link} to={"/admin"}>Admin Page</Nav.Link>

                            </Nav>


                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    <Switch>
                        <Route path='/' exact component={AdminPage} />
                        <Route path='/user' exact component={UserPage} />
                        <Route path='/admin' exact component={AdminPage} />
                        <Route path='/login' exact component={Login} />
                        <Route path='/' render={() =>
                            <div className="page-wrap d-flex flex-row align-items-center">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-md-12 text-center">
                                            <span className="display-1 d-block">404</span>
                                            <div className="mb-4 lead">The page you are looking for was not found.</div>
                                            <a href="/" className="btn btn-link">Back to Home</a>
                                        </div>
                                    </div>
                                </div>
                            </div>} />
                    </Switch>
                </div>
            </Router>

        </CartProvider>
    )
}

export default NavbarComponent;