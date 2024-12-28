import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";
import styles from "./Layout.module.css";

function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  const isStorePage = location.pathname.startsWith("/store");
  const isFullPage =
    location.pathname === "/product" ||
    location.pathname === "/product/none" ||
    location.pathname === "/link" ||
    location.pathname === "/link/add" ||
    location.pathname === "/link/make" ||
    location.pathname === "/pay-list" ||
    location.pathname.startsWith("/send-link");

  const handleSendLinkClick = () => {
    navigate("/send-link");
  };

  return (
    <div className="wrapper">
      <div className={styles["layout-container"]}>
        <img
          src="/gh-logo.svg"
          className={styles["gg-shop-logo"]}
          alt="GGShop 로고"
        />
        {!isStorePage && (
          <button
            className={styles["link-button"]}
            onClick={handleSendLinkClick}
          >
            보낸 결제 링크
          </button>
        )}
        <div
          className={`${
            isFullPage ? styles["full-page"] : styles["layout-content"]
          }`}
        >
          <Outlet />
        </div>
        <BottomNavigation />
      </div>
    </div>
  );
}

export default Layout;
