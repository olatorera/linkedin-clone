import { Avatar, Box, Button } from "@material-ui/core";
import React from "react";
import "./Leftbar.css";
import sidebar from "../src/images/sidebar.png";
import linkedinblob from "../src/images/linkedinblob.jpeg";

const Sidebar = () => {
  return (
    <div className="sidebar__body">
      <div className="sidebar-top">
        <h3>Add to your feed</h3>
        <div className="avatar-text">
          <Avatar className="sidebar-avatar avatar1" />
          <div className="text-btn">
            <p className="feed-text"> Job Vacancies in Nigeria</p>
            <h6 className="feed-text"> Company . Staffing and Recruiting </h6>
            <Button variant="outlined">Follow</Button>
          </div>
        </div>

        <div className="avatar-text">
          <Avatar className="sidebar-avatar avatar1" />
          <div className="text-btn">
            <p className="feed-text"> Anthony Ajulo</p>
            <h6 className="feed-text">
              {" "}
              Managing Partner |Co-founder
              <br />
              |Entrepreur |Investor |
            </h6>
            <Button variant="outlined">Follow</Button>
          </div>
        </div>

        <div className="avatar-text">
          <Avatar className="sidebar-avatar avatar1" />
          <div className="text-btn">
            <p className="feed-text"> MyJobMag Nigeria</p>
            <h6 className="feed-text">Company . Human Resources</h6>
            <Button variant="outlined">Follow</Button>
          </div>
        </div>
        <h5>View all recommendations </h5>
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
