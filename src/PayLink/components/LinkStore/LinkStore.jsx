import React from "react";
import styles from "./LinkStore.module.css";

function LinkStore({ total, onClick }) {
  return (
    <div className={styles["link-total"]}>
      <div className={styles["link-total__text"]}>
        합계 :{" "}
        <span className={styles["link-total__price"]}>
          {total.toLocaleString()}
        </span>
        <span className={styles["link-total__won"]}>원</span>
      </div>
      <button className={styles["link-total__button"]} onClick={onClick}>
        결제 링크 <br />
        저장하기
      </button>
    </div>
  );
}

export default LinkStore;
