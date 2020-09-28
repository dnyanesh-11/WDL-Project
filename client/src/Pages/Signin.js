import React, { Component } from "react";
import Login from "../components/login";
import Register from "../components/register";
import "./css/Signin.css";
class LOGINPAGE extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: "cont",
    };
  }
  formchange = () => {
    let form = this.state.form;
    if (form === "cont") {
      form = "cont s--signup";
    } else {
      form = "cont";
    }
    this.setState({ form });
  };

  render() {
    return (
      <div className={this.state.form}>
        <Login />
        <div className="sub-cont">
          <div className="img">
            <div className="img__text m--up">
              <h2>New here?</h2>
              <p>Sign up and discover great amount of new opportunities!</p>
            </div>
            <div className="img__text m--in">
              <h2>One of us?</h2>
              <p>
                If you already has an account, just sign in. We've missed you!
              </p>
            </div>
            <div onClick={this.formchange} className="img__btn">
              <span className="m--up">Sign Up</span>
              <span className="m--in">Sign In</span>
            </div>
          </div>
          <Register />
        </div>
      </div>
    );
  }
}

export default LOGINPAGE;
