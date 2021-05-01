import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';


let store = {
    _state: {
        profilePage: {
            myPostData: [
                {id: 1, message: 'hi, how are you?', likeCount: 12},
                {id: 2, message: 'good job!', likeCount: 13},
                {id: 3, message: 'good job!', likeCount: 13},
                {id: 4, message: 'good job!', likeCount: 13},
            ],
            newPostText: "sfsdf",
        },
        dialogsPage: {
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


    },
    _callSubscriber() {
        console.log('State was chenged');
    },


    getState() {
        return this._state
    },
    subscriber(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)


    }


}





export default store;

window.store = store;

