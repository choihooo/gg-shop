import React from "react";
import styles from "./DeleteModal.module.css";

function DeleteModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className={styles["modal-overlay"]}>
      <div className={styles["modal"]}>
        <p>
          정말로 선택한 링크를 <br /> 삭제하시겠습니까?
        </p>
        <div className={styles["button-container"]}>
          <button className={styles["delete-btn"]} onClick={onConfirm}>
            삭제하기
          </button>
          <button className={styles["cancel-btn"]} onClick={onClose}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
