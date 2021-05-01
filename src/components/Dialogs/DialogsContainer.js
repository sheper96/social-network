
import * as React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


/*function DialogsContainer() {





    return (
        <StoreContext.Consumer >
            {
            (store)=> {
                let state = store.getState()
                let updateMessage = (message) => {
                    store.dispatch(updateNewMessageTextActionCreator(message))
                }

                let onSendMessage = () => {
                    store.dispatch(addMessageActionCreator())
                }
                return <Dialogs sendMessage={onSendMessage} onChangeMessage={updateMessage}
                         dialogsData={state.dialogsPage.dialogsData}
                         messageData={state.dialogsPage.messageData}
                         newMessageText={state.dialogsPage.newMessageText}/>
            }}
        </StoreContext.Consumer>
    );

}*/

let mapStateToProps=(state)=>{
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messageData: state.dialogsPage.messageData,
        newMessageText: state.dialogsPage.newMessageText
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        sendMessage: ()=>{
            dispatch(addMessageActionCreator())
        },
        onChangeMessage: (message)=>{
            dispatch(updateNewMessageTextActionCreator(message))
        }
    }

}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;