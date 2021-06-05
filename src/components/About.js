import React from "react";
import profile from "../images/upclose.jpg";
import "./About.css";

import { FaHtml5, FaReact, FaNode, FaSass } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io";
import { SiBootstrap, SiTypescript } from "react-icons/si";

const About = () => {
  return (
    <div className="info" id="About">
      <h2>About Me</h2>
      <div className="bio">
        <p>
          I'm a front-end web developer with six plus years of experience
          working for both established corporations and start-ups! While the
          projects and technologies may have changed over the years, my love for
          solving problems by applying the latest in programming technologies
          has not. After all, what makes a good developer? A great problem
          solver! I absolutely love working with new programming languages and
          learning new things. <br />
          <br />
          Pursuing my passions of art, photography and videography has helped me
          develop a wide range of important skills that I use to create the best
          possible user experience. From designing corporate logos to video
          production, there aren't many jobs I haven't done. I absolutely love
          developing a streamlined and efficient user experience.
          <br />
          <br />
          Why should you consider me for your next project? In addition to
          technical skills, I bring years of experience meeting deadlines and
          delivering a finished product no matter what.
        </p>

        <img className="headshot" src={profile} alt="Dave Fowler headshot" />
      </div>
      <div className="stacks">
        <h2>Skilled In</h2>
        <div className="my_stacks">
          <FaHtml5 className="icon" size="3.5em" color="#F16529"></FaHtml5>
          <IoLogoCss3
            className="icon"
            size="3.5em"
            color="#0098ff"
          ></IoLogoCss3>
          <FaSass className="icon" size="3.5em" color="#c69"></FaSass>
          <DiJavascript1
            className="icon"
            size="3.5em"
            color="#F0DB4F"
          ></DiJavascript1>
          <SiBootstrap
            className="icon"
            size="3.5em"
            color="#563d7c"
          ></SiBootstrap>
          <FaNode className="icon" size="3.5em" color="#3c873a"></FaNode>
          <FaReact className="icon" size="3.5em" color="#61DBFB"></FaReact>
          <SiTypescript
            className="icon"
            size="3.5em"
            color="#007acc"
          ></SiTypescript>
        </div>
      </div>
    </div>
  );
};

export default About;
