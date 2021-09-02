import React from "react";
import { Link } from "react-router-dom";

import "../css/components/_topNav.css";

function TopNav() {
  return (
    <header id="topnav">
      <h1 id="name">
        <a href="/">Luiz Gontijo</a>
      </h1>

      <nav id="navigation">
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/resume">Resume</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div id="hamburger_menu"></div>
    </header>
  );
}

export default TopNav;
