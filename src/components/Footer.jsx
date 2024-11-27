import React from "react";

import github from "../static/social_media_icons/github.png";
import linkedin from "../static/social_media_icons/linkedin.png";
import mail from "../static/social_media_icons/mail.png";

import "../css/components/_footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <a href="https://github.com/lgontijojr">
          <img src={github} alt="Github Icon" className="social_media_icon" />
        </a>
        <a href="https://www.linkedin.com/in/lgontijojr/">
          <img src={linkedin} alt="" className="social_media_icon" />
        </a>
        <a href="mailto:lgontijojr@gmail.com">
          <img src={mail} alt="" className="social_media_icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
