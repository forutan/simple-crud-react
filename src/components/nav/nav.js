import React, { Component } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
class Nav extends Component {
  state = {};
  render() {
    return (
      <div className="main-nav">
        <div className="main-nav-logo">users </div>
        <ul className="menu">
          <li>
            <Link to="/add">ADD</Link>
          </li>
          <li>
            <Link to="/">USERS</Link>
          </li>
        </ul>
        <div className="clear" />
      </div>
    );
  }
}

export default Nav;
