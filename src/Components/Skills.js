import React from "react";
import "./Skills.css";
import htmlLogo from "../Assests/Icons/html.png";
import cssLogo from "../Assests/Icons/cssLogo.png";
import reactLogo from "../Assests/Icons/reactLogo.png";
import gitLogo from "../Assests/Icons/gitLogo.png";
import githubLogo from "../Assests/Icons/githubLogo.png";
import expressLogo from "../Assests/Icons/expressLogo.png";
import nodeLogo from "../Assests/Icons/nodeLogo.png";
import mongoDBLogo from "../Assests/Icons/mongoDBlogo.png";
import flaskLogo from "../Assests/Icons/flaskLogo.png";
import mysqlLogo from "../Assests/Icons/mysqlLogo.png";

function Skills() {
  return (
    <div className="skills-container">
      <p className="my-skills-text">My skills</p>
      <div className="skills-div">
        <div className="frontend-stack">
          <p className="tech-text">Frontend</p>
          <div className="inner-div">
            <div className="each-skill">
              <img src={htmlLogo} />
              <p>html</p>
            </div>
            <div className="each-skill">
              <img src={cssLogo} />
              <p>css</p>
            </div>
            <div className="each-skill">
              <img src={reactLogo} />
              <p>reactjs</p>
            </div>
          </div>
        </div>
        <div className="backend-stack">
          <p className="tech-text">Backend</p>
          <div className="inner-div">
            <div className="each-skill">
              <img src={expressLogo} />
              <p>expressjs</p>
            </div>
            <div className="each-skill">
              <img src={nodeLogo} />
              <p>nodejs</p>
            </div>
            <div className="each-skill">
              <img src={flaskLogo} />
              <p>flask</p>
            </div>
          </div>
        </div>
        <div className="database-stack">
          <p className="tech-text">Database</p>
          <div className="inner-div">
            <div className="each-skill">
              <img src={mongoDBLogo} />
              <p>mongodb</p>
            </div>
            <div className="each-skill">
              <img src={mysqlLogo} />
              <p>mysql</p>
            </div>
          </div>
        </div>

        <div className="git-github">
          <p className="tech-text">Version Control</p>
          <div className="inner-div">
            <div className="each-skill">
              <img src={gitLogo} />
              <p>git</p>
            </div>
            <div className="each-skill">
              <img src={githubLogo} />
              <p>github</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;