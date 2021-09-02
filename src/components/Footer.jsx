import React from "react";
import { SocialIcon } from "react-social-icons";

import "../css/components/_footer.css";

function Footer() {
  return (
    <footer id="footer">
      <SocialIcon
        url="https://twitter.com/"
        style={{ height: "35px", width: "35px" }}
      />
      <SocialIcon
        url="https://github.com/lgontijojr"
        style={{ height: "35px", width: "35px" }}
      />
      <SocialIcon
        url="https://www.linkedin.com/in/lgontijojr/"
        style={{ height: "35px", width: "35px" }}
      />
      <SocialIcon
        url="mailto:lgontijojr@gmail.com"
        style={{ height: "35px", width: "35px" }}
      />
    </footer>
  );
}

export default Footer;
