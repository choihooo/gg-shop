import React, { useState, useEffect } from "react";
import { usePaymentStore } from "../../../core/store";
import styles from "./PaymentLinkList.module.css";
import ListItem from "../../components/ListItem/ListItem";
import payments from "../../../data/payments";

function PaymentLinkList() {
  const [filter, setFilter] = useState("all"); // 필터 상태 관리
  const [searchTerm, setSearchTerm] = useState("");
  const [appliedSearch, setAppliedSearch] = useState("");

  const {
    isSelectionMode,
    selectedItems,
    setSelectionMode,
    toggleItemSelection,
    resetSelection,
  } = usePaymentStore();
  const filteredPayments = payments.filter((payment) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "미결제" && !payment.complete) ||
      (filter === "결제완료" && payment.complete);

    const normalizedSearch = appliedSearch.replace(/[-\s]/g, ""); // 공백 및 '-' 제거
    const normalizedPhone = payment.phone.replace(/[-\s]/g, ""); // 전화번호도 동일하게 처리

    const matchesSearch =
      payment.buyer.includes(appliedSearch) || // 구매자 검색
      normalizedPhone.includes(normalizedSearch); // 전화번호 검색

    const isPendingOnly = isSelectionMode ? !payment.complete : true;

    return matchesFilter && matchesSearch && isPendingOnly;
  });

  const sortedPayments = [...filteredPayments].sort((a, b) => {
    if (a.complete === b.complete) {
      return b.amount - a.amount;
    }
    return a.complete - b.complete;
  });

  // 아이템 클릭 (선택/해제)
  const handleItemClick = (id) => {
    if (!isSelectionMode) return;
    toggleItemSelection(id);
  };

  // 롱프레스 (선택 모드 진입)
  const handleLongPress = (id) => {
    // '미결제' 필터가 설정된 경우만 선택 모드 진입
    if (filter === "미결제") {
      setSelectionMode(true);
      toggleItemSelection(id);
    }
  };

  // 키보드 단축키 (Ctrl + A, Esc)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (filter !== "미결제") return; // 미결제 상태일 때만 동작
      if (e.ctrlKey && e.key === "a") {
        e.preventDefault();
        payments
          .filter((payment) => !payment.complete) // 미결제 아이템만 선택
          .forEach((payment) => toggleItemSelection(payment.id));
        setSelectionMode(true);
      }
      if (e.key === "Escape") {
        resetSelection();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleItemSelection, resetSelection, filter]);

  // 필터 변경 핸들러
  const handleFilterChange = (type) => {
    setFilter((prev) => (prev === type ? "all" : type));
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // 그리드 템플릿 동적 설정
  const gridTemplate = () => {
    if (isSelectionMode && appliedSearch) {
      return "40px 30px 1fr";
    }
    if (isSelectionMode) {
      return "40px 1fr";
    }
    if (appliedSearch) {
      return "40px 30px 1fr";
    }
    return "40px 1fr 92px";
  };

  return (
    <div
      className={styles["wrapper"]}
      style={{
        gridTemplateRows: gridTemplate(),
      }}
    >
      {isSelectionMode && <div className={styles["overlay"]}></div>}
      <div className={styles["search-box"]}>
        <input
          type="text"
          placeholder="검색어를 입력해 주세요."
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setAppliedSearch(searchTerm);
            }
          }}
        />
        <button onClick={() => setAppliedSearch(searchTerm)}>
          <img src="/search.svg" alt="검색" />
        </button>
      </div>
      {appliedSearch && (
        <div className={styles["filter-result"]}>
          검색필터 적용 : {appliedSearch}
          <button
            className={styles["clear-btn"]}
            onClick={() => setAppliedSearch("")}
          >
            <img src="/close.svg" />
          </button>
        </div>
      )}
      <div className={styles["list"]}>
        {sortedPayments.length > 0 ? (
          sortedPayments.map((payment, index) => (
            <ListItem
              key={index}
              item={payment}
              isSelected={selectedItems.includes(payment.id)}
              onClick={() => handleItemClick(payment.id)}
              onLongPress={() => handleLongPress(payment.id)} // 롱프레스 조건 추가
            />
          ))
        ) : (
          <div className={styles["empty-message"]}>
            해당하는 항목이 없습니다.
          </div>
        )}
      </div>
      {/* 미결제 필터가 아닐 때만 필터 버튼 표시 */}
      {!isSelectionMode && !appliedSearch && (
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
      )}
    </div>
  );
}

export default PaymentLinkList;
