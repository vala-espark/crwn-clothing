import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import HomePage from './Pages/homePage/HomePage';
import ShopPage from './Pages/shop/ShopPage';
import Header from './components/header/Header';
import Authentication from './Pages/authentication/Authentication';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

const Hats = (props) => {
  console.log(props);
  return (
    <>
      <h1>Hats Pages</h1>
    </>
  );
}

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, 
          // () => {
          //   console.log(this.state, "USER/......");
          // }
          );
          console.log(this.state,"USER");
        });
      }
      this.setState({currentUser : userAuth});
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        { }
        <Header currentUser={this.state.currentUser} />
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
