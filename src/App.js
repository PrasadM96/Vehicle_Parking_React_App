import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import DashBoard from "./components/dashboard/Dashboard";
import fbConfig from "./config/fbConfig";
import { log } from "util";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: 0,
      user: {}
    };
  }

  componentDidMount() {
    this.authListner();
  }

  authListner() {
    fbConfig.auth().onAuthStateChanged(user => {
      // console.log(user);
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          {this.state.user ? (
            <DashBoard />
          ) : (
            <Switch>
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
            </Switch>
          )}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
