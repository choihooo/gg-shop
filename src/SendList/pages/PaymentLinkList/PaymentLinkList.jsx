import React, { useState } from "react";
import styles from "./PaymentLinkList.module.css";
import ListItem from "../../components/ListItem/ListItem";
import payments from "../../../data/payments";

function PaymentLinkList() {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState(""); // 입력 중 검색어
  const [appliedSearch, setAppliedSearch] = useState(""); // 실제 필터에 적용된 검색어

  // 필터링된 리스트 반환
  const filteredPayments = payments.filter((payment) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "미결제" && !payment.complete) ||
      (filter === "결제완료" && payment.complete);

    const matchesSearch = payment.buyer.includes(appliedSearch); // 필터에 적용된 검색어로 필터링

    return matchesFilter && matchesSearch;
  });

  const sortedPayments = [...filteredPayments].sort((a, b) => {
    if (a.complete === b.complete) {
      return b.amount - a.amount;
    }
    return a.complete - b.complete;
  });

  const handleFilterChange = (type) => {
    setFilter((prev) => (prev === type ? "all" : type));
  };

  // Enter 키를 눌렀을 때만 검색 필터 적용
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setAppliedSearch(searchTerm); // 입력된 검색어를 실제 검색어로 적용
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // 입력 중 검색어 상태 업데이트
  };

  return (
    <div
      className={styles["wrapper"]}
      style={{
        gridTemplateRows: appliedSearch
          ? "40px 30px 1fr 92px"
          : "40px 1fr 92px",
      }}
    >
      <div className={styles["search-box"]}>
        <input
          type="text"
          placeholder="검색어를 입력해 주세요."
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown} // Enter 키 이벤트 감지
        />
        <button onClick={() => setAppliedSearch(searchTerm)}>
          {" "}
          {/* 버튼 클릭으로도 필터 적용 */}
          <img src="/search.svg" alt="검색" />
        </button>
      </div>
      {appliedSearch && (
        <div className={styles["filter-result"]}>
          검색필터 적용 : {appliedSearch}
          <button
            className={styles["clear-btn"]}
            onClick={() => setAppliedSearch("")} // 필터 초기화
          >
            <img src="/close.svg" />
          </button>
        </div>
      )}
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
