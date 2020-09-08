import React from "react";
// import { userIsAuthenticated } from "../HOCs";
// import { Spinner } from "../components";
// import { withAsyncAction } from "../HOCs";
import { Menu, FooterNav } from "../components/index";
import CreateAKweet from "../components/CreateAKweet";


class CreateAKweetForm extends React.Component{
render() {
    return(
        <div className="entirePage">
            <Menu isAuthenticated={this.props.isAuthenticated} />
            <CreateAKweet />
            <FooterNav />
        </div>
    )
}
}

export default CreateAKweetForm