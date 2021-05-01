import classes from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import * as React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";


function Dialogs(props) {
    debugger
    let dialogs = props.dialogsData.map(d => {
        debugger
        return (
            <DialogItem name={d.name} id={d.id}/>
        )
    })


    let messages = props.messageData.map(m => {
        return (
            <Message message={m.message}/>

        )
    })

    let onChangeMessage = (e) => {
        props.onChangeMessage(e.currentTarget.value)
    }

    let sendMessage = () => {
       props.sendMessage()
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogs}
            </div>


            <div className={classes.messages}>
                {messages}
                <textarea  value={props.newMessageText} onChange={onChangeMessage}></textarea>
                <button onClick={sendMessage}>send message</button>
            </div>

        </div>

    );
}

export default Dialogs;