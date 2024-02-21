import React from "react";
import "./App.css";
import Introduction from "./Components/Introduction";
import Navbar from "./Components/Navbar";
import Project from "./Components/Project";
import ParticleBg from "./Components/ParticleBg";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="app-mian-body">
      <ParticleBg />
      <Navbar />
      <Introduction />
      <Skills />
      <Project />
    </div>
  );
}

export default App;
