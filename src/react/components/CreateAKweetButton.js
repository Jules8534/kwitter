import React from "react";
// import { Spinner } from ".";
// import { withAsyncAction } from "../HOCs";
import "./CreateAKweetButton.css";
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';



class CreateAKweetButton extends React.Component{
    render(){
    return (
        <Fab color="primary" aria-label="edit" href="create" className={makeStyles(theme => ({
            fab: {
              margin: theme.spacing(1),
            },
            extendedIcon: {
              marginRight: theme.spacing(1),
            },
          })).fab}>
        <EditIcon />
      </Fab>
    )
}
}



export default CreateAKweetButton