import React, { useState } from "react";
import styles from "./DetailPageDown.module.css";
import LinkItem from "../../../shared/components/LinkItem/LinkItem";
import Modal from "../../../shared/components/Modal/Modal"; // 복사 알림 모달 추가

const items = [
  {
    image: "/ex1.jpeg",
    name: "공사 비입니다.",
    price: 1000000,
    quantity: 1,
    description: "아주 멋진 자동차 입니다. ㅋㅋㅋㅋㅋㅋㅋㅋ",
  },
  {
    image: "/ex2.jpeg",
    name: "공사 비입니다.",
    price: 1000000,
    quantity: 2,
    description: "아주 멋진 자동차 입니다. ㅋㅋㅋㅋㅋㅋㅋㅋ",
  },
  {
    image: "/ex2.jpeg",
    name: "공사 비입니다.",
    price: 1000000,
    quantity: 2,
    description: "아주 멋진 자동차 입니다. ㅋㅋㅋㅋㅋㅋㅋㅋ",
  },
  {
    image: "/ex2.jpeg",
    name: "공사 비입니다.",
    price: 1000000,
    quantity: 2,
    description: "아주 멋진 자동차 입니다. ㅋㅋㅋㅋㅋㅋㅋㅋ",
  },
  {
    image: "/ex2.jpeg",
    name: "공사 비입니다.",
    price: 1000000,
    quantity: 2,
    description: "아주 멋진 자동차 입니다. ㅋㅋㅋㅋㅋㅋㅋㅋ",
  },
];

function DetailPageDown() {
  const [isCopyModalOpen, setIsCopyModalOpen] = useState(false);

  const handleCopyUrl = () => {
    const url = "http://ghpay.kr/sdfg/sdherkj/vfbjhv10031276df_dhhju_01";
    navigator.clipboard.writeText(url).then(() => {
      setIsCopyModalOpen(true); // 복사 완료 모달 열기
    });
  };

  return (
    <div
      className={styles["wrapper"]}
      style={{
        gridTemplateRows: "1fr 152px 92px",
      }}
    >
      <div className={styles["list"]}>
        <div className={styles["list-title"]}>구매 상품</div>
        <div className={styles["link-list__items"]}>
          {items.map((item, index) => (
            <LinkItem key={index} item={item} />
          ))}
        </div>
      </div>
      <div className={styles["input-wrapper"]}>
        <div className={styles["input-group"]}>
          <div className={styles["input-label-price"]}>합계 :</div>
          <div className={styles["input-price"]}>100,000원</div>
        </div>
        <div className={styles["input-group"]}>
          <div className={styles["input-label"]}>구매자 명 :</div>
          <div className={styles["input-name"]}>김길성</div>
        </div>
        <div className={styles["input-group"]}>
          <div className={styles["input-label"]}>연락처 :</div>
          <div className={styles["input-call"]}>010-0000-0000</div>
        </div>
        <div className={styles["input-group"]}>
          <div className={styles["input-label"]}>결제 URL :</div>
          <div className={styles["input-url"]}>
            http://ghpay.kr/sdfg/sdherkj/vfbjhv10031276df_dhhju_01
          </div>
        </div>
      </div>
      <div className={styles["select-wrapper"]}>
        <div className={styles["button-wrapper"]}>
          <button onClick={handleCopyUrl}>결제 URL 복사하기</button>
        </div>
      </div>

      {/* 복사 완료 모달 */}
      <Modal
        isOpen={isCopyModalOpen}
        message="URL이 복사되었습니다."
        onClose={() => setIsCopyModalOpen(false)}
      />
    </div>
  );
}

export default DetailPageDown;
