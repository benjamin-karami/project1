import React, { Component } from "react";
import Icon from "./sections/icons";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="about">
        <h1 className="my-5 font-weight-bold">
          Benyamin <span style={{ color: "#bd5d38" }}>Karami</span>
        </h1>
        <h6>
          NO.33 . SHEMSHAD ALY · DANESHGAH STREET . OSHAN BLV . ARTESH HIGHWAY,
          (+98) 9128386306
        </h6>
        <a href="#">BENJAMIN.KARAMI@GMAIL.COM</a>
        <p className="mt-5">
          As a Front-End-Developer, I believe it is important to understand both
          Design and Development to achieve a successful User-Facing Product. I
          can assist to produce clean and Functional design where required.
        </p>
        <ul className="d-flex social-net">
          <Icon icon="fa fa-facebook-f mx-3" />
          <Icon icon="fa fa-twitter mx-3" />
          <Icon icon="fa fa-linkedin-in mx-3" />
          <Icon icon="fa fa-instagram mx-3" />
        </ul>
      </div>
    );
  }
}

export default About;
