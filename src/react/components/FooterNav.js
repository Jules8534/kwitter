import React from "react";
// import { Spinner } from ".";
// import { withAsyncAction } from "../HOCs";
import "./FooterNav.css";

class FooterNav extends React.Component {

    render() {
        return (
            <div className="FooterNavClass">
                <ul id="FooterNavLinkListId">
                    <li className="footerListItem"><a href="https://www.google.com">Terms fake link</a></li>
                    <li className="footerListItem"><a href="https://www.google.com">Privacy policy fake link</a></li>
                    <li className="footerListItem"><a href="https://www.google.com">Cookies fake link</a></li>
                    <li className="footerListItem"><a href="https://www.google.com">Ads info fake link</a></li>
                    <li className="footerListItem"><a href="https://www.google.com">More fake link</a></li>
                    <li className="footerListItem"><a href="https://www.google.com">© 2019 CJK Kwitter, Inc. fake link</a></li>
                </ul>
            </div>
        )
    }

}
export default FooterNav