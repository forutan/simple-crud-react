import React, { Component } from "react";
import "./App.css";
import Nav from "./components/nav/nav";
import List from "./components/list/list";
import AddForm from "./components/addfrom/addForm";
import fakeUsers from "./fakeUsers";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  state = { items: fakeUsers };

  deleteHandler(user) {
    let items = [...this.state.items];
    items = items.filter(value => value.name !== user.name);

    this.setState({ items });
  }

  addHandler = user => {
    user.id = user[-1] + 1;
    fakeUsers.unshift(user);
    this.setState({ items: fakeUsers });
  };
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route
            path="/"
            exact
            component={() => (
              <List
                users={this.state.items}
                onDelete={item => {
                  this.deleteHandler(item);
                }}
              />
            )}
          />
          <Route
            path="/add"
            component={() => (
              <AddForm
                onAdd={user => {
                  this.addHandler(user);
                }}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
