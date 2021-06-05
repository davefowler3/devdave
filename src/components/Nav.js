import React, { useState } from "react";
import logo from "../images/logo1.png";
import "./Nav.css";

import { GiHamburgerMenu } from "react-icons/gi";

function Nav() {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div className="Navbar">
      <div className="leftSide">
        <img className="logo" src={logo} alt="Dave Fowler's logo" />
      </div>
      <div className="rightSide">
        <div className="links" id={showLinks ? "hidden" : ""}>
          <a href="#About">About</a>
          <a href="#Projects">Projects</a>
          <a href="#Footer">Contact</a>
        </div>
        <button
          onClick={() => setShowLinks(!showLinks)}
          className="hamburger"
          id="hamburger"
        >
          <GiHamburgerMenu size="3.5em" color="#000"></GiHamburgerMenu>
        </button>
      </div>
    </div>
  );
}

export default Nav;
