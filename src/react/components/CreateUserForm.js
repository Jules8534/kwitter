import React from "react";
import { Spinner } from ".";
// import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

import "./CreateUserForm.css"
import { withAsyncAction } from "../HOCs";

// const useStyles = makeStyles(theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: 200,
//   },
// }));

class CreateUserForm extends React.Component {
    state = { username: "", displayName: "", password: ""};

    handleCreateUserForm = c => {
        c.preventDefault ();
        this.props.createUser(this.state);
    };

    update = e => this.setState({ [e.target.name]: e.target.value })

    render(){
        const { loading, error } = this.props;
        const classes = this.props;
        return (
          <div className="signup">
            <h2>Create your account</h2>
            <form onSubmit={this.handleCreateUserForm} className="signupForm" noValidate autoComplete="off">
                <TextField
                  style={{width: '100%'}}
                  className={classes.textField}
                  label="Username"
                  margin="normal"
                  name="username"
                  onChange={this.update}
                />
                <TextField
                  style={{width: '100%'}}
                  className={classes.textField}
                  label="Display Name"
                  margin="normal"
                  name="displayName"
                  onChange={this.update}
                />
                <TextField
                  style={{width: '100%'}}
                  className={classes.textField}
                  label="Password"
                  margin="normal"
                  name="password"
                  type="password"
                  onChange={this.update}
                />
                {/* <TextField
                  style={{width: '100%'}}
                  className={classes.textField}
                  label="Re-type password"
                  margin="normal"
                  name="retypePassword"
                  onChange={this.update}
                /> */}
                <Button className="loginButton" variant="contained" color="primary" type="submit" disable={loading}>
                  Create
                </Button>
                <NavLink exact to="/">
                  <Button className="loginButton backButton" variant="contained" color="primary">
                    Back
                  </Button>
                </NavLink>
            </form>
            {loading && <Spinner name="circle" color="blue" />}
            {error && <p style={{ color: "red" }}>{error.message}</p>}
          </div>
    );     

      }
  }    
  export default  withAsyncAction("users", "createUser")(CreateUserForm)
