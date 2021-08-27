import './App.css';
import UserPage from './UserPage.js';
import Cart from './Cart';
import AdminPage from './AdminPage';
import AddModal from './AddModal';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Component } from 'react';
import ConfirmationModal from './ConfirmationModal';


class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
          <Route path='/confirmation' exact component={ConfirmationModal} />
            <Route path='/user' exact component={UserPage} />
            <Route path='/modal' exact component={AddModal}/>
            <Route path='/admin' exact component={AdminPage} />
            <Route path='/cart' exact component={Cart} />
            <Route path='/' render={() => <div>404 Not Found</div>} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
