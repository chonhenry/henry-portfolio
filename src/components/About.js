import React from "react";
import image from "../assets/pic.jpeg";
import resume from "../assets/Henry_Chon_Resume.pdf";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="left-side">
        <p className="sentence">Hello, my name is</p>
        <p className="name">
          <strong>Henry Chon</strong>
        </p>
        <p className="introduction">
          I enjoy playing with technology. I started my self-taught coding
          journey in January 2020.
        </p>
        <a
          className="resume-btn"
          href="https://docs.google.com/document/d/1Zr1oOl-CC-SUzu-x5HThSKpTqqWW4RFon016RJRzGnc/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>
      <div className="right-side">
        <div className="img-container">
          <img className="intro-image" src={image} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
