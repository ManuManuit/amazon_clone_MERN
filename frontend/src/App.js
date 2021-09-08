import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'

/** SCREENS */
import Home from './screens/home/Home';
import Header from './components/Header/Header';
import ProductScreen from './screens/ProductScreen/ProductScreen'
import CartScreen from './screens/CartScreen/CartScreen'
import Signin from './screens/signin/Signin'
import Sort from './screens/Sort'
import Api from './screens/Api'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route path="/" component={Home} exact />
        <Route path="/product/:id" component={ProductScreen} exact />
        <Route path="/cart/:id?" component={CartScreen} exact />
        <Route path="/signin" component={Signin} exact />
        <Route path="/sort" component={Sort} exact />
        <Route path="/api" component={Api} exact />
      </div>
    );
  }
}

export default App;
