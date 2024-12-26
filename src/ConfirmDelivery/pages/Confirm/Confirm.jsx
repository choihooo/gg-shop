import React from "react";
import styles from "./Confirm.module.css";
import LinkItem from "../../../shared/components/LinkItem/LinkItem";
import ShopInfo from "../../components/ShopInfo/ShopInfo";
import { useNavigate } from "react-router-dom";

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

function Confirm() {
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate("/confirm/sign");
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
      <div className={styles["info"]}>
        <div className={styles["info-content"]}>
          파손이나 반품의 의사가 있을 경우 판매자와 상의하시기 바랍니다.
          <br /> 상품 확인 및 수령을 완료하신 후에는 상품 미수령의 이유로 인한{" "}
          <span>결제 취소가 불가능</span>합니다.
          <br /> 이 후 제품의 A/S, 파손 등의 불만족으로 인한 취소는 판매자와
          고객의 합의로 진행되며 저희 GGPAY는 이를 책임지지 않습니다.
        </div>
        <div className={styles["info-title"]}>
          위 상품을 확인 및 수령하셨나요?
        </div>
        <div className={styles["info-button"]}>
          <button className={styles["info-button-no"]}>아니요.</button>
          <button className={styles["info-button-yes"]} onClick={handleConfirm}>
            네. 확인 및 수령했습니다.
          </button>
        </div>
      </div>
    </div>
  );
}

export default Confirm;
