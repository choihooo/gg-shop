import React, { useState } from "react";
import styles from "./PaymentLinkList.module.css";
import ListItem from "../../components/ListItem/ListItem";
import payments from "../../../data/payments";

function PaymentLinkList() {
  const [filter, setFilter] = useState("all"); // 필터 상태 ('all', '미결제', '결제완료')

  // 필터링된 리스트 반환
  const filteredPayments = payments.filter((payment) => {
    if (filter === "all") return true;
    if (filter === "미결제") return !payment.complete;
    if (filter === "결제완료") return payment.complete;
    return true;
  });

  // 미결제 상태가 위로 가도록 정렬 (미결제 -> 결제완료)
  const sortedPayments = [...filteredPayments].sort((a, b) => {
    if (a.complete === b.complete) {
      return b.amount - a.amount;
    }
    return a.complete - b.complete;
  });

  // 필터 변경 핸들러 (토글 기능 추가)
  const handleFilterChange = (type) => {
    // 현재 필터와 동일한 경우 전체 보기(all)로 전환
    setFilter((prev) => (prev === type ? "all" : type));
  };

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["search-box"]}>
        <input type="text" placeholder="검색어를 입력해 주세요." />
        <button>
          <img src="/search.svg" alt="검색" />
        </button>
      </div>
      <div className={styles["list"]}>
        {sortedPayments.length > 0 ? (
          sortedPayments.map((payment, index) => (
            <ListItem key={index} item={payment} />
          ))
        ) : (
          <div className={styles["empty-message"]}>
            해당하는 항목이 없습니다.
          </div>
        )}
      </div>
      <div className={styles["select-wrapper"]}>
        <div className={styles["button-wrapper"]}>
          <button onClick={() => handleFilterChange("미결제")}>
            미결제 URL
          </button>
          <button onClick={() => handleFilterChange("결제완료")}>
            결제완료 URL
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentLinkList;
