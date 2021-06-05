import React from "react";
import "./Hero.css";
import linkedin from "../images/linkedin-brands.svg";
import github from "../images/github-brands.svg";
import stackoverflow from "../images/stack-overflow-brands.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>Dave Fowler</h1>
        <p className="hero_p">Front-end Developer</p>
        <div className="button">
          <a href="#About">About me</a>
        </div>
      </div>
      <div className="socials">
        <div>
          <a href="https://www.linkedin.com/in/davejf3/">
            <img
              className="social"
              alt="LinkedIn"
              width="40px"
              src={linkedin}
            ></img>
          </a>
        </div>
        <div>
          <a href="https://github.com/davefowler3" class="social">
            <img
              id="git"
              className="social"
              alt="GitHub"
              width="40px"
              src={github}
            ></img>
          </a>
        </div>
        <div>
          <a
            href="https://stackoverflow.com/users/story/15152297?view=Timeline"
            class="social"
          >
            <img
              className="social"
              alt="StackOverflow"
              width="40px"
              src={stackoverflow}
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
