import React from "react";
import { Spinner } from ".";
import { withAsyncAction } from "../HOCs";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";

import "./LoginForm.css";

class LoginForm extends React.Component {
  state = { username: "", password: "" };

  handleLogin = (e) => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <div className="login">
        <form id="login-form" onSubmit={this.handleLogin}>
          <TextField
            style={{ width: "100%" }}
            label="Username"
            margin="normal"
            name="username"
            onChange={this.handleChange}
          />
          <TextField
            style={{ width: "100%" }}
            label="Password"
            margin="normal"
            type="password"
            name="password"
            onChange={this.handleChange}
          />
          <Button
            className="loginButton submitButton"
            variant="contained"
            color="primary"
            type="submit"
            disabled={loading}
          >
            Login
          </Button>

          <NavLink to="/signup">
            <Button
              className="loginButton signUpButton"
              variant="contained"
              color="primary"
            >
              Sign Up
            </Button>
          </NavLink>
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
}

export default withAsyncAction("auth", "login")(LoginForm);
