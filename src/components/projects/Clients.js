import React, { Component } from "react";
import firebase from "firebase";
import fbConfig from "../../config/fbConfig";

class Client extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: []
    };
  }

  componentDidMount() {
    const app = firebase
      .database()
      .ref("Car_Parking")
      .child("13 08 02 21");
    app.on("value", snapshot => {
      let values = snapshot.val();

      let valueState = [];
      for (let inn in values) {
        console.log(inn);
        valueState.push({
          Acc_bal: values[inn].inn,
          Name: values[inn].Name
        });
      }
      this.setState({
        person: valueState
      });
    });
  }

  render() {
    return <h5>{this.state.person.Name}</h5>;
  }
}

export default Client;
