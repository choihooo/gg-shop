import React from "react";
import styles from "./DetailModal.module.css";

function DetailModal({ isOpen, message, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className={styles["modal"]}>
      <div className={styles["modal__overlay"]} onClick={onClose}></div>
      <div className={styles["modal__content"]}>
        <div className={styles["modal__message"]}>
          {message.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        <div className={styles["modal__button-wrapper"]}>
          <button
            className={`${styles["modal__button"]} ${styles["modal__button--cancel"]}`}
            onClick={onClose}
          >
            취소
          </button>
          <button
            className={`${styles["modal__button"]} ${styles["modal__button--confirm"]}`}
            onClick={onConfirm}
          >
            URL 만들기
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailModal;
