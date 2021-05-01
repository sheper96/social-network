
import * as React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



/*function MyPostsContainer(props) {






    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState()
                let onAddPost = () => {

                    store.dispatch(addPostActionCreator())


                }

                let updateNewPostText = (text) => {
                    let action = updateNewPostTextActionCreator(text)
                    store.dispatch(action)
                }
                return <MyPosts onPostChange={updateNewPostText}
                                addPost={onAddPost}
                                myPostData={state.profilePage.myPostData}
                                newPostText={state.profilePage.newPostText}/>
            }}
        </StoreContext.Consumer>
    );
}*/

let mapStateToProps=(state)=>{
    return {
        myPostData:state.profilePage.myPostData,
        newPostText:state.profilePage.newPostText,
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        onPostChange:(text)=>{
            let action = updateNewPostTextActionCreator(text)
            dispatch(action)
        } ,
        addPost:()=>{
            dispatch(addPostActionCreator())
        }
    }

}


const MyPostsContainer= connect(mapStateToProps,mapDispatchToProps)(MyPosts)


export default MyPostsContainer;

