import React from "react";
import { userIsAuthenticated } from "../HOCs";
import "../../index.css";
import { connect } from "react-redux";
import {
  // HandleLine,
  KweetFeed,
  Menu,
  UserInformation,
  FooterNav,
  MainNav,
  YouMightLike
} from "../components/index";

class Profile extends React.Component {
  state;
  render() {
    return (
      <>
        <div className="entirePage">
          <Menu isAuthenticated={this.props.isAuthenticated} />
          <UserInformation id={this.props.path} whoIsLooking="self" />
          <div className="mainGrid">
            <MainNav />
            <KweetFeed whoseKweets={this.props.path} />
          </div>
          <div>
            <YouMightLike />
            <FooterNav />
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    mess: state.messages,
    user: state.auth.login.result.username,
    path: state.router.location.pathname.slice(9)
  };
}

export default connect(mapStateToProps)(userIsAuthenticated(Profile));
