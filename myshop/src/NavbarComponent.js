import React from 'react'
import { Navbar, Nav} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import AdminPage from './AdminPage'
import Login from './Login'
import UserPage from './UserPage'
import Cart from './Cart'
const NavbarComponent = () => {
    return (
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
                        <Nav>
                            <Nav.Link as={Link} to={"/"}>

                            </Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </div>
            <div>
                <Switch>
                    <Route path='/' exact component={UserPage} />
                    <Route path='/user' exact component={UserPage} />
                    <Route path='/admin' exact component={AdminPage} />
                    <Route path='/login' exact component={Login} />
                    <Route path='/cart' exact component={Cart} />
                    <Route path='/' render={() =>
                        <div class="page-wrap d-flex flex-row align-items-center">
                            <div class="container">
                                <div class="row justify-content-center">
                                    <div class="col-md-12 text-center">
                                        <span class="display-1 d-block">404</span>
                                        <div class="mb-4 lead">The page you are looking for was not found.</div>
                                        <a href="/" class="btn btn-link">Back to Home</a>
                                    </div>
                                </div>
                            </div>
                        </div>} />
                </Switch>
            </div>
        </Router>
    )
}

export default NavbarComponent;