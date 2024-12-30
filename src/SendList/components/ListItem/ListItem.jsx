import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ListItem.module.css";

function ListItem({ item, isSelected, onClick, onLongPress }) {
  const navigate = useNavigate();
  const [pressTimer, setPressTimer] = useState(null);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const DRAG_THRESHOLD = 10; // 드래그 판단 임계값 (10px)

  const handleDetailClick = (e) => {
    e.stopPropagation();
    if (item.amount >= 1000000) {
      navigate("/send-link/up");
    } else {
      navigate("/send-link/down");
    }
  };

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setStartPosition({ x: touch.clientX, y: touch.clientY });

    const timer = setTimeout(() => {
      onLongPress(item.id); // 롱프레스 이벤트
      console.log(`롱프레스 선택: ${item.id}`);
    }, 500); // 0.5초 후 롱프레스

    setPressTimer(timer);
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    const dx = Math.abs(touch.clientX - startPosition.x);
    const dy = Math.abs(touch.clientY - startPosition.y);

    // 드래그 감지 (x 또는 y 축으로 일정 거리 이동)
    if (dx > DRAG_THRESHOLD || dy > DRAG_THRESHOLD) {
      clearTimeout(pressTimer); // 롱프레스 취소
      console.log("드래그 감지 - 롱프레스 취소");
    }
  };

  const handleTouchEnd = () => {
    clearTimeout(pressTimer);
  };

  return (
    <div
      className={`${styles["list-item"]} ${
        isSelected ? styles["list-item--selected"] : ""
      }`}
      onClick={onClick}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove} // 터치 이동 감지
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles["info"]}>
        <div className={styles["info-row"]}>
          <span>생성일시 :</span> {item.date}
        </div>
        <div className={styles["info-row"]}>
          <span>구매자 :</span> {item.buyer} ({item.phone})
        </div>
        <div className={`${styles["amount"]} ${styles["info-row"]}`}>
          <span
            className={
              item.complete
                ? styles["status-complete"]
                : styles["status-pending"]
            }
          >
            {item.complete ? "결제완료" : "미결제"} :
          </span>
          <div className={styles["price"]}>
            {item.amount.toLocaleString()}원
          </div>
        </div>
      </div>
      <button className={styles["detail-btn"]} onClick={handleDetailClick}>
        상세보기
      </button>
    </div>
  );
}

export default ListItem;
