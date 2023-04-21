import React from "react";
import CallToAction from "./styled/CallToAction";
import Logo from "../assets/images/logo-white.svg";
export default function Hero() {
  return (
    <div className="hero">
      <div className="content">
        <div className="main-logo">
          <img src={Logo} alt="Moataz Elamen" />
        </div>
        <h1 className="tag-name">Moataz Mohamed Elamen</h1>
        <h3 className="job-title">Full Stack Developer 👨‍💻</h3>
        <p>
          Senior full stack web developer with 5 years of experience. Proficient
          in HTML, CSS, JavaScript, PHP, React, Node, Laravel, and more.
          Passionate about delivering high-quality web solutions that exceed
          user expectations. Let's build your next web application!
        </p>
        <CallToAction href="#hire">Hire Me!</CallToAction>
      </div>
    </div>
  );
}
