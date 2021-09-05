import React from "react";
import Article from "./Article";
import Profile from "./Profile";
import Sidenav from "./Sidenav";

import "../css/components/_body.css";

function Body(props) {
  return (
    <div className="main">
      <Sidenav isOpen={props.isOpen} />
      <Profile />
      <Article />
    </div>
  );
}

export default Body;
