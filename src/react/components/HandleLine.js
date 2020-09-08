import React from "react";
import "./HandleLine.css";
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";





class HandleLine extends React.Component {

    render(){
        return(
            <div className="kweetHeader">
                <Avatar 
                    style={{display: 'inline-block'}} 
                    src={this.props.user.pictureLocation ? this.props.user.pictureLocation: "http://simpleicon.com/wp-content/uploads/user-3-64x64.png"} />
                <div>
                <span className="userInfoHandle">
                        <span className="userInfoSpan">
                            {this.props.user.displayName} 
                        </span>
                        <span> </span>
                        <span className="userInfoSpan">
                            <Link className="userInfoLink" to={"/profile/"+this.props.fakeMessage.username}>
                             @{this.props.fakeMessage.username}
                            </Link>
                        </span>
                        
                </span>
                <p>{this.props.fakeMessage.createdAt}</p>
                </div>
            </div>
        )
    }
}

 

export default HandleLine