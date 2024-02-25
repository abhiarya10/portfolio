import React, { useContext } from "react";
import "./Introduction.css";
import my_pic from "../Assests/my_pic.jpg";
import { darkModeContext } from "../globalState/globalDarkMode";

function Introduction() {
  const { globalDark } = useContext(darkModeContext);
  return (
    <div className="intro-body">
      <div className="intro-text-image">
        <div
          className={`${
            globalDark ? "dark-intro-text" : "intro-text-container"
          }`}
        >
          <p className="my-name">Hi👋, I'm Abhigyan</p>
          <p className="my-intro">
            A passionate Full Stack Software Developer 🚀 having an experience
            of building Web applications with JavaScript / Reactjs / Nodejs and
            some other cool libraries and frameworks.
          </p>
          <div className="btns">
            <button
              className={`${globalDark ? "resume-dark-btn" : "resume-btn"}`}
            >
              My Resume
            </button>
            <button
              className={`${globalDark ? "contact-dark-btn" : "contact-btn"}`}
            >
              Contact me
            </button>
          </div>
        </div>
        <div className="my-img-container">
          <img src={my_pic} />
        </div>
      </div>
    </div>
  );
}

export default Introduction;
