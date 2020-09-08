//maybe we can implement this later

// import React from "react";
// // import { Spinner } from ".";
// import { withAsyncAction } from "../HOCs";
// import TextField from "@material-ui/core/TextField";
// import Kweet from "./Kweet.js"
// import "./Search.css";



// class Search extends React.Component {
//     state= {
//         searchString: ""
//     }
//     checkMessages = (offset, revisedString) =>{
//      console.log("we hit checkMessages")
//         console.log(this.props.searchAllMess(offset))
//         // .result.forEach(e=>{
//         //     let littleResults = []
//         //     console.log("littleresults",littleResults)
//         //     if(e.text.replace(/[^a-zA-Z ]/g, "").includes(revisedString)){
//         //         littleResults.push(e)
//         //     }
//         //     console.log("little",littleResults)
//         //     return littleResults
//         // })
//     }
//     handleSubmit = event => {
//         console.log(this.state.searchString)
//         // console.log(this.props.getAllMess)
//         // let revisedString = this.state.searchString.replace(/[^a-zA-Z ]/g, "")
//         // console.log("revisedString",revisedString)
//         // let searchResults = []
//         // console.log("undefined searchResults", searchResults)
//         // searchResults.push(this.checkMessages(100,revisedString))
//         // console.log("new searchResults", searchResults)
//         // for(let offset = 0; offset <= 10000; offset += 100){
//         //     console.log("in the forloop")
//         //     searchResults = searchResults.concat(this.checkMessages(offset, revisedString))
//         //     console.log("updated search",searchResults)
//         //     }
//         // if(searchResults.length > 10){
//         //     searchResults = searchResults.slice(0,9)
//         //     }
//         // if(searchResults.length > 0){
//         //     console.log(searchResults)
//         //     return  searchResults.map(e=>
//         //         <Kweet fakeMessage = {e} />
//         //         )}
//         // else {
//         //     console.log("no results found")
//         //     return <div>No results found for that string.</div>
//         // }
//     }
//     handleChange = event => {
//         this.setState({ searchString: event.target.value });
//     }


//     render() {
//         return (
//             <div className="SearchClass">
//                 <form className="searchForm" onSubmit={this.handleSubmit}>
//                 <TextField
//                   style={{width: '100%'}}
//                   className="searchString"
//                   label="Enter search terms here"
//                   maxlength="240"
//                   margin="normal"
//                   name="searchString"
//                   value={this.state.searchString}
//                   onChange={this.handleChange}
//                 />
//                 <input type="submit" value="Search"/>
//                 </form>
//             </div>
//         )
//     }

// }
// export default withAsyncAction("messages","searchAllMess")(Search)