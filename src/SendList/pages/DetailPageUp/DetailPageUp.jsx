import React, { useState } from "react";
import styles from "./DetailPageUp.module.css";
import LinkItem from "../../../shared/components/LinkItem/LinkItem";
import DetailModal from "../../components/DetailModal/DetailModal";
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
];

function DetailPageUp() {
  const [isModalOpen, setIsModalOpen] = useState(false); // URL 생성 모달
  const [isCopyModalOpen, setIsCopyModalOpen] = useState(false); // 복사 완료 모달
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false); // URL 생성 필요 알림 모달
  const [url, setUrl] = useState(""); // URL 상태 관리
  const [isUrlCreated, setIsUrlCreated] = useState(false); // URL 생성 여부
  const [inputUrl, setInputUrl] = useState(""); // 사용자가 입력한 URL

  // URL 입력 및 저장
  const handleUrlChange = (e) => {
    setInputUrl(e.target.value);
  };

  const handleCreateUrl = () => {
    if (inputUrl.trim() === "") {
      setIsAlertModalOpen(true);
      return;
    }
    setUrl(inputUrl); // 사용자가 입력한 URL을 저장
    setIsModalOpen(false);
    setIsUrlCreated(true);
  };

  // URL 복사 함수
  const handleCopyUrl = (copyUrl) => {
    if (!isUrlCreated) {
      setIsAlertModalOpen(true); // URL 미생성 알림 모달 열기
      return;
    }
    navigator.clipboard.writeText(copyUrl).then(() => {
      setIsCopyModalOpen(true); // 복사 완료 모달 열기
    });
  };

  return (
    <div
      className={styles["wrapper"]}
      style={{
        gridTemplateRows: "1fr 190px 92px",
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
          <div className={styles["input-label"]}>합계 :</div>
          <div className={styles["input-price"]}>10,000,000원</div>
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
        <div className={styles["input-group"]}>
          <div className={styles["input-group__label"]}>수령확인 URL :</div>
          {isUrlCreated ? (
            <div className={styles["input-url"]}>{url}</div>
          ) : (
            <div className={styles["input-group__input-wrapper"]}>
              <input
                className={styles["input-group__input"]}
                value={inputUrl}
                onChange={handleUrlChange}
              ></input>
              <button
                className={styles["input-group__button"]}
                onClick={handleCreateUrl}
              >
                URL 저장
              </button>
            </div>
          )}
        </div>
      </div>
      <div className={styles["select-wrapper"]}>
        <div className={styles["button-wrapper"]}>
          <button
            onClick={() =>
              handleCopyUrl(
                "http://ghpay.kr/sdfg/sdherkj/vfbjhv10031276df_dhhju_01"
              )
            }
          >
            결제 URL 복사하기
          </button>
          <button onClick={() => handleCopyUrl(url)}>
            수령 확인 URL <br /> 복사하기
          </button>
        </div>
      </div>

      {/* 복사 완료 모달 */}
      <Modal
        isOpen={isCopyModalOpen}
        message="URL이 복사되었습니다."
        onClose={() => setIsCopyModalOpen(false)}
      />

      {/* URL 미생성 알림 모달 */}
      <Modal
        isOpen={isAlertModalOpen}
        message="URL을 먼저 입력해 주세요."
        onClose={() => setIsAlertModalOpen(false)}
      />
    </div>
  );
}

export default DetailPageUp;
