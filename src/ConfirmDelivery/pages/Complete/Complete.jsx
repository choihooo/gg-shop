import React from "react";
import styles from "./Complete.module.css";
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

function Complete() {
  const navigate = useNavigate();

  return (
    <div className={styles["wrapper"]}>
      <div>
        <img src="/gh-logo.svg" className={styles["logo"]} />
        <div className={styles["info-wrapper"]}>
          <img src="/profile.png" className={styles["store-image"]}></img>
          <div className={styles["store-name"]}>상점명 : 상점명</div>
          <div className={styles["store-pay"]}>3,000,000원</div>
          <div className={styles["store-title"]}>결제완료</div>
          <div className={styles["store-subtitle"]}>
            이용해주셔서 감사합니다.
          </div>
        </div>
      </div>
      <div className={styles["button-wrapper"]}>
        <div className={styles["button-info"]}>
          비대면 모바일 간편 결제 솔루션 사용을 원하시는 분은 <br />
          하단의 상점 개설 신청하기 버튼을 눌러주세요.
        </div>
        <button className={styles["button"]}>
          모바일 간편결제 <br />
          상점 개설 신청하기
        </button>
      </div>
    </div>
  );
}

export default Complete;
