import React from "react";
// import { Spinner } from ".";
import { withAsyncAction } from "../HOCs";
import "./KweetFeed.css";
import Kweet from "./Kweet.js"
import CreateAKweetButton from "./CreateAKweetButton.js"



const checkIfNull = (whatToCheck) =>{
  if(whatToCheck===null){
    return [
        {
          "id": 1000000000,
          "text": "Please wait for feed to load",
          "username": "loading",
          "createdAt": "2019-11-19T20:32:10.373Z",
          "likes": [ {
            "id": 100000000,
            "username": "string",
            "messageId": 0,
            "createdAt": "2019-12-06T01:21:48.010Z"
          }]
        }
      ]
  
}
  else{
    return whatToCheck.messages
  }
}


class KweetFeed extends React.Component {
  componentDidMount() {
    this.props.getAllMess(100,0,this.props.whoseKweets);
    this.props.getUserMess(100,0,this.props.whoseKweets);
  }
    render() {
        return (
        
          <React.Fragment>
            
            <div
                 className="KweetFeedClass">
                   <CreateAKweetButton />
                {checkIfNull(this.props.result).map(kweet =>{
                  return <Kweet fakeMessage = {kweet} key={"KF"+kweet.id}/>
                })}
            </div>
        
          </React.Fragment>
        )
    }
}

export default withAsyncAction ("messages", "getAllMess")(withAsyncAction("messages","getUserMess") (KweetFeed))