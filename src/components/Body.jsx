import React from "react";
import Profile from "./Profile";
import Sidenav from "./Sidenav";

import "../css/components/_body.css";
import ResumePage from "../pages/Resume";

function Body(props) {
  return (
    <div className="main">
      <Sidenav isOpen={props.isOpen} />
      <Profile />
      <ResumePage />
    </div>
  );
}

export default Body;
