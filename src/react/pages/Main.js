import React from "react";
import { userIsAuthenticated } from "../HOCs";
import { Menu, MainNav, KweetFeed,  FooterNav, YouMightLike } from "../components/index";



    
class Main extends React.Component {
    render() {
        return (
            <div className="entirePage">
                <Menu isAuthenticated={this.props.isAuthenticated} />
                <div className="mainGrid">
                    <MainNav />
                    <KweetFeed/>
                </div>
                    <YouMightLike/>
                <FooterNav />
            </div>
        )
    }
}

export default userIsAuthenticated(Main);
