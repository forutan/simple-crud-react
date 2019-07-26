import React, { Component } from "react";
import "./addForm.css";

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);

    this.state = {
      formData: {
        name: "",
        lname: "",
        email: "",
        avatar: process.env.PUBLIC_URL + "/images/profile.png"
      }
    };
  }

  submitHandler = ev => {
    ev.preventDefault();
    alert("done");
    console.log(this.state.formData);
    this.props.onAdd(this.state.formData);
    document.getElementById("add-form").reset();
  };

  changeHandlerfName = event => {
    let formData = { ...this.state.formData };
    formData.name = event.target.value;
    this.setState({ formData });
  };

  changeHandlerlName = ev => {
    let formData = { ...this.state.formData };
    formData.lname = ev.target.value;
    this.setState({ formData });
  };
  changeHandlerEmail = ev => {
    let formData = { ...this.state.formData };
    formData.email = ev.target.value;
    this.setState({ formData });
  };

  render() {
    return (
      <form id="add-form" onSubmit={this.submitHandler}>
        <div className="form-group">
          <label>
            firstName
            <input
              name="first-name"
              type="text"
              onChange={ev => {
                this.changeHandlerfName(ev);
              }}
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            lastName
            <input
              name="last-name"
              type="text"
              onChange={ev => {
                this.changeHandlerlName(ev);
              }}
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            email
            <input
              name="name"
              type="email"
              onChange={ev => {
                this.changeHandlerEmail(ev);
              }}
            />
          </label>
        </div>

        <input type="submit" className="submit" value="SUBMIT" />
      </form>
    );
  }
}

export default AddForm;
