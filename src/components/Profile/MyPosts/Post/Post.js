import classes from "./Post.module.css"

function Post(props) {
    return (
        <div>
            <div className={classes.item}><img
                src="https://forum.truckersmp.com/uploads/monthly_2019_06/imported-photo-186659.thumb.jpeg.7ca80c40fa6e972e04cc2f14f5114d80.jpeg"
                alt=""/>{props.message}
            </div>
            <div>
                <span>like {props.likeCount}</span>
            </div>
        </div>

    );
}


export default Post;

