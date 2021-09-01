import React from 'react';
import '../css/Login.css';
import Toasts from '../toasts/Toasts';
import Axios from "axios";
const Login = (props) => {
    const { setLoggedIn } = props;
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    
    const login = () => {
        // Axios.post('/login', {
        Axios.post('https://epam-shop.herokuapp.com/login', {
            userID: username,
            password: password,
        }).then((response) => {
            if (response.data.message) {
                Toasts.error(response.data.message)
            } else {
                setLoggedIn(response.data[0].accountType)
            }
        })
    }



    return (

        <div className="maincontainer">
            <div className="container-fluid">
                <div className="row no-gutter">
                    <div className="col-md-6 d-none d-md-flex bg-image"></div>
                    <div className="col-md-6 bg-light">
                        <div className="login d-flex align-items-center py-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-10 col-xl-7 mx-auto">
                                        <h3 align="center" className="display-4">epamShop</h3>

                                        <div className="form-group mb-3">
                                            <input id="inputEmail" type="user" placeholder="User"
                                                required="" autoFocus=""
                                                onChange={(e) => {
                                                    setUsername(e.target.value)
                                                }} className="form-control rounded-pill border-0 shadow-sm px-4" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <input id="inputPassword" type="password" placeholder="Password" required=""
                                                onChange={(e) => {
                                                    setPassword(e.target.value)
                                                }} className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                        </div>
                                        <button onClick={login} id="signIn"
                                            className="btn btn-primary btn-block rounded-pill shadow">Sign in</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};


export default Login;