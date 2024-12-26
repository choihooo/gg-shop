import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MakeLink.module.css";
import LinkItem from "../../../shared/components/LinkItem/LinkItem";
import LinkStore from "../../components/LinkStore/LinkStore";
import LinkModal from "../../components/LinkModal/LinkModal";

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
];

function MakeLink() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleAddClick = () => {
    if (total > 1000000) {
      setModalMessage(
        "100만원 초과 결제금액의 입금 시 구매자의 상품 수령 확인이 필요합니다.\n\n상단의 '보낸 결제링크'에서 이 결제 건을 찾아 수령확인 URL 만들기 서비스를 이용해주세요."
      );
    } else {
      setModalMessage(
        "링크를 저장하시겠습니까?\n\n저장한 링크는 상단의 ‘보낸 결제링크’에서 확인 가능합니다."
      );
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles["link-list"]}>
      <div className={styles["link-list__items"]}>
        {items.map((item, index) => (
          <LinkItem key={index} item={item} />
        ))}
      </div>
      <div className={styles["input-wrapper"]}>
        <div className={styles["input-group"]}>
          <div className={styles["input-label"]}>구매자 명 :</div>
          <input type="text" placeholder="김길성" />
        </div>
        <div className={styles["input-group"]}>
          <div className={styles["input-label"]}>연락처 :</div>
          <input type="number" placeholder="010-0000-0000" />
        </div>
        <div className={styles["input-group"]}>
          <div className={styles["input-label"]}>결제 URL :</div>
          <div className={styles["input-url"]}>
            http://ghpay.kr/sdfg/sdherkj/vfbjhv100 31276df_dhhju_01
          </div>
        </div>
      </div>

      <LinkModal
        isOpen={showModal}
        message={modalMessage.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
        onClose={handleCloseModal}
      />
      <LinkStore total={total} onClick={handleAddClick} />
    </div>
  );
}

export default MakeLink;
