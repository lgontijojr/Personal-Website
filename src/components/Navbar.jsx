import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidenav from "./Sidenav";

import "../css/components/_navbar.css";

const Navbar = (props) => {
  function getWindowWidth() {
    const { innerWidth: width } = window;
    return width;
  }

  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  if (windowWidth > 600) props.toggleSidebar(false);

  return (
    <header className={props.isOpen ? "header_expand" : "header"}>
      <div className="navbar_header">
        <h1 className="name_logo">
          <a href="/">{"<LG/>"}</a>
        </h1>
        <span
          className="hamburger_menu"
          role="button"
          onClick={() => props.toggleSidebar(!props.isOpen)}
        >
          ☰
        </span>
      </div>
      {props.isOpen && (
        <Sidenav isOpen={props.isOpen} toggleSidebar={props.toggleSidebar} />
      )}
      <nav className="nav_bar">
        <ul className="nav_menu">
          <li className="nav_item">
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
    </header>
  );
};

export default Navbar;
