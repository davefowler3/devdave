import React from "react";
import "../components/Footer.css";

import {
  AiOutlineMail,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer" id="Footer">
      <div className="ft-info">
        <h3>Contact Me</h3>
        <a href="mailto:dave@davefowler.tech">
          <AiOutlineMail
            className="footer-icon"
            size="2.55em"
            color="white"
          ></AiOutlineMail>
        </a>
        <a href="https://www.instagram.com/codewithdave/" target="blank">
          <AiFillInstagram
            className="footer-icon"
            size="2.5em"
            color="#C13584"
          ></AiFillInstagram>
        </a>
        <a href="https://twitter.com/codewithdave">
          <AiOutlineTwitter
            className="footer-icon"
            size="2.55em"
            color="#1da1f2"
          ></AiOutlineTwitter>
        </a>
      </div>
    </div>
  );
};

export default Footer;
