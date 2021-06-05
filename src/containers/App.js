import React from "react";
import "./App.css";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
import Projects from "../components/Projects";

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
