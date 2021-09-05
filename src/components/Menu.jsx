import { Link } from "react-router-dom";

import "../css/components/_menu.css";
import hamburgerMenu from "../static/cil-hamburger-menu.svg";

const name = "<LG/>";

function Menu(props) {
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
        onClick={() => props.toggleSidebar(!props.isOpen)}
      >
        <img
          className="mobile_menu"
          src={hamburgerMenu}
          alt="mobile_menu"
        ></img>
      </div>
    </header>
  );
}

export default Menu;
