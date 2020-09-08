import React from "react";
import "./MainNav.css";
import { Link } from "react-router-dom"
import { connect } from "react-redux"


class MainNav extends React.Component {
   
    render() {
        return (
            <nav className="mainNav">
                <ul>
                    <li><Link to="/">Main Kweed</Link></li>
                    <li><Link to={"/profile/"+ this.props.user}>Profile</Link></li>
                    <li><Link to="/settings">Settings</Link></li>
                </ul>
            </nav>
        )
    }
}

function mapStateToProps(state){
    return{
        user: state.auth.login.result.username
    };
}

export default connect(mapStateToProps) (MainNav);