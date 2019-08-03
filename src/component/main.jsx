import React, { Component } from "react";
import About from "./mainComo/about";
import Experience from "./mainComo/experience";
import Education from "./mainComo/education";
import Skills from "./mainComo/skills";

class Main extends Component {
  state = {};
  render() {
    return (
      <div className="col-9">
        <About />
        <hr />
        <Experience title="EXPERIENCE" />
        <hr />
        <Education title="EDUCATION" />
        <hr />
        <Skills title="SKILLS" />
      </div>
    );
  }
}

export default Main;
