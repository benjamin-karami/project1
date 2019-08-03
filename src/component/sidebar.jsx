import React, { Component } from "react";

class SideBar extends Component {
  state = {};
  render() {
    return (
      <div className="sideBar text-center col-3">
        <img
          className="profile-img"
          src="http://www.benyaminkarami.ir/img/profile.jpg"
          alt="profile-img"
        />
        <ul className="text-center p-0">
          <li className="sidebar-links mt-5">About</li>
          <li className="sidebar-links mt-3">Experience</li>
          <li className="sidebar-links mt-3">Education</li>
          <li className="sidebar-links mt-3">Skills</li>
          <li className="sidebar-links mt-3">Interests</li>
        </ul>
      </div>
    );
  }
}

export default SideBar;
