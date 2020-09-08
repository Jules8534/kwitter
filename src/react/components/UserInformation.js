import React from "react";
import "./UserInformation.css";
import { withAsyncAction } from "../HOCs"
import HandleLine from "./HandleLine";
import { connect } from "react-redux"

let fakeUser = {
    pictureLocation: null, //URI to download
    username: "testuser",
    displayName: "testuser",
    about: "I'm a test user! I like cheese and other sorts of cheese.",
    googleId: null,
    createdAt: "20191119T14:10:16.100Z",
    updatedAt: "20191119T14:10:16.100Z"
}


const whichToUse = (fromState) => {
  if(fromState===null){
    return fakeUser
  }
  else{
    return fromState.user
  }
}
class UserInformation extends React.Component {
  componentDidMount() {
    this.props.getOneUser(this.props.path);
  }
    render() {
        return (
          
            <div className="UserInformationClass">
                <HandleLine user={whichToUse(this.props.oneUser.result)} fakeMessage={whichToUse(this.props.oneUser.result)}/>
                <div className="aboutUser">{whichToUse(this.props.oneUser.result).about}</div>
                <div className="creationUser">{Date(whichToUse(this.props.oneUser.result).createdAt)}</div>
                <div className="kweetCountUser" fontSize="small">Kweet, kweet.</div>
              
            </div>
        )
    }
}

function mapStateToProps(state){
  return{
    oneUser: state.users.getOneUser,
    path: state.router.location.pathname.slice(9)
  };
}

export default connect(mapStateToProps)(withAsyncAction("users","getOneUser")(UserInformation))