import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@material-ui/core";

// once you see ({}) know that the component was destructured, you can
// destructure the props component by passing in the title and icon
function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className="headerOption">
      {/* to render an icon if it is passed */}
      {Icon && <Icon className="headerOption__icon" />}
      {/* to render an avatar if it is passed */}
      {avatar && <Avatar className="headerOption__icon" src={avatar} />}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
