import React from "react";
import styles from "./SplashScreen.module.css";

function SplashScreen() {
  return (
    <div className={styles["splash-screen"]}>
      <img
        className={styles["splash-screen__logo"]}
        src="/gh-logo.svg"
        alt="GGshop Logo"
      />
      <div className={styles["splash-screen__name"]}>SNS 미니 스토어</div>
    </div>
  );
}

export default SplashScreen;
