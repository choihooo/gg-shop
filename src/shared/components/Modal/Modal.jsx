import React from "react";
import styles from "./Modal.module.css";

function Modal({ isOpen, message, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={styles["modal"]}>
      <div className={styles["modal-content"]}>
        <div>{message}</div>
        <button onClick={onClose} className={styles["modal-button"]}>
          확인
        </button>
      </div>
    </div>
  );
}

export default Modal;
