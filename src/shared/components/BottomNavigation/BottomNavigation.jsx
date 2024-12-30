import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./BottomNavigation.module.css";
import { usePaymentStore } from "../../../core/store";
import DeleteModal from "../DeleteModal/DeleteModal";

function BottomNavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 추가

  const {
    isSelectionMode,
    isAllSelected,
    selectAllItems,
    deselectAllItems,
    resetSelection,
  } = usePaymentStore();

  useEffect(() => {
    if (location.pathname.startsWith("/store")) {
      setActiveTab("/store");
    } else if (location.pathname.startsWith("/product")) {
      setActiveTab("/product");
    } else if (location.pathname.startsWith("/link")) {
      setActiveTab("/link");
    } else if (location.pathname.startsWith("/pay-list")) {
      setActiveTab("/pay-list");
    }
  }, [location.pathname]);

  const tabs = [
    { id: "link", label: "결제 링크", icon: "/link.svg", path: "/link" },
    {
      id: "product",
      label: "등록 상품",
      icon: "/product.svg",
      path: "/product",
    },
    {
      id: "pay-list",
      label: "결제 목록",
      icon: "/list.svg",
      path: "/pay-list",
    },
    { id: "store", label: "내 상점", icon: "/store.svg", path: "/store" },
  ];

  const handleTabClick = (tab) => {
    navigate(tab.path);
    setActiveTab(tab.path);
  };

  // 전체 선택/해제 핸들러
  const handleSelectAllToggle = () => {
    if (isAllSelected) {
      deselectAllItems();
    } else {
      selectAllItems();
    }
  };

  // 삭제 버튼 클릭 시 모달 열기
  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  // 모달 내 삭제하기 클릭 시 선택 모드 해제
  const handleConfirmDelete = () => {
    resetSelection(); // 선택 모드 종료
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className={`${styles["bottom-navigation"]} ${
          isSelectionMode ? styles["non-shadow"] : ""
        }`}
      >
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`${styles["nav-item"]} ${
              activeTab === tab.path || location.pathname.startsWith(tab.path)
                ? styles["active"]
                : ""
            }`}
            onClick={() => handleTabClick(tab)}
          >
            <img
              src={tab.icon}
              alt={tab.label}
              className={styles["nav-icon"]}
            />
            <div className={styles["nav-label"]}>{tab.label}</div>
          </div>
        ))}

        {/* 선택 모드일 때 네비게이션 오버레이 */}
        {isSelectionMode && (
          <div className={styles["overlay"]}>
            <button onClick={handleSelectAllToggle}>
              {isAllSelected ? "전체 해제" : "전체 선택"}
            </button>
            <button onClick={handleDeleteClick}>삭제</button>
          </div>
        )}
      </div>

      {/* 모달 렌더링 */}
      <DeleteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
}

export default BottomNavigation;
