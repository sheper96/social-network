import classes from "./MyPosts.module.css"
import Post from "./Post/Post";
import * as React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";



function MyPosts(props) {


    debugger
    let onAddPost = () => {

       props.addPost()


    }

    let onPostChange = (e) => {
        props.onPostChange(e.currentTarget.value)

    }


    let posts = props.myPostData.map(p => {

        return (
            <Post message={p.message} likeCount={p.likeCount}/>
        )
    })

    return (
        <div className={classes.postsBlock}>
            <div>
                <h3>My Post</h3>
            </div>
            <div>
                <textarea onChange={onPostChange}  value={props.newPostText}></textarea>
                <button onClick={onAddPost}>Add Post</button>
            </div>
            <div className={classes.posts}>
                {posts}
            </div>
        </div>
    );
}


export default MyPosts;

