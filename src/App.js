import React, { Component } from "react";
import Checkout from "./Checkout";
import Posts from "./components/Posts";
import { Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/posts" component={Posts} />
          <Route path="/" component={Checkout} />
        </Switch>
      </div>
    );
  }
}

export default App;
