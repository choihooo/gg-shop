import React from "react";
import styles from "./PaymentItem.module.css";

function PaymentItem({ payment, isOpen, onToggle }) {
  return (
    <div
      className={`${styles["payment-item"]} ${
        isOpen ? styles["payment-item--open"] : ""
      }`}
    >
      <div className={styles["payment-item__summary"]} onClick={onToggle}>
        <span className={styles["payment-item__buyer"]}>{payment.buyer}</span>
        <span className={styles["payment-item__phone"]}>{payment.phone}</span>
        <div className={styles["payment-item__price"]}>
          <span>{payment.amount.toLocaleString()}원</span>
          <img
            src={isOpen ? "/up.svg" : "/drop-down.svg"}
            alt={isOpen ? "닫기" : "열기"}
            className={styles["payment-item__toggle-icon"]}
          />
        </div>
      </div>
      {isOpen && payment.details && (
        <div className={styles["payment-item__details"]}>
          <div className={styles["payment-item__detail-group"]}>
            <div>승인번호 : {payment.details.approval} </div>
            <div>결제일시 : {payment.details.date}</div>
          </div>

          <div className={styles["payment-item__detail"]}>
            {payment.details.card} : {payment.details.cardNumber}
            <div>{payment.details.installment}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PaymentItem;
