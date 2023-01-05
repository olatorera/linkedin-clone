import React from "react";
import "./Feed.css";
import FeedOptions from "./resources/FeedOptions";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./Post";
import { useState } from "react";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const sendPost = (e) => {
    e.preventDefault();
  };

  return (
    <div className="feed">
      {/* FEED SESSION */}
      <div className="feed-inputMain">
        <div className="feed-input">
          <CreateIcon />
          <form action="submit">
            <input type="text"></input>
            <button action="submit" onClick={sendPost}>
              Send
            </button>
          </form>
        </div>

        <div className="feed-options">
          <FeedOptions Icon={ImageIcon} title="Photo" color="#7885F9" />
          <FeedOptions Icon={SubscriptionIcon} title="Video" color="#E7A33E" />
          <FeedOptions Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <FeedOptions
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="#7FC15E"
          />
        </div>
      </div>

      {/* POST SESSION */}
      {posts.map((post) => (
        <Post />
      ))}
      <Post
        name="SANUSI OLATORERA"
        description="This a linkedin clone"
        message="I am proud of you"
      />
    </div>
  );
};

export default Feed;
