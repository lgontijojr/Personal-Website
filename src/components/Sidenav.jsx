import { Link } from "react-router-dom";

import "../css/components/_sidenav.css";

const Sidenav = (props) => {
  return (
    <div
      id="mySidenav"
      className={props.isOpen ? "sidenav_open" : "sidenav_closed"}
    >
      <nav>
        <ul>
          <li>
            <Link
              onClick={() => props.toggleSidebar(!props.isOpen)}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={() => props.toggleSidebar(!props.isOpen)}
              to="/resume"
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              onClick={() => props.toggleSidebar(!props.isOpen)}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidenav;
