import React from "react";
//context
import { useGlobalContext } from "./context";

const Modal = () => {
  //state
  const { isModalOpen, closeModal, correct, questions } = useGlobalContext();
  return (
    <div
      //add or remove class isOpen
      className={`${isModalOpen ? "modal-container isOpen" : "modal-container"}`}
    >
      <div className="modal-content">
        <h2>congrats!</h2>
        <p>
          You answered{" "}
          {
            //check how many questions in % were
            //answered correctly:
            ((correct / questions.length) * 100)
              //remove decimals
              .toFixed(0)
          }
          % of questions correctly.
        </p>

        <button
          className="close-btn"
          //when close Modal, display Setup Form for next quiz
          //set correct answers back to 0 &
          //close modal
          onClick={closeModal}
        >
          play again
        </button>
      </div>
    </div>
  );
};

export default Modal;
