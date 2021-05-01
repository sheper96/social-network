import classes from "./../Dialogs.module.css"
import * as React from "react";

function Message(props) {





    return (
        <div className={classes.message}>{props.message}

        </div>
    )
}



export default Message;