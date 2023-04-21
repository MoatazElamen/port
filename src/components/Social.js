import React from "react";
import { Discord, Facebook, Github, LinkedIn, Twitter } from "./Icons";

export default function Social() {
  return (
    <div className="social">
      <a target="_blank" href="https://www.facebook.com/moataz2Alamin">
        <Facebook />
      </a>
      <a target="_blank" href="https://github.com/MoatazElamen">
        <Github />
      </a>
      <a target="_blank" href="https://twitter.com/ElamenMotaz">
        <Twitter />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/moataz-mohamed-elamen-872513142"
      >
        <LinkedIn />
      </a>

      <a target="_blank" href="https://discord.gg/Xdatgajd">
        <Discord />
      </a>
    </div>
  );
}
