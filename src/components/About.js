import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <p className="sentence">Hello, my name is</p>
      <p className="name">
        <strong>Henry Chon</strong>
      </p>
      <p className="introduction">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
        perspiciatis sint aliquid hic temporibus ducimus dicta, ea delectus eum
        architecto et, fugit minus rem, quaerat quia rerum atque? Unde,
        suscipit!
      </p>
      <a className="resume-btn" href="../assets">
        Resume
      </a>
    </section>
  );
};

export default About;
