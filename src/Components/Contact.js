import React from "react";
import "./Contact.css";
import mailLogo from "../Assests/Icons/mailLogo.png";

function Contact({ forwardRef }) {
  return (
    <div className="contact-div" ref={forwardRef}>
      <p>Reach out to me</p>
      <div className="contact-container">
        <div className="mail-div">
          <img src={mailLogo} />
          <a href="mailto:abhi2018arya@gmail.com" className="gmail-link">
            Contact with gmail
          </a>
        </div>
        <p className="or-text">or</p>
        <div className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Message" />
          <button className="contact-sub-btn">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default React.forwardRef((props, ref) => (
  <Contact forwardRef={ref} {...props} />
));
