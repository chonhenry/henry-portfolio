import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <ul className={`menu ${open ? "open" : ""}`}>
        <li className="menu-tiem">
          <a className="menu-link" href="/#experience">
            <span className="menu-num">01.</span> Experience
          </a>
        </li>
        <li className="menu-tiem">
          <a className="menu-link" href="/#projects">
            <span className="menu-num">02.</span> Projects
          </a>
        </li>
        <li className="menu-tiem">
          <a className="menu-link" href="/#contact">
            <span className="menu-num">03.</span> Contact
          </a>
        </li>
      </ul>
      {open ? (
        <i class="fas fa-times" onClick={toggle}></i>
      ) : (
        <i class="fas fa-bars" onClick={toggle}></i>
      )}
    </nav>
  );
};

export default Navbar;
