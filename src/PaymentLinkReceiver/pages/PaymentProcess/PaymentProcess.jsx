import React, { useState } from "react";
import styles from "./PaymentProcess.module.css";
import LinkItem from "../../../shared/components/LinkItem/LinkItem";
import { useNavigate } from "react-router-dom";
import ShopInfo from "../../../shared/components/ShopInfo/ShopInfo";

const items = [
  {
    image: "/ex1.jpeg",
    name: "공사 비입니다.",
    price: 1000000,
    quantity: 3,
    description: "아주 멋진 자동차 입니다. ㅋㅋㅋㅋㅋㅋㅋㅋ",
  },
  {
    image: "/ex2.jpeg",
    name: "공사 비입니다.",
    price: 1000000,
    quantity: 3,
    description: "아주 멋진 자동차 입니다. ㅋㅋㅋㅋㅋㅋㅋㅋ",
  },
  {
    image: "/ex2.jpeg",
    name: "공사 비입니다.",
    price: 1000000,
    quantity: 3,
    description: "아주 멋진 자동차 입니다. ㅋㅋㅋㅋㅋㅋㅋㅋ",
  },
];

function PaymentProcess() {
  const navigate = useNavigate();

  // 결제 버튼 클릭 시 이동
  const handlePayment = () => {
    navigate("/order/complete");
  };

  return (
    <div className={styles["wrapper"]}>
      <div>
        <img src="/gh-logo.svg" className={styles["logo"]} />
        <ShopInfo />
        <div className={styles["title"]}>결제한 상품</div>
        <div className={styles["item"]}>
          {items.map((item, index) => (
            <LinkItem key={index} item={item} />
          ))}
        </div>
      </div>
      <div className={styles["payment-process__summary"]}>
        <div className={styles["payment-process__summary-wrapper"]}>
          <div className={styles["payment-process__summary-text"]}>
            내용 확인 후 결제해 주세요.
          </div>
          <div className={styles["payment-process__total"]}>
            합계 :
            <span className={styles["payment-process__total-amount"]}>
              6,000,000
            </span>
            <span className={styles["payment-process__total-unit"]}>원</span>
          </div>
        </div>
        <div className={styles["payment-process__actions"]}>
          <button
            className={styles["payment-process__button--yes"]}
            onClick={handlePayment} // 버튼 클릭 시 이동
          >
            결제하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentProcess;
