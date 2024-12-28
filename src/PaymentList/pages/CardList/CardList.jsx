import React, { useState } from "react";
import styles from "./CardList.module.css";
import PaymentItem from "../../components/PaymentItem/PaymentItem";

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
    details: {
      approval: "70008950",
      date: "2024-09-12 16:25",
      card: "BC",
      cardNumber: "0000-0010-0000-0000",
      installment: "3개월",
    },
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
        <PaymentItem
          key={index}
          payment={payment}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}

export default CardList;
