import React from "react";
// import { Spinner } from ".";
import "./YouMightLike.css";
import { withAsyncAction } from "../HOCs";
import Kweet from "./Kweet.js"

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
      let newMessagesArray = [...whatToCheck.messages]
      newMessagesArray.sort(function compare( a, b ) {
        if ( a.likes.length < b.likes.length ){
          return 1;
        }
        if ( a.likes.length > b.likes.length ){
          return -1;
        }
        return 0;
      })
   
      return newMessagesArray.slice(0,9)
    }
  }

class YouMightLike extends React.Component {
    componentDidMount() {
        this.props.getAllMess(100,0,null);
      }
    render() {
       
        return (
            <div className="YouMightLikeClass">
                
                You Might Like!
                {checkIfNull(this.props.result).map(e=>
                    <Kweet fakeMessage = {e} key={"YML"+e.id} />
                
                    )}
            </div>

        )
    }

}
export default withAsyncAction ("messages", "getAllMess") (YouMightLike)