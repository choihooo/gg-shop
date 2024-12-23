import React, { useState, useEffect } from "react";
import styles from "./LoginForm.module.css";
import { useUserStore } from "../../../core/store";
import { useNavigate } from "react-router-dom";
import Modal from "../../../shared/components/Modal/Modal";

function LoginForm() {
  const storedUsername = useUserStore((state) => state.username);
  const navigate = useNavigate();
  const [username, setUsername] = useState(storedUsername || "");
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !password) {
      setModalMessage("아이디와 비밀번호를 모두 입력해주세요.");
      setIsModalOpen(true);
      return;
    }
    navigate("/store");
    console.log("Username:", username, "Password:", password);
  };
  const closeModal = () => {
    setIsModalOpen(false);
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
            handleSubmit();
          }}
        >
          로그인
        </button>
      </form>{" "}
      <Modal isOpen={isModalOpen} message={modalMessage} onClose={closeModal} />
    </div>
  );
}

export default LoginForm;
