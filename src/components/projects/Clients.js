import React, { Component } from "react";
import firebase from "firebase";
import fbConfig from "../../config/fbConfig";

class Client extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tag: ["13 08 02 21", "CB 89 AC 0E", "D9 47 39 59"],
      person: [],
      Date: 0,
      Hours: 0,
      Minutes: 0,
      Month: 0,
      Year: 0,
      Status: 0
    };
  }

  componentDidMount() {
    this.state.tag.map(e => {
      const app = firebase
        .database()
        .ref("Car_Parking")
        .child(e);
      let values;

      app.on("value", snapshot => {
        values = snapshot.val();

        console.log(values["Park"]["Park_Time"]["Date"]);
        this.setState({
          person: values,
          Date: values["Park"]["Park_Time"]["Date"],
          Hours: values["Park"]["Park_Time"]["Hour"],
          Minutes: values["Park"]["Park_Time"]["Minutes"],
          Month: values["Park"]["Park_Time"]["Month"],
          Year: values["Park"]["Park_Time"]["Year"],
          Status: values["Park"]["Status"]
        });
      });
    });
  }

  render() {
    return (
      <div>
        <br />
        <h5>Static Information</h5>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>

              {/* <th>ParkTime</th> */}
              <th>Item Price</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{this.state.tag[0]}</td>
              <td>{this.state.person["Name"]}</td>

              {/* <td>{this.state.person["Park"]}</td> */}
              <td>{this.state.person["Tel"]}</td>
            </tr>
          </tbody>
        </table>

        <br />
        <h5>Dynamic Information</h5>
        <table>
          <thead>
            <tr>
              {/* {/* <th>Date</th>
              <th>Hours</th>
              <th>Minutes</th>
              <th>Month</th> */}
              {/* <th>ParkTime</th> */}
              {/* <th>Year</th>  */}
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                {this.state.Date}&nbsp;{this.state.Month}&nbsp;
                {this.state.Year}&nbsp;
              </td>
              <td>
                {this.state.Hours}&nbsp;{this.state.Minutes}
              </td>
              <td>{this.state.Status}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Client;
