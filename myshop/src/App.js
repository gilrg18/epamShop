import './App.css';
import React from 'react';
import NavbarComponent from './NavbarComponent';
import UserNavbarComponent from './UserNavbarComponent';
import Login from './Login'


const App = () => {
  const [loggedIn, setLoggedIn] = React.useState('')
  return (
    <>
      {loggedIn === '' && <Login setLoggedIn={setLoggedIn}></Login>}
      {loggedIn === 'ADMIN' && <NavbarComponent></NavbarComponent>}
      {loggedIn === 'USER' && <UserNavbarComponent></UserNavbarComponent>}

    </>
  );

}

export default App;
