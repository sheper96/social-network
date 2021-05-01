
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {

    myPostData: [
        {id: 1, message: 'hi, how are you?', likeCount: 12},
        {id: 2, message: 'good job!', likeCount: 13},
        {id: 3, message: 'good job!', likeCount: 13},
        {id: 4, message: 'good job!', likeCount: 13},
    ],
        newPostText: "sfsdf",

}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:

            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            };
          /*  state.myPostData.push(newPost)
            state.newPostText = ' '*/
            return {...state,newPostText:'', myPostData:[...state.myPostData,newPost]}
            break;
        case UPDATE_NEW_POST_TEXT:
            /*state.newPostText = action.newText*/
            return {...state,newPostText:action.newText}
            break;
    }
    return state;
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,

        newText: text
    }
}

export default profileReducer;