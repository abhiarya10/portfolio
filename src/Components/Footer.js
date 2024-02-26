import React, { useContext } from "react";
import "./Footer.css";
import { darkModeContext } from "../globalState/globalDarkMode";

function Footer() {
  const { globalDark } = useContext(darkModeContext);
  return (
    <div className={`${globalDark ? "dark-footer-div" : "footer-div"}`}>
      <p>Made with ❤️ by Abhigyan</p>
    </div>
  );
}

export default Footer;
