import metal from "../images/metal.png";
import travel from "../images/travel.png";
import robofriends from "../images/robofriends.png";
import fineart from "../images/fineart.png";
import splash from "../images/splash.png";
import gt from "../images/gt.png";

import { FaHtml5, FaReact, FaNode, FaSass } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io";
import { SiBootstrap } from "react-icons/si";

const worksList = [
  {
    image: metal,
    title: "Metal Commodities",
    stack: ["HTML 5", "CSS3"],
    description:
      "I was presented with the opportunity to work with a local family-owned business in 2017. The company was still owned and operated by family, and had been a mainstay of the local economy for over thirty years. I was tasked with creating an online presence for them while appealing to the needs of both the company and their customers.",
    url: "https://www.metalcommoditiesinc.com/",
    project: "professional",
    featured: true,
  },
  {
    image: travel,
    title: "Travel Abroad",
    stack: ["React", "CSS3", "Node"],
    description:
      "Responsive travel site completed with React. UseState, UseEffect, Hooks and more.",
    gitHub: "https://davefowler3.github.io/",
    project: "personal",
    featured: true,
  },
  {
    image: gt,
    title: "Graphic Tease",
    stack: ["React", "SASS", "Bootstrap"],
    description:
      "Fully responsive e-commerce site for a clothing company based out of New York, NY.",
    project: "professional",
    featured: true,
  },
  {
    image: robofriends,
    title: "RoboFriends",
    stack: ["React", "Node", "CSS3"],
    description:
      "'RoboFriends' is an app built using React Js. Searchable Robot names and data display in realtime. Responsive app. Also uses Tachyons. Made for fun!",
    gitHub: "https://davefowler3.github.io/robofriends/",
    project: "personal",
    featured: true,
  },
  {
    image: fineart,
    title: "Fine Art Gallery",
    stack: ["HTML5", "JavaScript", "CSS3"],
    description:
      "Mock fine art gallery site made to showcase full screeen JavaScript animations.",
    gitHub: "https://davefowler3.github.io/FineArt/",
    project: "personal",
    featured: true,
  },
  {
    image: splash,
    title: "Branded Splash Page",
    stack: ["HTMl5", "JavaScript", "CSS3"],
    description:
      "Habitual Brand splash page designed with Figma and using JavaScript to manipulate the DOM to dynamically change page background.",
    gitHub: "https://davefowler3.github.io/FineArt/",
    project: "personal",
    featured: true,
  },
];

export default worksList;
