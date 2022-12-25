import React from "react";
import "./FeedOptions.css";

const FeedOptions = ({ Icon, title, color }) => {
  return (
    <div className="feedoption">
      <Icon style={{ color }} />
      <h4>{title}</h4>
    </div>
  );
};

export default FeedOptions;
