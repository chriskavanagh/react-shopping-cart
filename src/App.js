import React, { Component } from "react";
import Checkout from "./Checkout";
import Posts from "./components/Posts";
import ArrayState from "./components/ArrayState";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/posts" component={Posts} />
          <Route path="/array" component={ArrayState} />
          <Route path="/" component={Checkout} />
        </Switch>
      </div>
    );
  }
}

export default App;
