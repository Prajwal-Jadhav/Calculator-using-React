import React, { Component } from "react";
import SimpleCalculator from "./Simple/SimpleCalculator";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div
        style={{
          minHeight: "100vh",
          minWidth: "100vw",
          backgroundColor: "#fafafa",
          padding: "1px",
        }}
      >
        <SimpleCalculator />
      </div>
    );
  }
}
