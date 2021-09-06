import { Link } from "react-router-dom";

import "../css/components/_navbar.css";
const name = "<LG/>";

const Navbar = (props) => {
  return (
    <header className="header">
      <h1 className="name_logo">
        <a href="/">{name}</a>
      </h1>
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
      <div
        className="hamburger_menu"
        role="button"
        onClick={() => props.toggleSidebar(!props.isOpen)}
      >
        ☰
      </div>
    </header>
  );
};

export default Navbar;
