import './App.css';
import { Component } from 'react';
import NavbarComponent from './NavbarComponent';
import {CartProvider} from './CartContext'

class App extends Component {
  render() {
    return (
      <>
      <CartProvider>
      <NavbarComponent></NavbarComponent>
      </CartProvider>
      </>
    );
  }
}

export default App;
