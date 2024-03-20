import React, { useState, useContext } from "react";
import "./Introduction.css";
import my_pic from "../Assests/my_pic.jpg";
import { darkModeContext } from "../globalState/globalDarkMode";
import ResumeModal from "./ResumeModal";

function Introduction({ forwardRef, scrollHandler }) {
  const { globalDark } = useContext(darkModeContext);
  const [modal, setModal] = useState(false);

  function toggleModal() {
    setModal(!modal);
  }
  return (
    <div className="intro-body" ref={forwardRef}>
      <div className="intro-text-image">
        <div
          className={`${
            globalDark ? "dark-intro-text" : "intro-text-container"
          }`}
        >
          <p className="my-name">Hi👋, I'm Abhigyan</p>
          <p className="my-intro">
            An enthusiastic Full Stack Software Developer 🚀 with expertise in
            crafting dynamic web applications using React.js, Express.js
            Node.js, and various other cutting-edge libraries and frameworks.
          </p>
          <div className="btns">
            <button
              className={`${globalDark ? "resume-dark-btn" : "resume-btn"}`}
              onClick={toggleModal}
            >
              My Resume
            </button>
            <button
              className={`${globalDark ? "contact-dark-btn" : "contact-btn"}`}
              onClick={() => scrollHandler("contact")}
            >
              Contact me
            </button>
          </div>
        </div>
        <div className="my-img-container">
          <img src={my_pic} />
        </div>
      </div>
      <ResumeModal modal={modal} setModal={setModal} />
    </div>
  );
}

export default React.forwardRef((props, ref) => (
  <Introduction forwardRef={ref} {...props} />
));
