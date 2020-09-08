import React from "react";
import { LoginForm, Menu, CreateUserForm } from "../components";
import { userIsNotAuthenticated } from "../HOCs";
import { Route } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <div className="loginBox">
          <h2 className="loginTitle">Your favorite microblogging platform</h2>
          <Route exact path="/" render={() => <LoginForm />} />
          <Route path="/signup" render={() => <CreateUserForm />} />
        </div>
      </>
    );
  }
}

export default userIsNotAuthenticated(Home);
