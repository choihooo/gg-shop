import React from "react";
import styles from "./LinkModal.module.css";

function LinkModal({ isOpen, message, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={styles["modal"]}>
      <div className={styles["modal-content"]}>
        <div className={styles["modal-message"]}>{message}</div>
        <div className={styles["button-wrapper"]}>
          <button onClick={onClose} className={styles["modal-cancle"]}>
            취소
          </button>
          <button onClick={onClose} className={styles["modal-button"]}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

export default LinkModal;
