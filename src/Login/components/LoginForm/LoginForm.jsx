import React, { useState } from "react";
import styles from "./LoginForm.module.css";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // 로그인 로직을 여기에 추가하세요
    console.log("Username:", username, "Password:", password);
  };

  return (
    <div className={styles["login-form"]}>
      <form className={styles["login-form__form"]} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles["login-form__input"]}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles["login-form__input"]}
        />
        <button type="submit" className={styles["login-form__button"]}>
          로그인
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
