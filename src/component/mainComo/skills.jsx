import React, { Component } from "react";
import Icon from "./sections/icons";

class Skills extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2 className="font-weight-bold">{this.props.title}</h2>
        <div className="mt-5">
          <h5>PROGRAMMING LANGUAGES & TOOLS</h5>
          <ul className="d-flex social-net">
            <Icon icon="fa fa-bootstrap" />
            <Icon icon="fa fa-react" />
            <Icon icon="fa fa-css3-alt" />
            <Icon icon="fa fa-html5" />
            <Icon icon="fa fa-js" />
          </ul>
        </div>
        <div className="mt-5">
          <h5>HERE YOU CAN FIND SOME OF MY WORKS</h5>
          <ul className="mt-4">
            <li className="myWork">Project1</li>
            <li className="myWork">Project2</li>
            <li className="myWork">A Simple Ajax Project</li>
            <li className="myWork">A simple single page App</li>
            <li className="myWork">Digistyle landing</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Skills;
