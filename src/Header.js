import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import linkedinimagnew from "../src/images/linkedinimagnew.jpeg";
import myImage from "../src/images/torera.jpeg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <img src={linkedinimagnew} className="img" alt="" />

        {/*question how to target a particular image in a div using the > */}

        <div className="header-search">
          {/* material ui searcIcon */}
          <SearchIcon />
          <input
            placeholder="search"
            type="text"
            name=""
            id=""
            className="header-input"
          />
        </div>
      </div>

      <div className="header-right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar={myImage} title="me" />
      </div>
    </div>
  );
};

export default Header;
