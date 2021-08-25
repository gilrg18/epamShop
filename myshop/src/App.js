import './App.css';
import Home from './Home.js';
import Cart from './Cart';
import AdminPage from './AdminPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Component } from 'react';


class App extends Component {
  render(){
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/cart' exact component={Cart} />
            <Route path='/admin' exact component={AdminPage} />
            <Route path='/' render={() => <div>404 Not Found</div>} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
