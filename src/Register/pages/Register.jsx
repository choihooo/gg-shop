import React, { useState } from "react";
import styles from "../styles/Register.module.css";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import RegisterTerms from "../components/RegisterTerms/RegisterTerms";

function Register() {
  const [formData, setFormData] = useState({
    userId: "",
    password: "",
    confirmPassword: "",
    name: "",
    phone: "",
  });
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [agreements, setAgreements] = useState({});
  const [modalMessage, setModalMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleVerifyClick = () => {
    if (!formData.phone) {
      setModalMessage("휴대폰 번호를 입력해주세요.");
      setIsModalOpen(true);
      return;
    }
    setIsPhoneVerified(true);
  };

  const validateInputs = () => {
    // 약관 개별 검사
    if (!agreements[0]) {
      setModalMessage("이용약관에 동의해주세요.");
      setIsModalOpen(true);
      return false;
    }
    if (!agreements[1]) {
      setModalMessage("개인정보 처리방침에 동의해주세요.");
      setIsModalOpen(true);
      return false;
    }

    if (!formData.userId) {
      setModalMessage("아이디를 입력해주세요.");
      setIsModalOpen(true);
      return false;
    }
    if (!formData.password) {
      setModalMessage("비밀번호를 입력해주세요.");
      setIsModalOpen(true);
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setModalMessage("비밀번호가 일치하지 않습니다.");
      setIsModalOpen(true);
      return false;
    }
    if (!formData.name) {
      setModalMessage("이름을 입력해주세요.");
      setIsModalOpen(true);
      return false;
    }
    if (!formData.phone || !isPhoneVerified) {
      setModalMessage("휴대폰 인증이 필요합니다.");
      setIsModalOpen(true);
      return false;
    }
    return true;
  };

  const handleRegisterClick = () => {
    if (validateInputs()) {
      setModalMessage("회원가입이 완료되었습니다!");
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalMessage("");
  };

  return (
    <div className={styles["register"]}>
      <div>
        <img
          src="/close.svg"
          alt="닫기"
          className={styles["register__closeBtn"]}
        />
      </div>
      <div className={styles["register__logo"]}>
        <img src="/gh-logo.svg" alt="로고" />
      </div>
      <RegisterForm
        formData={formData}
        onInputChange={handleInputChange}
        onVerifyClick={handleVerifyClick}
        isPhoneVerified={isPhoneVerified}
      />
      <RegisterTerms agreements={agreements} setAgreements={setAgreements} />
      <div className={styles["register__button-wrapper"]}>
        <button
          className={styles["register__button"]}
          onClick={handleRegisterClick}
        >
          회원가입하기
        </button>
      </div>
      {isModalOpen && (
        <div className={styles["modal"]}>
          <div className={styles["modal-content"]}>
            <div>{modalMessage}</div>
            <button onClick={closeModal}>확인</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Register;