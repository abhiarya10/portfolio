import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav-body">
      <p className="my-sign">Abhigyan</p>
      <ul>
        <li>Home</li>
        <li>Project</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
