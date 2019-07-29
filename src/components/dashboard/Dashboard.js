import React, { Component } from "react";
import Notifications from "./Notification";
import Clients from "../projects/Clients";
import { connect } from "react-redux";

class DashBoard extends Component {
  state = {};
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m8">
            <Clients />
          </div>
          <div className="col s12 m2 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(DashBoard);
