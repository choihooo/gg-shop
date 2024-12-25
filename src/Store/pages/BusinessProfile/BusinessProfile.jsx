import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BusinessProfile.module.css";
import { useBusinessTypeStore } from "../../../core/store";

function BusinessProfile() {
  const navigate = useNavigate();
  const { selectedType } = useBusinessTypeStore();

  const handlePasswordEdit = () => {
    navigate("/store/password-edit");
  };

  const handleInfoEdit = () => {
    navigate("/store/input");
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className={styles["profile-container"]}>
      <div className={styles["profile-header"]}>
        <img
          src="/profile.png"
          alt="사업자 프로필"
          className={styles["profile-header__img"]}
        />
      </div>
      <div className={styles["profile-content"]}>
        <div className={styles["profile-content__title"]}>
          {selectedType === "non-business" ? "비사업자 정보" : "사업자 정보"}
        </div>
        <div className={styles["profile-info"]}>
          <div className={styles["profile-info__item"]}>
            <span className={styles["label"]}>아이디 :</span>
            <span className={styles["value"]}>chals01</span>
          </div>
          <div className={styles["profile-info__item"]}>
            <span className={styles["label"]}>상점명 :</span>
            <span className={styles["value"]}>기존결제링크 보기</span>
          </div>
          <div className={styles["profile-info__item"]}>
            <span className={styles["label"]}>
              {selectedType === "non-business"
                ? "주민등록번호 :"
                : "사업자등록번호 :"}
            </span>
            <span className={styles["value"]}>
              {selectedType === "non-business"
                ? "000000-1234567"
                : "000-00-00000"}
            </span>
          </div>
          <div className={styles["profile-info__item"]}>
            <span className={styles["label"]}>대표 :</span>
            <span className={styles["value"]}>박철수</span>
          </div>
          <div className={styles["profile-info__item"]}>
            <span className={styles["label"]}>연락처 :</span>
            <span className={styles["value"]}>010-0000-0000</span>
          </div>
          <div className={styles["profile-info__item"]}>
            <span className={styles["label"]}>주소 :</span>
            <span className={styles["value"]}>
              서울특별시 강서구 둔내길45 342-12
              <br />
              101동 204호
            </span>
          </div>
          <div className={styles["profile-info__item"]}>
            <span className={styles["label"]}>입금 계좌 :</span>
            <span className={styles["value"]}>신한 110-455-1378564</span>
          </div>
          <div className={styles["profile-info__item"]}>
            <span className={styles["label"]}>수수료 :</span>
            <span className={styles["value"]}>2.5%(VAT 별도)</span>
          </div>
          <div className={styles["profile-info__item"]}>
            <span className={styles["label"]}>입금 예정일 :</span>
            <span className={styles["value"]}>
              D+1일
              <br />
              (영업일 기준, 주말 및 공휴일의 경우
              <br />
              다음 영업일에 입금됩니다.)
            </span>
          </div>
        </div>
        <div className={styles["profile-actions"]}>
          <button
            className={styles["action-button"]}
            onClick={handlePasswordEdit}
          >
            비밀번호 수정
          </button>
          <button className={styles["action-button"]} onClick={handleInfoEdit}>
            정보 수정
          </button>
          <button className={styles["action-button"]} onClick={handleLogout}>
            로그아웃
          </button>
        </div>
      </div>
    </div>
  );
}

export default BusinessProfile;
