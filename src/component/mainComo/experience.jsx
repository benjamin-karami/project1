import React, { Component } from "react";
import Section from "./sections/Section";

class Experience extends Component {
  state = {};
  render() {
    return (
      <div className="mt-5">
        <h2 className="font-weight-bold">{this.props.title}</h2>
        <Section
          title="JUNIOR FRONT-END-DEVELOPER"
          date="Feb 2019 - Present"
          place="PARHAM COMPANY"
        />
        <Section
          title="HOTEL RECEPTIONIST"
          date="October 2016 - April 2018"
          place="MELAL HOTELS GROUP"
        />
        <Section
          title="STOCK EXCHANGE"
          date="September 2011 - Present"
          place="TEHRAN STOCK EXCHANGE"
        />
      </div>
    );
  }
}

export default Experience;
