import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/FindId.module.css";
import { useUserStore } from "../../core/store";
import Modal from "../../shared/components/Modal/Modal"; // 모달 컴포넌트 불러오기

function FindId() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const [isVerified, setIsVerified] = useState(false);
  const [joinDate, setJoinDate] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const setUsername = useUserStore((state) => state.setUsername);

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

    setIsVerified(true);
    setUsername("shop123");
    setJoinDate("24.11.15");
  };

  const closeModal = () => {
    setIsModalOpen(false); // 모달 닫기
    setModalMessage(""); // 모달 메시지 초기화
  };

  return (
    <div className={styles["find-id"]}>
      <div
        onClick={() => {
          navigate("/");
        }}
      >
        <img
          src="/close.svg"
          alt="닫기"
          className={styles["find-id__closeBtn"]}
        />
      </div>
      <div className={styles["find-id__logo"]}>
        <img src="/gh-logo.svg" alt="로고" />
      </div>
      <div className={styles["find-id__container"]}>
        <div className={styles["find-id__description"]}>
          가입되어 있는 판매자 이름과 전화번호를 입력해주시고 <br />
          휴대폰 인증을 진행해 주세요.
        </div>
        <form className={styles["find-id__form"]}>
          <input
            type="text"
            name="name"
            placeholder="이름"
            className={styles["find-id__input"]}
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="전화번호"
            className={styles["find-id__input"]}
            value={formData.phone}
            onChange={handleInputChange}
          />
          <button
            type="button"
            className={styles["find-id__button"]}
            onClick={handleVerifyClick}
          >
            휴대폰 인증
          </button>
          {isVerified && (
            <div className={styles["find-id__success"]}>
              <span>
                <img src="/check.svg" alt="체크" />
                인증되었습니다.
              </span>
            </div>
          )}
        </form>
        {isVerified && (
          <div className={styles["find-id__info"]}>
            <div className={styles["find-id__user-info"]}>
              가입되어 있는 아이디 :{" "}
              <span className={styles["find-id__user-id"]}>shop123</span>
              (가입일시: {joinDate})
            </div>
            <button
              type="button"
              className={styles["find-id__login-button"]}
              onClick={() => navigate("/")}
            >
              이 아이디로 로그인
            </button>
          </div>
        )}
      </div>
      <Modal isOpen={isModalOpen} message={modalMessage} onClose={closeModal} />
    </div>
  );
}

export default FindId;
