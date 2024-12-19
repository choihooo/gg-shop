import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/ResetPw.module.css";
import Modal from "../../shared/components/Modal/Modal"; // 모달 컴포넌트 불러오기

function ResetPw() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isFinded, setIsFinded] = useState(false); // 상태 추가

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleVerifyClick = () => {
    if (!formData.name || !formData.phone) {
      setModalMessage("이름과 전화번호를 모두 입력해 주세요."); // 모달 메시지 설정
      setIsModalOpen(true); // 모달 열기
      return;
    }

    // 인증 성공 로직
    setModalMessage("휴대폰 인증이 성공적으로 완료되었습니다.");
    setIsModalOpen(true);
    setIsFinded(true); // 인증 완료 상태로 변경
  };

  const closeModal = () => {
    setIsModalOpen(false); // 모달 닫기
    setModalMessage(""); // 모달 메시지 초기화
  };

  return (
    <div>
      {!isFinded ? (
        <div className={styles["reset-pw"]}>
          <div
            onClick={() => {
              navigate("/");
            }}
          >
            <img
              src="/close.svg"
              alt="닫기"
              className={styles["reset-pw__closeBtn"]}
            />
          </div>
          <div className={styles["reset-pw__logo"]}>
            <img src="/gh-logo.svg" alt="로고" />
          </div>
          <div className={styles["reset-pw__container"]}>
            <div className={styles["reset-pw__description"]}>
              가입되어 있는 판매자 이름과 전화번호를 입력해주시고 <br />
              휴대폰 인증을 진행해 주세요.
            </div>
            <form className={styles["reset-pw__form"]}>
              <input
                type="text"
                name="name"
                placeholder="이름"
                className={styles["reset-pw__input"]}
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                type="number"
                name="phone"
                placeholder="전화번호"
                className={styles["reset-pw__input"]}
                value={formData.phone}
                onChange={handleInputChange}
              />
              <button
                type="button"
                className={styles["reset-pw__button"]}
                onClick={handleVerifyClick}
              >
                휴대폰 인증
              </button>
            </form>
          </div>
          <Modal
            isOpen={isModalOpen}
            message={modalMessage}
            onClose={closeModal}
          />
        </div>
      ) : (
        <div className={styles["reset-pw"]}>
          <div className={styles["reset-pw__logo"]}>
            <img src="/gh-logo.svg" alt="로고" />
          </div>
          <div className={styles["reseted-pw"]}>
            <div className={styles["reseted-pw__info"]}>
              비밀번호가 ‘0000’으로 초기화되었습니다.
              <br /> 로그인 후 내상점에서 비밀번호 재설정 후<br />
              이용해주세요.
            </div>
            <button
              className={styles["reseted-pw__button"]}
              onClick={() => {
                navigate("/");
              }}
            >
              로그인
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ResetPw;
