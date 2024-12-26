import React, { useRef, useState, useEffect } from "react";
import SignatureCanvas from "react-signature-canvas";
import Modal from "../../../shared/components/Modal/Modal";
import styles from "./Signature.module.css";
import { useNavigate } from "react-router-dom";

function Signature() {
  const sigCanvas = useRef({});
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSigned, setIsSigned] = useState(false);
  const [modalOpen, setModalOpen] = useState(false); // 모달 상태
  const [modalMessage, setModalMessage] = useState(""); // 모달 메시지 상태
  const [isVerified, setIsVerified] = useState(false); // 본인 인증 여부 상태
  const navigate = useNavigate();
  useEffect(() => {
    drawPlaceholderText();
  }, []);
  const onCancle = () => {
    navigate("/confirm");
  };
  // 서명 캔버스에 "확인 서명" 텍스트 그리기
  const drawPlaceholderText = () => {
    const canvas = sigCanvas.current.getCanvas();
    const ctx = canvas.getContext("2d");
    ctx.font = "12px Arial";
    ctx.fillStyle = "#757575";
    ctx.textAlign = "center";
    ctx.fillText("확인 서명", canvas.width / 6, canvas.height / 6);
  };

  const handleBegin = () => {
    const canvas = sigCanvas.current.getCanvas();
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height); // 서명 시작 시 텍스트 지우기
  };

  // 본인 인증 버튼 클릭 시 검증
  const handleVerify = () => {
    if (!name) {
      setModalMessage("구매자 이름을 입력해 주세요.");
      setModalOpen(true);
      return;
    }
    if (!phone || phone.length < 10) {
      setModalMessage("유효한 연락처를 입력해 주세요.");
      setModalOpen(true);
      return;
    }
    alert("본인 인증이 완료되었습니다.");
    setIsVerified(true);
  };

  const handleSubmit = () => {
    if (!isVerified) {
      setModalMessage("본인 인증을 완료해 주세요.");
      setModalOpen(true);
    } else if (!isSigned) {
      setModalMessage("서명을 완료해 주세요.");
      setModalOpen(true);
    } else {
      alert("서명과 본인인증이 완료되었습니다.");
    }
  };

  return (
    <div className={styles["wrapper"]}>
      <img src="/gh-logo.svg" className={styles["logo"]} />
      <button className={styles["close-button"]} onClick={onCancle}>
        <img src="/close.svg" />
      </button>
      <div className={styles["signature-form"]}>
        <div className={styles["signature-info"]}>
          파손이나 반품의 의사가 있을 경우 판매자와 상의하시기 바랍니다.
          <br /> 상품 확인 및 수령에 동의하신 후에는 상품 미수령의 이유로
          <span> 결제 취소가 불가능</span>합니다. <br /> 이 후 제품의 A/S, 파손
          등의 불만족으로 인한 취소는 판매자와 고객의 합의로 진행되며 저희
          GGPAY는 이를 책임지지 않습니다.
        </div>
        <div className={styles["signature-header"]}>
          상품을 확인 및 수령하였다면 아래의 본인 인증과 확인서명에
          싸인해주세요.
        </div>

        <div className={styles["input-group"]} style={{ marginTop: "38px" }}>
          <label>구매자 명 :</label>
          <input
            type="text"
            placeholder="김길성"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={styles["input-group"]} style={{ marginTop: "6px" }}>
          <label>연락처 :</label>
          <input
            type="number"
            placeholder="010-0000-0000"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button
            className={styles["verify-button"]}
            onClick={handleVerify} // 본인 인증 버튼 클릭
          >
            본인 인증
          </button>
        </div>

        <div className={styles["signature-wrapper"]}>
          <SignatureCanvas
            ref={sigCanvas}
            penColor="black"
            canvasProps={{
              className: styles["signature-canvas"],
            }}
            onBegin={handleBegin}
          />
        </div>

        <button
          className={styles["submit-button"]}
          onClick={handleSubmit} // 완료 버튼 클릭 시 체크
        >
          완료
        </button>
      </div>

      <Modal
        isOpen={modalOpen}
        message={modalMessage}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}

export default Signature;
