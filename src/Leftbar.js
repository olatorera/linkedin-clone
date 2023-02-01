import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import sidebar from "../src/images/sidebar.png";
import linkedinblob from "../src/images/linkedinblob.jpeg";

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
        <img src={sidebar} alt="" className="see who is hiring" />
        <div>
          <p>About</p>
          <p>Accessibility</p>
          <p>Help Center</p>
          <p>Privacy & Terms</p>
          <p>Ad Choices</p>
          <p>Advertising</p>
          <p>Business Services</p>
          <p>Get the LinkedIn app</p>
          <p>More</p>
        </div>
        <div>
          <img
            src={linkedinblob}
            alt="see who is hiring"
            className="blob-logo"
          />
          <p>LinkedIn Corporation 2023</p>
        </div>
        <p>TeeDev </p>
      </div>
    </div>
  );
};

export default Sidebar;
