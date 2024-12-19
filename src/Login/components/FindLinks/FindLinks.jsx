import React from "react";
import styles from "./FindLinks.module.css";
import { useNavigate } from "react-router-dom";

function FindLinks() {
  const navigate = useNavigate();
  return (
    <div className={styles["find-links"]}>
      <div className={styles["find-links__item"]}>
        <div
          className={styles["find-links__link"]}
          onClick={() => {
            navigate("/find-id");
          }}
        >
          아이디 찾기
        </div>
      </div>
      <div className={styles["find-links__divider"]}></div>
      <div className={styles["find-links__item"]}>
        <div
          className={styles["find-links__link"]}
          onClick={() => {
            navigate("/reset-pw");
          }}
        >
          비밀번호 초기화
        </div>
      </div>
    </div>
  );
}

export default FindLinks;
