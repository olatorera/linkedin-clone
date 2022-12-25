import { Avatar } from "@material-ui/core";
import React from "react";
import RecentItems from "./resources/RecentItems";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar__body">
      <div className="sidebar-top">
        {/*Get images from unsplash  */}
        <img
          src="https://images.unsplash.com/photo-157954629518-9e396f3cc809?ixlib=rb-1.2.1&
              ixid=MXwxMjA3fDBBMHxleHBsb3JllWZLZmR8MXx8fGVufDBBfHw%3D&w-1000&q=80"
          alt=""
          className="sidebar-topImage"
        />
        <Avatar className="sidebar-avatar" />
        <h2>Sanusi Anuoluwapo</h2>
        <h4>Sanusiolatorera@gmail.com</h4>
        <div className="sidebar-stats">
          <div className="sidebar-stat">
            <p> Who viewed you</p>
            <p className="sidebar-statNumber"> 4,599</p>
          </div>

          <div className="sidebar-stat">
            <p> Who viewed you</p>
            <p className="sidebar-statNumber"> 4,599</p>
          </div>
        </div>
      </div>

      <div className="sidebar-bottom">
        <p className="topic-text">Recent</p>
        <RecentItems topics={"reactjs"} />
        <RecentItems topics={"programming"} />
        <RecentItems topics={"softwareengineering"} />
        <RecentItems topics={"developer"} />
        <RecentItems topics={"surveyor"} />
      </div>
    </div>
  );
};

export default Sidebar;
