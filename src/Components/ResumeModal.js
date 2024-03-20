import React, { createElement, useContext } from "react";
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

  function handleDownload() {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "resume.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <>
      {modal && (
        <div className="resume-modal-div">
          <button className="download-btn" onClick={handleDownload}>
            Download
          </button>

          <div className="modal-box">
            <button className="resume-close-btn" onClick={closeModalHandler}>
              <FontAwesomeIcon
                icon={faCircleXmark}
                size={30}
                className={`${globalDark ? "dark-close-icon" : "close-icon"}`}
              />
            </button>
            <img
              src={resume}
              className={`${globalDark ? "dark-resume-pic" : "resume-pic"}`}
            />

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
