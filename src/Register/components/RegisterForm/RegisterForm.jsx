import React from "react";
import styles from "./RegisterForm.module.css";

function RegisterForm({
  formData,
  onInputChange,
  onVerifyClick,
  isPhoneVerified,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onInputChange(name, value);
  };

  return (
    <div className={styles["RegisterForm"]}>
      <div className={styles["RegisterForm__title"]}>GGPAY 가입신청</div>
      <form className={styles["register-form__form"]}>
        <input
          type="text"
          placeholder="아이디"
          name="userId"
          className={styles["register-form__input"]}
          value={formData.userId}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="비밀번호"
          name="password"
          className={styles["register-form__input"]}
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="비밀번호 확인"
          name="confirmPassword"
          className={styles["register-form__input"]}
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="이름"
          name="name"
          className={styles["register-form__input"]}
          value={formData.name}
          onChange={handleChange}
        />
        <div className={styles["register-form__phone"]}>
          <input
            type="text"
            placeholder="000-0000-0000"
            name="phone"
            className={styles["register-form__input--phone"]}
            value={formData.phone}
            onChange={handleChange}
          />
          <button
            type="button"
            className={styles["register-form__verify-btn"]}
            onClick={onVerifyClick}
          >
            인증
          </button>
        </div>
        {isPhoneVerified && (
          <div className={styles["verification-status"]}>
            휴대폰 인증이 시도되었습니다.
          </div>
        )}
      </form>
    </div>
  );
}

export default RegisterForm;
