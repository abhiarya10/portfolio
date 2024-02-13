import React from "react";
import "./Introduction.css";
import my_pic from "../Assests/my_pic.jpg";

function Introduction() {
  return (
    <div className="intro-body">
      <div className="intro-text-container">
        <p className="my-name">Hi👋, I'm Abhigyan Kumar </p>
        <p className="my-intro">
          A passionate Full Stack Software Developer 🚀 having an experience of
          building Web applications with JavaScript / Reactjs / Nodejs and some
          other cool libraries and frameworks.
        </p>
      </div>
      <div className="my-img-container">
        <img src={my_pic} />
      </div>
    </div>
  );
}

export default Introduction;
