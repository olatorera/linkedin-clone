import React from "react";
import "../Sidebar.css";

const RecentItems = ({ topics }) => {
  return (
    <div className="sidebar-recentitems">
      <span className="sidebar-hash">#</span>
      <p>{topics}</p>
    </div>
  );
};

export default RecentItems;
