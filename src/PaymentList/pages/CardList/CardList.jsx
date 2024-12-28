import React, { useState } from "react";
import styles from "./CardList.module.css";

const payments = [
  {
    buyer: "김길성",
    phone: "010-0000-0000",
    amount: 5000000,
    details: {
      approval: "70008950",
      date: "2024-09-12 16:25",
      card: "BC",
      cardNumber: "0000-0010-0000-0000",
      installment: "3개월",
    },
  },
  {
    buyer: "김길성",
    phone: "010-0000-0000",
    amount: 5000000,
  },
  {
    buyer: "김길성",
    phone: "010-0000-0000",
    amount: 5000000,
  },
  {
    buyer: "김길성",
    phone: "010-0000-0000",
    amount: 5000000,
  },
];

function CardList() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["header"]}>
        <span>구매자</span>
        <span>연락처</span>
        <span>결제금액</span>
      </div>
      {payments.map((payment, index) => (
        <div key={index} className={styles["payment-item"]}>
          <div
            className={styles["summary"]}
            onClick={() => handleToggle(index)}
          >
            <span>{payment.buyer}</span>
            <span>{payment.phone}</span>
            <span>{payment.amount.toLocaleString()}원</span>
            <span className={styles["toggle-icon"]}>
              {openIndex === index ? "▲" : "▼"}
            </span>
          </div>
          {openIndex === index && payment.details && (
            <div className={styles["details"]}>
              <div>승인번호 : {payment.details.approval}</div>
              <div>결제일시 : {payment.details.date}</div>
              <div>
                {payment.details.card} : {payment.details.cardNumber}
              </div>
              <div>{payment.details.installment}</div>
            </div>
          )}
        </div>
      ))}
      <div className={styles["footer"]}>
        <button className={styles["tab-button"]}>결제 링크</button>
        <button className={styles["tab-button"]}>등록 상품</button>
        <button className={`${styles["tab-button"]} ${styles["active"]}`}>
          결제 목록
        </button>
        <button className={styles["tab-button"]}>내 상점</button>
      </div>
    </div>
  );
}

export default CardList;
