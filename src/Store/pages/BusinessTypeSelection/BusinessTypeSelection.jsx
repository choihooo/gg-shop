import React from "react";
import styles from "./BusinessTypeSelection.module.css";
import { useBusinessTypeStore } from "../../../core/store";
import { useNavigate } from "react-router-dom";

function BusinessTypeSelection() {
  const { selectedType, setSelectedType } = useBusinessTypeStore();
  const navigate = useNavigate();
  const onSubmit = () => {
    navigate("/store/input");
  };
  return (
    <div className={styles["business-selection"]}>
      <div className={styles["business-selection__title"]}>
        등록된 상점 정보가 없습니다.
      </div>
      <div className={styles["business-selection__subtitle"]}>
        유형을 선택해주세요.
      </div>

      <div className={styles["business-selection__buttons"]}>
        <div
          className={`${styles["business-selection__button"]} ${
            selectedType === "business" ? styles["active"] : ""
          }`}
          onClick={() => setSelectedType("business")}
        >
          {selectedType === "business" ? (
            <img src="/business-active.svg" alt="사업자 활성화" />
          ) : (
            <img src="/business-nonactive.svg" alt="사업자 비활성화" />
          )}
        </div>

        <div
          className={`${styles["business-selection__button"]} ${
            selectedType === "non-business" ? styles["active"] : ""
          }`}
          onClick={() => setSelectedType("non-business")}
        >
          {selectedType === "non-business" ? (
            <img src="/non-business-active.svg" alt="비사업자 활성화" />
          ) : (
            <img src="/non-business-nonactive.svg" alt="비사업자 비활성화" />
          )}
        </div>
      </div>

      <section className={styles["business-selection__info"]}>
        <div className={styles["business-selection__info-title"]}>
          결제 대금의 정산 및 입금
        </div>
        <div className={styles["business-selection__info-content"]}>
          1. 지지샵은 판매자가 제공한 상품의 결제 대금을 구매 완료(D+0) 후
          영업일 기준으로 다음날(D+1)에 판매자의 지정 계좌로 입금합니다. 단,
          결제 금액이 100만 원 이상의 경우, 구매자의 물품 수령 확인이 완료된 후
          익일(D+1)에 입금됩니다.
        </div>
        <div className={styles["business-selection__info-content"]}>
          2. 결제 대금 정산 시, 지지샵은 결제 수수료(2.5% VAT 별도)와 물품 수령
          확인 인증 수수료(300원)를 공제한 금액을 판매자에게 입금합니다.
        </div>
        <div className={styles["business-selection__info-content"]}>
          3. 공휴일 및 주말의 경우 결제 대금 입금은 해당 영업일에 진행됩니다.
        </div>
      </section>

      <div className={styles["business-selection__register-button-wrapper"]}>
        <button
          className={styles["business-selection__register-button"]}
          onClick={onSubmit}
          disabled={selectedType === "unselected"}
        >
          정보 등록
        </button>
      </div>
    </div>
  );
}

export default BusinessTypeSelection;
