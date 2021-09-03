import { Link } from "react-router-dom";

import "../css/components/_sidenav.css";

function Sidenav(props) {
  return (
    <div
      id="mySidenav"
      className={props.isOpen ? "sidenav_open" : "sidenav_closed"}
    >
      <nav>
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
    </div>
  );
}

export default Sidenav;
