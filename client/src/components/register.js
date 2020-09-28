import React, { Component } from "react";

var pass;
var conpass;

const emailRegex = RegExp(
  // eslint-disable-next-line
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
// eslint-disable-next-line
const firstlastReg = RegExp(/^[A-Za-z][a-z]{1,50}[a-z]$/);

const phoneRegex = RegExp(/^[1-9]{1}\d{9}$/);

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: null,
      lastname: null,
      email: null,
      password: null,
      confirmpassword: null,
      formErrors: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: "",
      },
    };
  }
  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    this.setState({ formErrors, [name]: value });
    if (name === "firstname") {
      formErrors.firstname = firstlastReg.test(value)
        ? ""
        : "minimum 3 characters required";
    }

    if (name === "lastname") {
      formErrors.lastname = firstlastReg.test(value)
        ? ""
        : "minimum 3 characters required";
    }

    if (name === "email") {
      formErrors.email = emailRegex.test(value) ? "" : "invalid email address";
    }

    if (name === "password") {
      formErrors.password =
        value.length < 6 ? "password must atleast contain 6 characters" : "";

      pass = value;
    }

    if (name === "confirmpassword") {
      formErrors.confirmpassword =
        value !== pass ? "password does not match" : "";
      conpass = value;
    }
    if (pass !== conpass) {
      formErrors.confirmpassword = "password does not match";
    }

    this.setState({ formErrors, [name]: value });
  };
  formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    // validate form errors being empty
    Object.values(formErrors).forEach((val) => {
      val.length > 0 && (valid = false);
    });

    // validate the form was filled out
    Object.values(rest).forEach((val) => {
      val === null && (valid = false);
    });

    return valid;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    var formErrors = { ...this.state.formErrors };

    if (this.formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstname}
        Last Name: ${this.state.lastname}
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);
    } else {
      if (!this.state.firstname) {
        formErrors.firstname = "minimum 3 characters required";
      }
      if (!this.state.lastname) {
        formErrors.lastname = "minimum 3 characters required";
      }

      if (!this.state.email) {
        formErrors.email = "invalid email address";
      }
      if (!this.state.password) {
        formErrors.password = "password must atleast contain 6 characters";
      }
      if (!this.state.confirmpassword) {
        formErrors.confirmpassword = "password does not match";
      }

      this.setState({ formErrors });
    }
  };
  render() {
    const { formErrors } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="form sign-up">
        <h2>Time to feel like home!</h2>
        <label>
          <span>First Name</span>
          <input
            name="firstname"
            id="firstname"
            type="text"
            onChange={this.handleChange}
          />
          {formErrors.firstname.length > 0 && (
            <div style={{ fontSize: 12, color: "red" }}>
              {formErrors.firstname}
            </div>
          )}
        </label>
        <label>
          <span>Last Name</span>
          <input
            name="lastname"
            id="lastname"
            type="text"
            onChange={this.handleChange}
          />
          {formErrors.lastname.length > 0 && (
            <div style={{ fontSize: 12, color: "red" }}>
              {formErrors.lastname}
            </div>
          )}
        </label>
        <label>
          <span>Email</span>
          <input
            name="email"
            id="email"
            type="email"
            onChange={this.handleChange}
          />
          {formErrors.email.length > 0 && (
            <div style={{ fontSize: 12, color: "red" }}>{formErrors.email}</div>
          )}
        </label>
        <label>
          <span>Password</span>
          <input
            name="password"
            id="password"
            type="password"
            onChange={this.handleChange}
          />
          {formErrors.password.length > 0 && (
            <div style={{ fontSize: 12, color: "red" }}>
              {formErrors.password}
            </div>
          )}
        </label>
        <label>
          <span>Confirm Password</span>
          <input
            name="confirmpassword"
            id="confirmpassword"
            type="password"
            onChange={this.handleChange}
          />
          {formErrors.confirmpassword.length > 0 && (
            <div style={{ fontSize: 12, color: "red" }}>
              {formErrors.confirmpassword}
            </div>
          )}
        </label>
        <button type="submit" className="submit">
          Sign Up
        </button>
      </form>
    );
  }
}

export default Register;
