const Post = ({ post }) => {

    return (
        <div className="Profile-main-container-post">
            <p>{post.caption}</p>
            {post.image_url ? <img src={post.image_url} alt={post.caption} /> : null}        
        </div>
    )
}
export default Post