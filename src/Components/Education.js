import React, { useContext } from "react";
import "./Education.css";
import { darkModeContext } from "../globalState/globalDarkMode";

function Education() {
  const { globalDark } = useContext(darkModeContext);
  return (
    <div className={`${globalDark ? "dark-educ-div" : "educ-div"}`}>
      <div className="sec-educ-div">
        <div className="educ-text-div">
          <p className="education-text">Education</p>
        </div>
        <div className="school-college-div">
          <div className="college-div">
            <p className="course-text">Bachelor of Technology</p>
            <p className="school-name">MIT World Peace University, Pune</p>
            <p className="score">2020-2024 | Score: 8.77 CGPA</p>
          </div>
          <div className="college-div">
            <p className="course-text">12th Standard</p>
            <p className="school-name">Sushant Public school, Muzaffarpur</p>
            <p className="score">2019-2020 | Score: 75%</p>
          </div>
          <div className="college-div">
            <p className="course-text">10th Standard</p>
            <p className="school-name">Jawahar Navodaya Vidyalaya</p>
            <p className="score">2017-2018 | Score: 92%</p>
          </div>
        </div>
      </div>
      <div className="experience-div">
        <div className="educ-text-div">
          <p className="education-text">Experience</p>
        </div>
        <div className="school-college-div">
          <div className="college-div">
            <p className="course-text">Android & IOS Developer, Intern</p>
            <p className="school-name">
              Koushiki Innovision | July-December 2023 |Pune, Maharastra, India
            </p>
            <p className="desc">
              Implemented Dictionary App with React Native and Flask, empowers
              users to effortlessly explore word meanings across multiple
              languages. It allows users to input a word, choose a language, and
              access meanings in various languages. Notable features include
              language selection (English, Hindi, Sanskrit, Chinese, Marathi,
              Tibetan), dynamic word suggestions, advanced search options like
              image search, Translator. It also maintains a history of recent
              searches for logged-in users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
