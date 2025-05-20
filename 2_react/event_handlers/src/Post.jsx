import './Post.css'
import { useState } from 'react'

export function Post(props) {
    const [numLikes, setNumLikes] = useState(0);

    const handleLike = () => {
      setNumLikes(prev => prev + 1);
    };

    return (
        <div className="post">
            <p className="post-name">{props.name}</p>
            <p className="post-content">{props.content}</p>
            <div className="post-likes">&#x2764;&#xfe0f; {numLikes}</div>
            <button onClick={handleLike}>+ &#x2764;&#xfe0f;</button>
        </div>
    )
}

export default Post;