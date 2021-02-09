import React from "react";
import { FaTimes } from "react-icons/fa";
//context
import { useGlobalContext } from "./context";

// III
const Modal = () => {
  //state for closing modal
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div
      //toggle css class: show/hide modal
      className={`${isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}`}
    >
      <div className="modal-container">
        <h3>modal content</h3>
        <button
          className="close-modal-btn"
          //close Modal
          onClick={closeModal}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
