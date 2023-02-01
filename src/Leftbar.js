import { Avatar, Box, Button } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import sidebar from "../src/images/sidebar.png";
import linkedinblob from "../src/images/linkedinblob.jpeg";

const Sidebar = () => {
  return (
    <div className="sidebar__body">
      <div className="sidebar-top">
        <div className="sidebar-stats"></div>
        <Box>
          <Avatar className="sidebar-avatar" />
          <p> Job Vacancies in Nigeria</p>
          <Button variant="outlined">Follow</Button>
        </Box>
        <Box>
          <Avatar className="sidebar-avatar" />
          <p> Job Vacancies in Nigeria</p>
          <Button variant="outlined">Follow</Button>
        </Box>
        <Box>
          <Avatar className="sidebar-avatar" />
          <p> Job Vacancies in Nigeria</p>
          <Button variant="outlined">Follow</Button>
        </Box>
      </div>

      <div className="sidebar-bottom">
        <img src={sidebar} alt="" className="see who is hiring" />
        <Box>
          <p>About</p>
          <p>Accessibility</p>
          <p>Help Center</p>
          <p>Privacy & Terms</p>
          <p>Ad Choices</p>
          <p>Advertising</p>
          <p>Business Services</p>
          <p>Get the LinkedIn app</p>
          <p>More</p>
        </Box>
        <Box>
          <img
            src={linkedinblob}
            alt="see who is hiring"
            className="blob-logo"
          />
          <p>LinkedIn Corporation 2023</p>
        </Box>
        <p>TeeDev </p>
      </div>
    </div>
  );
};

export default Sidebar;
