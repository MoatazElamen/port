import React from "react";
import Social from "./Social";
import Logo from "../assets/images/logo-white.svg";
const Nav = () => (
  <div className="nav">
    <div className="nav-left">
      <a href="#about">About Me</a>
      <a href="#experience">Experience</a>
      <a href="#contact">Contact Me</a>
      <a href="#projects">My Projects</a>
      <a href="#hire">Hire Me!</a>
    </div>
    <div className="middle">
      <div className="nav-logo">
        <a href="#">
          <img src={Logo} alt="logo" />
        </a>
      </div>
    </div>
    <div className="right">
      <Social />
    </div>
  </div>
);

const Footer = () => (
  <div className="footer">
    <div className="left"> &copy; 2023 Moataz Elamen all rights reserved.</div>
    <div className="middle">
      <a href="https://moatazelamen.com">https://moatazelamen.com</a>
    </div>
    <div className="right">
      <Social />
    </div>
  </div>
);

export { Nav, Footer };
