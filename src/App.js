import React, { Component } from "react";
import "./App.css";
import SideBar from "./component/sidebar";
import Main from "./component/main";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="container row">
        <SideBar />
        <Main />
      </div>
    );
  }
}

export default App;
