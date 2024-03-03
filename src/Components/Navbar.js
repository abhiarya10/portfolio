import React, { useState, useContext } from "react";
import "./Navbar.css";
import darkLogo from "../Assests/Icons/dark.png";
import lightLogo from "../Assests/Icons/light.png";
import { darkModeContext } from "../globalState/globalDarkMode";

function Navbar({ scrollHandler }) {
  const { globalDark, setGlobalDark } = useContext(darkModeContext);

  function toggleModeHandler() {
    setGlobalDark(!globalDark);
  }

  return (
    <div className={`${globalDark ? "dark-nav" : "nav-body"}`}>
      <p className="my-sign">Abhigyan Kumar</p>
      <ul className="nav-ul">
        <li>
          <button onClick={() => scrollHandler("home")} className="nav-btn">
            Home
          </button>
        </li>
        <li>
          <button onClick={() => scrollHandler("project")} className="nav-btn">
            Project
          </button>
        </li>
        <li>
          <button onClick={() => scrollHandler("skills")} className="nav-btn">
            Skills
          </button>
        </li>
        <li>
          <button onClick={() => scrollHandler("contact")} className="nav-btn">
            Contact
          </button>
        </li>
        <li>
          {globalDark ? (
            <button className="dark-mode-btn" onClick={toggleModeHandler}>
              <img src={lightLogo} className="light-logo-d" />
            </button>
          ) : (
            <button className="dark-mode-btn" onClick={toggleModeHandler}>
              <img src={darkLogo} className="dark-logo" />
            </button>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
