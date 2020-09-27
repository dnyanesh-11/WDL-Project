import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LOGINPAGE from "./Pages/Signin";

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LOGINPAGE} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
