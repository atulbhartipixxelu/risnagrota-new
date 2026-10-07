import React, { useState } from "react";
import AdmissionForm from '../components/AdmissionForm';


function AdmissionPopup() {
    const [isOpen, setIsOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  const openModal = () => {
    setAnimationClass("open"); // Apply the open animation
    setIsOpen(true); // Display the modal
  };

  const closeModal = () => {
    setAnimationClass("close"); // Apply the close animation
    setTimeout(() => {
      setIsOpen(false); // Hide the modal after the animation
    }, 500); // Match animation duration in CSS
  };

  return (
    <div className="AdmissionPopup">
      {/* Open Modal Button */}
      |
      <button className="open-modal-btn" onClick={openModal}>
       Admission Open
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="modal" onClick={closeModal}>
          <div
            className={`modal-content ${animationClass}`}
            onClick={(e) => e.stopPropagation()} // Prevent closing on modal content click
          >
            <span className="close" onClick={closeModal}>
              &times;
            </span>

            <div className="Admission Form"></div>
           
           <div className="Admission_form_col">
               <AdmissionForm/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdmissionPopup;