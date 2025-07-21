import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { FaHome, FaTools, FaFolderOpen, FaPaperPlane } from "react-icons/fa";
import "../color/BottomNav.css";

export const BottomNav = () => {
  const [active, setActive] = useState("home");

  const handleClick = (section) => {
    setActive(section);
  };

  return (
    <div className="bottom-nav">
      <HashLink to="#home" smooth onClick={() => handleClick("home")}>
        <FaHome className={active === "home" ? "active-icon" : ""} />
      </HashLink>
      <HashLink to="#skills" smooth onClick={() => handleClick("skills")}>
        <FaTools className={active === "skills" ? "active-icon" : ""} />
      </HashLink>
      <HashLink to="#projects" smooth onClick={() => handleClick("projects")}>
        <FaFolderOpen className={active === "projects" ? "active-icon" : ""} />
      </HashLink>
      <HashLink to="#connect" smooth onClick={() => handleClick("connect")}>
        <FaPaperPlane className={active === "connect" ? "active-icon" : ""} />
      </HashLink>
    </div>
  );
};
