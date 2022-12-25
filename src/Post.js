import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";

const Post = ({ name, description, message, photoUrl }) => {
  return (
    <div className="Post">
      <div className="post-header">
        <Avatar />
        <div className="post-info">
          <h2> Sanusi Olatorera</h2>
          <p>Description</p>
        </div>
      </div>

      <div className="post-body">
        <p>Message comes in here</p>
      </div>
    </div>
  );
};

export default Post;
