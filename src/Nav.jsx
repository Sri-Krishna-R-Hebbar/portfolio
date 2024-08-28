import React from "react";
import "./Nav.css"; // Import the CSS for Nav

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__name">Sri Krishna</div>
      <ul className="nav__links">
        <li><a href="#about">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
