import React from "react";
import { SocialIcon } from "react-social-icons";

import "../css/components/_footer.css";

function Footer() {
  return (
    <footer id="footer">
      <SocialIcon
        target="_blank"
        className="social_media_icon"
        url="https://twitter.com/gontijo_jr"
      />
      <SocialIcon
        target="_blank"
        className="social_media_icon"
        url="https://github.com/lgontijojr"
      />
      <SocialIcon
        target="_blank"
        className="social_media_icon"
        url="https://www.linkedin.com/in/lgontijojr/"
      />
      <SocialIcon
        target="_blank"
        className="social_media_icon"
        url="mailto:lgontijojr@gmail.com"
      />
    </footer>
  );
}

export default Footer;
