import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";
import FindLinks from "../FindLinks/FindLinks";
import styles from "./LoginWrapper.module.css";

function LoginWrapper() {
  return (
    <div className={styles["login"]}>
      <div className={styles["login-wrapper"]}>
        <div className={styles["login-wrapper__logo"]}>
          <div className={styles["login-wrapper__name"]}>SNS 미니 스토어</div>
          <img
            className={styles["login-wrapper__logo-image"]}
            src="/gh-logo.svg"
            alt="GGshop Logo"
          />
        </div>
        <LoginForm />
        <FindLinks />
        <div className={styles["login-wrapper__line"]} />
        <button className={styles["login-wrapper__register-btn"]}>
          <Link to="/register" className={styles["login-wrapper__link"]}>
            회원가입
          </Link>
        </button>
      </div>
      <div className={styles["app-download"]}>
        <img className={styles["app-download__img"]} src="/mobile-icon.svg" />
        <div className={styles["app-download__text"]}>
          GGPAY APP
          <br /> 다운로드
        </div>
      </div>
    </div>
  );
}

export default LoginWrapper;
