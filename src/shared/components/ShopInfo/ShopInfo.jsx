import React from "react";
import styles from "./ShopInfo.module.css";

function ShopInfo() {
  return (
    <div className={styles["shop-info"]}>
      <img
        src="/profile.png"
        alt="대표 이미지"
        className={styles["shop-info__image"]}
      />
      <div className={styles["shop-info__details"]}>
        <div className={styles["shop-info__row"]}>
          <span className={styles["shop-info__label"]}>상점명 :</span>
          <span className={styles["shop-info__text"]}>찰스샵</span>
          <span className={styles["shop-info__label"]}>대표 :</span>
          <span className={styles["shop-info__text"]}>박찰스</span>
        </div>
        <div className={styles["shop-info__row"]}>
          <span className={styles["shop-info__label"]}>연락처 :</span>
          <span className={styles["shop-info__text"]}>010-0000-0000</span>
        </div>
        <div className={styles["shop-info__row"]}>
          <span
            className={styles["shop-info__label"]}
            style={{ marginLeft: "8px" }}
          >
            주소 :
          </span>
          <span className={styles["shop-info__text"]}>주소</span>
        </div>
      </div>
    </div>
  );
}

export default ShopInfo;
