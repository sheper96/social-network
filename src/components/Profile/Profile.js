import classes from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile(props) {


    return (

        <div className={classes.content}>
            <ProfileInfo/>
            <MyPostsContainer
             />
        </div>
    );

}


export default Profile;

