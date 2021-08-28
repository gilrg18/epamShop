import './App.css';
import UserPage from './UserPage.js';
import Cart from './Cart';
import AdminPage from './AdminPage';
import AddModal from './AddModal';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Component } from 'react';
import ConfirmationModal from './ConfirmationModal';
import Login from './Login';
import NavbarComponent from './NavbarComponent';


class App extends Component {
  render() {
    return (
      <>
      <NavbarComponent></NavbarComponent>
      </>
    );
  }
}

export default App;
