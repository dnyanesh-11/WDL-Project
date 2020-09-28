import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="form sign-in">
        <h2>Welcome back,</h2>
        <label>
          <span>Email</span>
          <input type="email" />
        </label>
        <label>
          <span>Password</span>
          <input type="password" />
        </label>
        <p className="forgot-pass">Forgot password?</p>
        <button type="button" className="submit">
          Sign In
        </button>
      </div>
    );
  }
}

export default Login;
