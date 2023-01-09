import React, { useEffect } from "react";
import "./Feed.css";
import FeedOptions from "./resources/FeedOptions";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./Post";
import { useState } from "react";
import { db } from "./firebase";
import firebase from "firebase/compat/app";

const Feed = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: " Sanusi Anuoluwapo",
      description: "find me",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    console.log(sendPost, "me");
    setInput("");
  };

  return (
    <div className="feed">
      {/* FEED SESSION */}
      <div className="feed-inputMain">
        <div className="feed-input">
          <CreateIcon />
          <form action="submit">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            ></input>
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
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
      {/* <Post
        name="SANUSI OLATORERA"
        description="This a linkedin clone"
        message="I am proud of you"
      /> */}
    </div>
  );
};

export default Feed;
