import React, { useEffect } from "react";
import styles from "./BusinessWaiting.module.css";
import { useNavigate } from "react-router-dom";
import { useTabStore } from "../../../core/store";

function BusinessWaiting() {
  const navigate = useNavigate();
  const { setDisabled } = useTabStore();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/store/profile");
      setDisabled(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div className="wrapper">
      <div className={styles["title"]}>상점등록 승인신청을 완료했습니다</div>
      <div className={styles["info-wrapper"]}>
        <div className={styles["info-title"]}>
          <img src="/warning.svg" /> 승인 요청을 확인중이므로 조금만
          기다려주세요.
        </div>
        <div className={styles["info-content"]}>
          승인이 완료되기 전까지는 일부 기능 사용이 제한됩니다.
        </div>
        <div className={styles["info-content"]}>
          00시간 이내 처리가 완료될 예정이며, <br />
          승인결과는 개별적으로 연락을 드립니다.
        </div>
      </div>
      <div className={styles["content"]}>
        등록 승인 요청 확인은 영업일 기준
        <span>(평일 오전 9시 ~ 오후 6시) 기준 + 1일</span>
        이내 순차적으로 승인 작업을 진행하고 있습니다. 단, 해당 기간 내 승인
        처리가 되지 않았을 경우, 아래 담당자 번호로 연락주시면 빠르게 처리될 수
        있도록 도와드리겠습니다.
      </div>
      <div className={styles["number"]}>
        담당자1: 000-0000-0000
        <br />
        담당자2: 000-0000-0000
      </div>
      <div className={styles["content"]}>
        서류 검토중 허위사실 및 거짓정보가 있을경우 승인이 거부될 수 있으며 이로
        인해 발생되는 법적조치로 인한 형사 처벌로 책임이 뒤따를 수 있습니다.
      </div>
    </div>
  );
}

export default BusinessWaiting;
