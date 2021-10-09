import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <a
        className="footer-link"
        href="https://github.com/chonhenry"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-github"></i>
      </a>
      <i className="fas fa-circle"></i>
      <a
        className="footer-link"
        href="https://www.linkedin.com/in/chonhenry/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-linkedin-in"></i>
      </a>
    </footer>
  );
};

export default Footer;
