import { Link } from "react-router-dom";

import "../css/components/_sidenav.css";

const Sidenav = (props) => {
  return (
    <div className="mobile_menu">
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
