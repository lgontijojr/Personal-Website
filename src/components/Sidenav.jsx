import { Link } from "react-router-dom";

import "../css/components/_sidenav.css";

function Sidenav() {
  return (
    <div id="mySidenav" className="sidenav">
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
