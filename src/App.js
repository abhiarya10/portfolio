import React, { useContext, useRef } from "react";
import "./App.css";
import { darkModeContext } from "./globalState/globalDarkMode";

import Introduction from "./Components/Introduction";
import Navbar from "./Components/Navbar";
import Project from "./Components/Project";
import ParticleBg from "./Components/ParticleBg";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import downArrow from "./Assests/Icons/downArrow.gif";

function App() {
  const { globalDark } = useContext(darkModeContext);
  const homeRef = useRef(null);
  const projectRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  function scrollHandler(section) {
    let ref;
    switch (section) {
      case "home":
        ref = homeRef;
        break;

      case "project":
        ref = projectRef;
        break;

      case "skills":
        ref = skillsRef;
        break;

      case "contact":
        ref = contactRef;
        break;

      default:
        break;
    }
    const eleOffsetTop = ref.current.offsetTop;
    const windowHeight = window.innerHeight;
    const eleHeight = ref.current.clientHeight;

    const scrollToPosition = eleOffsetTop - (windowHeight - eleHeight) / 2;

    window.scrollTo({
      top: scrollToPosition,
      behavior: "smooth",
    });
  }

  return (
    <div className={`${globalDark ? "app-dark-mode" : "app-mian-body"}`}>
      <ParticleBg />
      <Navbar scrollHandler={scrollHandler} />
      <Introduction ref={homeRef} scrollHandler={scrollHandler} />

      <div className="down-arrow-div" ref={skillsRef}>
        <img src={downArrow} onClick={() => scrollHandler("skills")} />
      </div>

      <Skills ref={skillsRef} />
      <Education />
      <Project ref={projectRef} />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  );
}

export default App;
