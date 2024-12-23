import React, { useState } from "react";
import styles from "./PasswordEdit.module.css";
import Modal from "../../../shared/components/Modal/Modal";
import { useNavigate } from "react-router-dom";

function PasswordEdit() {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.currentPassword) {
      setModalMessage("기존 비밀번호를 입력해 주세요.");
      setIsModalOpen(true);
      return;
    }
    if (!formData.newPassword) {
      setModalMessage("새 비밀번호를 입력해 주세요.");
      setIsModalOpen(true);
      return;
    }
    if (formData.newPassword !== formData.confirmPassword) {
      setModalMessage("새 비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      setIsModalOpen(true);
      return;
    }
    setModalMessage("비밀번호가 변경되었습니다.");
    setIsModalOpen(true);
    navigate("/store/profile");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["form-group"]}>
        <div className={styles["label"]}>아이디 :</div>{" "}
        <div className={styles["content"]}> chals01</div>
      </div>
      <form className={styles["form"]} onSubmit={handleSubmit}>
        <div className={styles["form-group"]}>
          <label className={styles["label"]}>기존 비밀번호 :</label>
          <input
            type="password"
            name="currentPassword"
            value={formData.currentPassword}
            onChange={handleChange}
          />
        </div>
        <div className={styles["form-group"]}>
          <label className={styles["label"]}>새 비밀번호 :</label>
          <input
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
          />
        </div>
        <div className={styles["form-group"]}>
          <label className={styles["label"]}>비밀번호 확인 :</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div className={styles["button-wrapper"]}>
          <button type="submit" className={styles["submit-button"]}>
            새 비밀번호 등록
          </button>
        </div>
      </form>

      {/* 모달 컴포넌트 */}
      <Modal isOpen={isModalOpen} message={modalMessage} onClose={closeModal} />
    </div>
  );
}

export default PasswordEdit;
