import React from "react";
import styles from "./DeleteModal.module.css";

function DeleteModal({ isOpen, message, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className={styles["delete-modal-overlay"]}>
      <div className={styles["delete-modal"]}>
        <p className={styles["delete-modal__message"]}>{message}</p>
        <div className={styles["delete-modal__buttons"]}>
          <button
            className={styles["delete-modal__confirm"]}
            onClick={onConfirm}
          >
            삭제
          </button>
          <button className={styles["delete-modal__cancel"]} onClick={onClose}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
