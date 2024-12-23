import React from "react";
import styles from "./BottomNavigation.module.css";
import { useTabStore } from "../../../core/store";

function BottomNavigation() {
  const disabled = useTabStore((state) => state.disabled);
  const tabs = [
    { id: "link", label: "결제 링크", icon: "/link.svg" },
    { id: "product", label: "등록 상품", icon: "/product.svg" },
    { id: "list", label: "결제 목록", icon: "/list.svg" },
    { id: "store", label: "내 상점", icon: "/store.svg" },
  ];

  return (
    <div className={styles["bottom-navigation"]}>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`${styles["nav-item"]} ${
            tab.id === "store"
              ? styles["active"]
              : disabled
              ? styles["disabled"]
              : ""
          }`}
          onClick={() => {
            if (disabled && tab.id !== "store") return;
          }}
        >
          <img src={tab.icon} alt={tab.label} className={styles["nav-icon"]} />
          <div className={styles["nav-label"]}>{tab.label}</div>
        </div>
      ))}
    </div>
  );
}

export default BottomNavigation;
