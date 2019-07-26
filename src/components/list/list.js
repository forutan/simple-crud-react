import React, { Component } from "react";
import ListItem from "./item";
import "./list.css";

class List extends Component {
  render() {
    let items = this.props.users;
    return (
      <div>
        <ul className="main-list">
          {items.map(item => {
            return (
              <ListItem
                key={item.id}
                title={item.name}
                avatar={item.avatar}
                onDelete={() => {
                  this.props.onDelete(item);
                }}
              >
                {item.lname}
                <br />
                {item.email}
              </ListItem>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default List;
