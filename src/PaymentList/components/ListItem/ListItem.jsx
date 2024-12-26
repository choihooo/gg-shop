import React from "react";
import styles from "./ListItem.module.css";

function ListItem({ item }) {
  const renderLinkStatus = () => {
    switch (item.linkRequired) {
      case "필요":
        return <div className={styles["warning"]}>수령확인 url 필!</div>;
      case "확인":
        return <div className={styles["complete"]}>수령확인 완료</div>;
      case "":
        return null;
      default:
        return null;
    }
  };
  return (
    <div className={styles["list-item"]}>
      <div className={styles["info"]}>
        <div className={styles["info-row"]}>
          <span>생성일시 :</span> {item.date}
        </div>
        <div className={styles["info-row"]}>
          <span>구매자 :</span> {item.buyer} ({item.phone})
        </div>
        <div className={`${styles["amount"]} ${styles["info-row"]}`}>
          <span
            className={
              item.complete
                ? styles["status-complete"]
                : styles["status-pending"]
            }
          >
            {item.complete ? "결제완료" : "미결제"} :
          </span>
          <div className={styles["info-row2"]}>
            <div className={styles["price"]}>
              {item.amount.toLocaleString()}원
            </div>
            {renderLinkStatus()}
          </div>
        </div>
      </div>
      <button className={styles["detail-btn"]}>상세보기</button>
    </div>
  );
}

export default ListItem;
