import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LinkTotal.module.css";

function LinkTotal({ total }) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/link/make");
  };

  return (
    <div className={styles["link-total"]}>
      <div className={styles["link-total__text"]}>
        합계 :{" "}
        <span className={styles["link-total__price"]}>
          {total.toLocaleString()}
        </span>
        <span className={styles["link-total__won"]}>원</span>
      </div>
      <button
        className={styles["link-total__button"]}
        onClick={handleButtonClick}
      >
        결제 링크 <br />
        만들기
      </button>
    </div>
  );
}

export default LinkTotal;
