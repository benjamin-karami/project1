import React, { Component } from "react";
import Section from "./sections/Section";

class EDUCATION extends Component {
  state = {};
  render() {
    return (
      <div className="mt-5">
        <h2 className="font-weight-bold">{this.props.title}</h2>
        <Section
          title="TEHRAN INSTITUTE OF TECHNOLOGY"
          date="Aug 2018 - Nov 2018"
          place="JAVASCRIPT - JQUERY - AJAX"
          rate="Rate: 93%"
        />
        <Section
          title="TEHRAN INSTITUTE OF TECHNOLOGY"
          date="Jun 2018 - Aug 2018"
          place="HTML - CSS - BOOTSTRAP"
          rate="Rate: 98%"
        />
        <Section
          title="UNIVERSITY OF ALLAMEH GHAZVINI"
          date="September 2010 - October 2014"
          place="BACHELOR DEGREE OF SCIENCE"
          rate="Rate: 15.57"
        />
        <Section
          title="TOHID HIGH SCHOOL"
          date="September 2007 - June 2010"
          place="MATHEMATICAL SCIENCE"
          rate="Rate: 17.00"
        />
      </div>
    );
  }
}

export default EDUCATION;
