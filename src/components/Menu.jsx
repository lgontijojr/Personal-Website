import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidenav from "./Sidenav";

import "../css/components/_menu.css";
import hamburgerMenu from "../static/hamburger_icon.png";

const name = "<Luiz Gontijo/>";

function Menu() {
  const [isOpen, toggleSidebar] = useState(false);

  function renderSidebar() {
    if (isOpen) {
      return <Sidenav />;
    }
  }

  return (
    <header id="menu">
      <h1 id="name">
        <a href="/">{name}</a>
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

      <div
        id="hamburger_menu"
        role="button"
        onClick={() => toggleSidebar(!isOpen)}
      >
        <img src={hamburgerMenu}></img>
      </div>
      {renderSidebar()}
    </header>
  );
}

export default Menu;
