import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MakeLink.module.css";
import LinkItem from "../../../shared/components/LinkItem/LinkItem";
import LinkStore from "../../components/LinkStore/LinkStore";
import LinkModal from "../../components/LinkModal/LinkModal";
import Modal from "../../../shared/components/Modal/Modal";

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
  const [showModal, setShowModal] = useState(false); // LinkModal 상태
  const [showInputModal, setShowInputModal] = useState(false); // 인풋 검증용 모달 상태
  const [modalMessage, setModalMessage] = useState("");
  const [buyerName, setBuyerName] = useState("");
  const [phone, setPhone] = useState("");

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // 링크 복사 후 모달 표시 및 페이지 이동
  const handleLinkCopy = () => {
    setModalMessage("링크가 복사되었습니다.");
    setShowInputModal(true); // 기본 모달 열기

    setTimeout(() => {
      setShowInputModal(false); // 모달 닫기
      navigate("/link"); // 3초 뒤 링크 페이지로 이동
    }, 1000);
  };

  const handleAddClick = () => {
    // 인풋 검증
    if (!buyerName || !phone) {
      setModalMessage("구매자 명과 연락처를 모두 입력해 주세요.");
      setShowInputModal(true); // 기본 모달 표시
      return;
    }

    // 결제 금액에 따른 LinkModal
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
    setShowInputModal(false);
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
          <input
            type="text"
            placeholder="김길성"
            value={buyerName}
            onChange={(e) => setBuyerName(e.target.value)}
          />
        </div>
        <div className={styles["input-group"]}>
          <div className={styles["input-label"]}>연락처 :</div>
          <input
            type="number"
            placeholder="010-0000-0000"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className={styles["input-group"]}>
          <div className={styles["input-label"]}>결제 URL :</div>
          <div className={styles["input-url"]}>
            http://ghpay.kr/sdfg/sdherkj/vfbjhv100 31276df_dhhju_01
          </div>
        </div>
      </div>

      {/* 기본 Modal (인풋 검증 및 링크 복사 후 표시) */}
      <Modal
        isOpen={showInputModal}
        message={modalMessage}
        onClose={handleCloseModal}
      />

      {/* LinkModal (결제 금액 확인용) */}
      <LinkModal
        isOpen={showModal}
        message={modalMessage.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
        onClose={() => {
          setShowModal(false);
          handleLinkCopy(); // 링크 복사 로직 실행
        }}
      />

      {/* 링크 생성 버튼 */}
      <LinkStore total={total} onClick={handleAddClick} />
    </div>
  );
}

export default MakeLink;
