const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';

let initialSate = {
    dialogsData: [{id: 1, name: 'Valera'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Jenya'},
        {id: 4, name: 'Petya'},],
    messageData: [{id: 1, message: 'hi'},
        {id: 2, message: 'How it is going?'},
        {id: 3, message: 'Nice'},
    ],
    newMessageText: 'hello'
}

const dialogsReducer = (state = initialSate, action) => {
    switch (action.type) {

        case UPDATE_NEW_MESSAGE_TEXT:
            return {...state, newMessageText:action.newMessage}
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText,
            };
            return {...state,newMessageText:'', messageData: [...state.messageData,newMessage]}
    }
    return state;
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE,


    }
}
export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,

        newMessage: text
    }
}

export default dialogsReducer;