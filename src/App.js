import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.scss';

import HomePage from './Pages/homePage/HomePage';
import ShopPage from './Pages/shop/ShopPage';
import Header from './components/header/Header';
import Authentication from './Pages/authentication/Authentication';
import { auth } from './firebase/firebase.utils';

const Hats = (props) => {
  console.log(props);
  return (
    <>
      <h1>Hats Pages</h1>
    </>
  );
}

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      currentUser : null,
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser : user})
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <>
      {}
      <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/login" component={Authentication} />
        </Switch>
      </>
    );
  }
}

export default App;
