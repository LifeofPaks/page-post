import React from "react";

const Posts = ({ posts }) => {
  return (
    <div className="posts">
      <div className="wraps">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="profile">
              <img src={post.avatar} alt="avatar" className="avatar" />
              <div className="profileDetails">
                <p className="name">{post.name}</p>
                <p className="desc">{post.desc}</p>
              </div>
            </div>

            <div className="content">
              <p className="content">{post.content}</p>
              {post.image && (
                <img src={post.image} alt="postImg" className="postImg" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
