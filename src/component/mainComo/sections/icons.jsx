import React, { Component } from "react";

class Icon extends Component {
  state = {};
  render() {
    return (
      <li>
        <i className={this.props.icon} />
      </li>
    );
  }
}

export default Icon;
