import React, { useContext } from "react";
import "./ResumeModal.css";
import resume from "../Assests/resume.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { darkModeContext } from "../globalState/globalDarkMode";

function ResumeModal({ modal, setModal }) {
  const { globalDark } = useContext(darkModeContext);

  function closeModalHandler() {
    setModal(!modal);
  }
  return (
    <>
      {modal && (
        <div className="resume-modal-div">
          <div className="modal-box">
            <button className="resume-close-btn" onClick={closeModalHandler}>
              <FontAwesomeIcon
                icon={faCircleXmark}
                size={30}
                className={`${globalDark ? "dark-close-icon" : "close-icon"}`}
              />
            </button>
            <img src={resume} className="resume-pic" />
            <div
              className={`${globalDark ? "dark-empty-div" : "empty-div"}`}
            ></div>
          </div>
        </div>
      )}
    </>
  );
}

export default ResumeModal;
