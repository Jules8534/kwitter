import React from "react";
import { withAsyncAction } from "../HOCs";
import "../../index.css"
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
//import "@material-ui/icons";
import { connect } from "react-redux"
//import HandleLine from "./HandleLine";


// const fakeUser = {
//     pictureLocation: null, //URI to download
//     username: "testuser",
//     displayName: "Juka2",
//     about: "SE Student at Kenzie!",
//     googleId: null,
//     createdAt: "20191119T14:10:16.100Z",
//     updatedAt: "20191119T14:10:16.100Z"
// }

// const updateUser ={
    
//     username: "string",
//     displayName: "string",
//     about: "string",
//     createdAt: "2019-12-09T23:47:30.361Z",
//     updatedAt: "2019-12-09T23:47:30.361Z",
//     pictureLocation: "string",
//     googleId: "string"
      
//}
class ChangeUserPicture extends React.Component {
    state = { changepicture: ""}
    handleUploadUserPicture = e => {
        alert("Error")
        e.preventDefault();
        this.props.picture(this.state, this.props.loggedInUsername);
            
    };
    handleChange = e => {
        this.setState({[e.target.picture]: e.target.value});
    };
    render () {
        const {loading} = this.props.picture;
        return (
            <div classname ="picture">
             <h2>Change your profile picture</h2>
             
                <form id="picturemenu" onSubmit={this.handleUploadUserPicture}>
                  <TextField
                    style={{width: "100%"}}
                    label="Profile picture"
                    onChange={this.handleChange}
                   />
                   <input type="file" name="picture"/>                    
                   <Button type="submit" className="submitButton" variant="contained" color="primary" disabled={loading}> Submit</Button>                        
                   
                </form>

            </div>
        );
    }
}
// class UserInformation extends React.Component {
//     state
//     render(){
//         return (
//             <div className="UserInformationClass">            
//                 <div className="aboutUser">{fakeUser.about}</div>
//                 <div className="creationUser">{Date(fakeUser.createdAt)}</div>
//             </div>
//         )
//     }
// }
const mapStateToProps = state => {
    return {
        picture: state.users.picture,
        loggedInUsername: state.auth.login.result.username
    };
};

export default connect (mapStateToProps) 
(     withAsyncAction("users", "picture")(ChangeUserPicture) )

