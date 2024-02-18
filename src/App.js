import React from "react";
import "./App.css";
import Introduction from "./Components/Introduction";
import Navbar from "./Components/Navbar";
import Project from "./Components/Project";

function App() {
  return (
    <div className="app-mian-body">
      <Navbar />
      <Introduction />
      <Project />
    </div>
  );
}

export default App;
