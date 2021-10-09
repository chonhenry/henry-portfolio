import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <h2 className="projects-heading">
        <span className="heading-num">03.</span> Contact
      </h2>
      <h1 className="contact-title">Get In Touch</h1>
      <p className="contact-texts">
        I am currently open to new job opportunties, so feel free to reach out
        to me. Also feel free to connect me on Linkedin.
      </p>
      <div className="contact-info">
        <i class="fas fa-phone-alt"></i>
        +1 201-214-7248
      </div>
      <div className="contact-info">
        <i class="fas fa-at"></i>
        chonhenry@outlook.com
      </div>
    </section>
  );
};

export default Contact;
