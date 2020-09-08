import React from "react";
import "./ToggleLike.css";  
import { withAsyncAction } from "../HOCs";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";



class ToggleLike extends React.Component {
  constructor(props){
  super(props)
    this.state = {
      message: this.props.fakeMessage,
      liked: this.likeOrUnlike()
    }
    this.whichToRender = this.whichToRender.bind(this)
    this.likeOrUnlike = this.likeOrUnlike.bind(this)
    this.goTime = this.goTime.bind(this)
  }

  likeOrUnlike () {
    let check = false
    this.props.fakeMessage.likes.forEach(e=>{
    if(Object.values(e).includes(JSON.parse(localStorage.login).result.username)){
        check = true
    }})
    return check
   }

   goTime(boo){
     this.props.toggleLike(this.props.fakeMessage.id)
     this.props.getAllMess(100,0)
     this.setState({liked: boo})
   }

   whichToRender(props) {
    if(this.state.liked){
      return <span>
      
              <ThumbUpIcon
                onClick={() => {
                  this.goTime(false)
                }}
                style={{
                  margin: "0 2px 0 10px"
                }}
              
              />
              
            </span>
      
    }
    else{
         return <span>
          <ThumbUpOutlinedIcon
            onClick={() => {
              this.goTime(true)
            }}
            style={{
              margin: "0 2px 0 10px"
            }}
            
          />
          
         </span>
    }
  }
  render() {
    return <span>
        {/* {console.log(this.state.liked)} */}
         <this.whichToRender props={this.props}/>
      </span>
    ;
  }
}

export default withAsyncAction("likes", "toggleLike")(withAsyncAction("messages","getAllMess")(ToggleLike));