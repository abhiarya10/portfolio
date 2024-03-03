import React, { useContext } from "react";
import "./Contact.css";
import mailLogo from "../Assests/Icons/mailLogo.png";
import { darkModeContext } from "../globalState/globalDarkMode";

function Contact({ forwardRef }) {
  const { globalDark } = useContext(darkModeContext);

  return (
    <div className="contact-div" ref={forwardRef}>
      <p className={`${globalDark ? "dark-contact-header" : ""}`}>
        Reach out to me
      </p>
      <div
        className={`${
          globalDark ? "dark-contact-container" : "contact-container"
        }`}
      >
        <div className="mail-div">
          <img src={mailLogo} />
          <a href="mailto:abhi2018arya@gmail.com" className="gmail-link">
            Contact via Email
          </a>
        </div>
        <p className="or-text">or</p>
        <div className={`${globalDark ? "dark-contact-form" : "contact-form"}`}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Message" />
          <button
            className={`${
              globalDark ? "dark-contact-sub-btn" : "contact-sub-btn"
            }`}
            onClick={() => alert("Please use ' Contact via Email ' option")}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default React.forwardRef((props, ref) => (
  <Contact forwardRef={ref} {...props} />
));
