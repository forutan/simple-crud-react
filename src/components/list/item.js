import React, { Component } from "react";
import "./item.css";
class ListItem extends Component {
  state = {};
  render() {
    return (
      <li className="card">
        <img className="profile" src={this.props.avatar} alt={"profile"} />
        <div className="container">
          <h4>
            <b>{this.props.title}</b>
          </h4>
          <p>{this.props.children}</p>

          <button className="btn" onClick={this.props.onDelete}>
            delete
          </button>

          <div className="clear" />
        </div>
      </li>
    );
  }
}

export default ListItem;
