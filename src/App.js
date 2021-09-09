import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.scss';

import HomePage from './Pages/homePage/HomePage';
import ShopPage from './Pages/shop/ShopPage';
import Header from './components/header/Header';

const Hats = (props) => {
  console.log(props);
  return (
    <>
      <h1>Hats Pages</h1>
    </>
  );
}

function App() {
  return (
    <>
    <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </>
  );
}

export default App;
