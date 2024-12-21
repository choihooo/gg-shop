import React, { useState, useEffect } from "react";
import styles from "./LoginForm.module.css";
import { useUserStore } from "../../../core/store";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const storedUsername = useUserStore((state) => state.username);
  const navigate = useNavigate();
  const [username, setUsername] = useState(storedUsername || "");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", username, "Password:", password);
  };

  useEffect(() => {
    setUsername(storedUsername);
  }, [storedUsername]);

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
        <button
          type="submit"
          className={styles["login-form__button"]}
          onClick={() => {
            navigate("/store");
          }}
        >
          로그인
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
