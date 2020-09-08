import React from "react";
import "./Kweet.css";
import { withAsyncAction } from "../HOCs";
import HandleLine from './HandleLine'
import ToggleLike from './ToggleLike'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';





//if we have time, make this embiggen on the top of a user profile



class Kweet extends React.Component{
    constructor(props){
    super(props)
      this.state={
        kweetSize: "kweetClass"
      }
      this.handleDeleteMessage = this.handleDeleteMessage.bind(this)
      this.toggleEmbiggen = this.toggleEmbiggen.bind(this)

    }
        
    handleDeleteMessage = e =>{

        const deleteMessage = {
                "id":this.props.fakeMessage.id,
                "statusCode": 0
              }
              this.props.deleteMess(deleteMessage)
        }
       
    toggleEmbiggen = () =>{
      if(this.state.kweetSize==="kweetClass"){
        this.setState({kweetSize: "kweetClassEmbiggen"})}
      else{
        this.setState({kweetSize: "kweetClass"})
      }
    }

    ExtraInfo = (props) =>{
      if(props.size==="kweetClassEmbiggen"){
        let likesArray = []
        props.message.likes.map(e =>{
          likesArray.push(e.username)
          return "what"
        })
        
        let likesList = ""
        likesArray.forEach(e =>{
          likesList+= e + ", "
        })
        likesList = likesList.slice(0,-2)
        
        return (
          <div className="aboutKweet">
            This Kweet has been liked by the following users: {likesList}
          </div>)
      }
      else{
        return null
      }
    }
   
    render(){
        return(
          
            <div className= {this.state.kweetSize}> 
                <HandleLine fakeMessage={this.props.fakeMessage} user={this.props.fakeMessage.username}/>
                <div className="kweetContent">
                    {this.props.fakeMessage.text}
                    <this.ExtraInfo size={this.state.kweetSize} message={this.props.fakeMessage}/>
                </div>
                
        

        <div className="kweetInfoBar">
          <ToggleLike fakeMessage= {this.props.fakeMessage}></ToggleLike>
        {" "}
          <span> {this.props.fakeMessage.likes.length} </span>{" "}
          <DeleteOutlinedIcon onClick={()=>this.handleDeleteMessage()}/>
          <ExpandMoreIcon onClick={()=>this.toggleEmbiggen()}/>
        </div>
      </div>
    );
  }
  }

  export default withAsyncAction("messages","deleteMess")(Kweet)
  
  

