import './Post.css'

export function Post(props) {
    return (
        <div className="post">
            <p className="post-name">{props.name}</p>
            <p className="post-content">{props.content}</p>
            <div className="post-likes">&#x2764;&#xfe0f; {props.numLikes}</div>
        </div>
    )
}

export default Post;