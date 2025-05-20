import './Post.css'

export function Post() {

    return (
      <div className="post">
          <p className="post-name">Marquees Brownlee</p>
          <p className="post-content">I want to learn how to build cleaner user interfaces.</p>
          <div className="post-likes">&#x2764;&#xfe0f; 100</div>
      </div>
    )
}

export default Post;