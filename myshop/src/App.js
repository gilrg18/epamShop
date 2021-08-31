import './css/App.css';
import React from 'react';
import NavbarComponent from './adminComponents/NavbarComponent';
import UserNavbarComponent from './userComponents/UserNavbarComponent';
import Login from './login/Login'


const App = () => {
  const [loggedIn, setLoggedIn] = React.useState('')
    // React.useEffect(()=>{

    // }, [])
  return (
    <>
    
      {loggedIn === '' && <Login setLoggedIn={setLoggedIn}></Login>}
      {loggedIn === 'ADMIN' && <NavbarComponent></NavbarComponent>}
      {loggedIn === 'USER' && <UserNavbarComponent></UserNavbarComponent>}

    </>
  );

}

export default App;
