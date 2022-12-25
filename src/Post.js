import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import FeedOptions from "./resources/FeedOptions";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";

const Post = ({ name, description, message, photoUrl }) => {
  return (
    <div className="post">
      <div className="post-header">
        <Avatar />
        <div className="post-info">
          <h2> {name} </h2>
          <p> {description} </p>
        </div>
      </div>

      <div className="post-body">
        <p> {message} </p>
      </div>

      <div className="post_buttons">
        <FeedOptions Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
        <FeedOptions Icon={ChatOutlinedIcon} title="Comment" color="gray" />
        <FeedOptions Icon={ShareOutlinedIcon} title="Share" color="gray" />
        <FeedOptions Icon={SendOutlinedIcon} title="Send" color="gray" />
      </div>
    </div>
  );
};

export default Post;
