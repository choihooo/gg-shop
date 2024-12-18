import React from "react";
import styles from "./FindLinks.module.css";

function FindLinks() {
  return (
    <div className={styles["find-links"]}>
      <div className={styles["find-links__item"]}>
        <a className={styles["find-links__link"]} href="/find-id">
          아이디 찾기
        </a>
      </div>
      <div className={styles["find-links__divider"]}></div>
      <div className={styles["find-links__item"]}>
        <a className={styles["find-links__link"]} href="/reset-password">
          비밀번호 초기화
        </a>
      </div>
    </div>
  );
}

export default FindLinks;
