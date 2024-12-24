import React from "react";
import styles from "./BusinessConfirm.module.css";
import { useBusinessTypeStore } from "../../../core/store";
import { useNavigate } from "react-router-dom";

function BusinessConfirm() {
  const { selectedType } = useBusinessTypeStore();
  const navigate = useNavigate();
  const onSubmit = () => {
    navigate("/store/waiting");
  };

  return (
    <div className="wrapper">
      <div className={styles["title"]}>내 상점 정보 등록 완료</div>
      <div className={styles["sub-title-wrapper"]}>
        <div className={styles["sub-title"]}>
          입력하신 내용과 첨부 서류의 내용이 다를 경우 결제받으
          <br />신 매출이 취소 될 수 있습니다. 하단의 내정보와 실제 정<br />
          보가 일치하는지 꼭 확인해 주세요.
        </div>
      </div>
      <div className={styles["info-wrapper"]}>
        <div className={styles["info-row"]}>
          <div className={styles["info-title"]}>상점명 :</div>
          <div className={styles["info-content"]}> 찰스샵</div>
        </div>
        <div className={styles["info-row"]}>
          <div className={styles["info-title"]}>
            {selectedType === "non-business"
              ? "주민등록번호 :"
              : "사업자등록번호 :"}
          </div>
          <div className={styles["info-content"]}> 찰스샵</div>
        </div>
        <div className={styles["info-row"]}>
          <div className={styles["info-title"]}>대표 :</div>
          <div className={styles["info-content"]}> 박철수</div>
        </div>
        <div className={styles["info-row"]}>
          <div className={styles["info-title"]}>연락처 :</div>
          <div className={styles["info-content"]}> 010-0000-0000</div>
        </div>
        <div className={styles["info-row"]}>
          <div className={styles["info-title"]}>주소 :</div>
          <div className={styles["info-content"]}>
            서울특별시 강서구 둔내길45 101동 204호
          </div>
        </div>
        <div className={styles["info-row"]}>
          <div className={styles["info-title"]}>입금 계좌 :</div>
          <div className={styles["info-content"]}>
            <span>신한</span> 110-455-1378654
          </div>
        </div>
      </div>
      <div className={styles["button-wrapper"]}>
        <button className={styles["button"]} onClick={onSubmit}>
          상점등록 승인신청
        </button>
      </div>
    </div>
  );
}

export default BusinessConfirm;
