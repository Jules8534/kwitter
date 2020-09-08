import React from "react";
// import { Spinner } from ".";
import { withAsyncAction } from "../HOCs";
import "./CreateAKweet.css";
import { Redirect } from "react-router-dom"


class CreateAKweet extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
          value: '',
          redirect: false
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setRedirect = this.setRedirect.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        const newMessage = {
          "text":this.state.value
        }
        this.props.postMess(newMessage)
        event.preventDefault();
        this.setRedirect()

        
      }
      setRedirect = () => {
        this.setState({
          redirect: true
        })
      }
      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/main' />
        }
      }

    
      render() {
        return (
          <div>
           {this.renderRedirect()}
          <form onSubmit={this.handleSubmit} className="formDiv">
            <label>
              Your musings:
              <textarea value={this.state.value} placeholder = "Craft your Kweet here." onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit Kweet" />
          </form>
          </div>
        );
      }
}



export default withAsyncAction("messages", "postMess")(CreateAKweet);