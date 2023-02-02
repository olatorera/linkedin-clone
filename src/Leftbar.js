import { Avatar, Box, Button } from "@material-ui/core";
import React from "react";
import "./Leftbar.css";
import sidebar from "../src/images/sidebar.png";
import linkedinblob from "../src/images/linkedinblob.jpeg";

const Sidebar = () => {
  return (
    <div className="sidebar__body">
      <div className="sidebar-top">
        <div className="sidebar-stats"></div>
        <div>
          <Avatar className="sidebar-avatar" />
          <p> Job Vacancies in Nigeria</p>
          <Button variant="outlined">Follow</Button>
        </div>
        <div>
          <Avatar className="sidebar-avatar" />
          <p> Job Vacancies in Nigeria</p>
          <Button variant="outlined">Follow</Button>
        </div>
        <div>
          <Avatar className="sidebar-avatar" />
          <p> Job Vacancies in Nigeria</p>
          <Button variant="outlined">Follow</Button>
        </div>
      </div>

      <div className="sidebar-bottom">
        <img src={sidebar} alt="" className="see who is hiring" />
        <footer className="bottom-text">
          <div className="footer1">
            <p>About</p>
            <p>Accessibility</p>
            <p>Help Center</p>
          </div>
          {/* <div>
            <p>Privacy & Terms</p>
            <p>Ad Choices</p>
            <p>Advertising</p>
          </div>
          <div>
            <p>Business Services</p>
            <p>Get the LinkedIn app</p>
            <p>More</p> */}
          {/* </div> */}
        </footer>
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
