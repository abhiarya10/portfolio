import React, { useContext } from "react";
import "./App.css";
import { darkModeContext } from "./globalState/globalDarkMode";

import Introduction from "./Components/Introduction";
import Navbar from "./Components/Navbar";
import Project from "./Components/Project";
import ParticleBg from "./Components/ParticleBg";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Footer from "./Components/Footer";

function App() {
  const { globalDark } = useContext(darkModeContext);
  return (
    <div className={`${globalDark ? "app-dark-mode" : "app-mian-body"}`}>
      <ParticleBg />
      <Navbar />
      <Introduction />
      <Skills />
      <Education />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
