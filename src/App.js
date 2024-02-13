import React from "react";
import "./App.css";
import Introduction from "./Components/Introduction";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="app-mian-body">
      <Navbar />
      <Introduction />
    </div>
  );
}

export default App;
