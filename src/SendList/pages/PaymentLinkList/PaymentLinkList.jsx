import React, { useState, useEffect } from "react";
import { usePaymentStore } from "../../../core/store";
import styles from "./PaymentLinkList.module.css";
import ListItem from "../../components/ListItem/ListItem";
import payments from "../../../data/payments";

function PaymentLinkList() {
  const [filter, setFilter] = useState("all");
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
    const matchesSearch = payment.buyer.includes(appliedSearch);
    const isPendingOnly = isSelectionMode ? !payment.complete : true;
    return matchesFilter && matchesSearch && isPendingOnly;
  });

  const sortedPayments = [...filteredPayments].sort((a, b) => {
    if (a.complete === b.complete) {
      return b.amount - a.amount;
    }
    return a.complete - b.complete;
  });

  const handleItemClick = (id) => {
    if (!isSelectionMode) return;
    toggleItemSelection(id);
  };

  const handleLongPress = (id) => {
    setSelectionMode(true);
    toggleItemSelection(id);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === "a") {
        e.preventDefault();
        payments.forEach((payment) => toggleItemSelection(payment.id));
        setSelectionMode(true);
      }
      if (e.key === "Escape") {
        resetSelection();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleItemSelection, resetSelection]);

  const handleFilterChange = (type) => {
    setFilter((prev) => (prev === type ? "all" : type));
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

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
              onLongPress={() => handleLongPress(payment.id)}
            />
          ))
        ) : (
          <div className={styles["empty-message"]}>
            해당하는 항목이 없습니다.
          </div>
        )}
      </div>
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
