import React, { Component } from "react";

class Section extends Component {
  state = {};
  render() {
    return (
      <div className="my-5">
        <div className="d-flex justify-content-between">
          <h4 className="job font-weight-normal">{this.props.title}</h4>
          <h6>{this.props.date}</h6>
        </div>
        <h6 className="job-place">{this.props.place}</h6>
        <p className="mt-3">{this.props.rate}</p>
      </div>
    );
  }
}

export default Section;
