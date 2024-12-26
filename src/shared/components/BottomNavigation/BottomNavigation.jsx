import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./BottomNavigation.module.css";
import { useTabStore } from "../../../core/store";

function BottomNavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const disabled = useTabStore((state) => state.disabled);
  const [activeTab, setActiveTab] = useState("");

  // 현재 경로에 따라 초기 활성 탭 설정
  useEffect(() => {
    if (location.pathname.startsWith("/store")) {
      setActiveTab("/store");
    } else if (location.pathname.startsWith("/product")) {
      setActiveTab("/product");
    } else if (location.pathname.startsWith("/link")) {
      setActiveTab("/link");
    } else if (location.pathname.startsWith("/confirm")) {
      setActiveTab("/confirm");
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
    { id: "confirm", label: "결제 목록", icon: "/list.svg", path: "/confirm" },
    { id: "store", label: "내 상점", icon: "/store.svg", path: "/store" },
  ];

  const handleTabClick = (tab) => {
    if (disabled && tab.id !== "store") return;
    navigate(tab.path);
    setActiveTab(tab.path);
  };

  return (
    <div className={styles["bottom-navigation"]}>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`${styles["nav-item"]} ${
            activeTab === tab.path || location.pathname.startsWith(tab.path)
              ? styles["active"]
              : ""
          } ${disabled && tab.id !== "store" ? styles["disabled"] : ""}`}
          onClick={() => handleTabClick(tab)}
        >
          <img src={tab.icon} alt={tab.label} className={styles["nav-icon"]} />
          <div className={styles["nav-label"]}>{tab.label}</div>
        </div>
      ))}
    </div>
  );
}

export default BottomNavigation;
