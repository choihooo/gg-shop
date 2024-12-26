import React from "react";
import styles from "./AltInfo.module.css";

function AltInfo({ onConfirm }) {
  return (
    <div className={styles["alt-info-wrapper"]}>
      <div className={styles["alt-info"]}>
        수령확인 url을 받으셨는데도 상품을 수령하지 못하신 경우 판매자와
        상의하셔서 <span>결제취소 및 환불</span>을 요청하실 수 있습니다. 만약
        상품을 수령하신 경우 수령확인 버튼을 클릭해 상품수령 확인을 위해 서명해
        주시기 바랍니다.
      </div>
      <div className={styles["alt-info-button-group"]}>
        <button className={styles["alt-info-button-yes"]} onClick={onConfirm}>
          네. 확인 및 수령했습니다.
        </button>
        <button className={styles["alt-info-button-no"]}>
          <img src="/phone.svg" />
          담당자와 연결하기
        </button>
      </div>
    </div>
  );
}

export default AltInfo;
