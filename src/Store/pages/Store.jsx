import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useBusinessTypeStore } from "../../core/store";
import BottomNavigation from "../../shared/components/BottomNavigation/BottomNavigation";
import styles from "../styles/Store.module.css";
import BusinessTypeSelection from "../components/BusinessTypeSelection/BusinessTypeSelection";
import BusinessInput from "../components/BusinessInput/BusinessInput";
import BusinessConfirm from "../components/BusinessConfirm/BusinessConfirm";
import BusinessWaiting from "../components/BusinessWaiting/BusinessWaiting";
import BusinessProfile from "../components/BusinessProfile/BusinessProfile";
import PasswordEdit from "../components/PasswordEdit/PasswordEdit";

function Store() {
  const { selectedType, setSelectedType } = useBusinessTypeStore();
  const navigate = useNavigate();

  const handleSelection = (type) => {
    setSelectedType(type);
  };

  const handleSubmit = () => {
    navigate("/store/input");
  };

  return (
    <div className={styles["store-layout"]}>
      <img
        src="/gh-logo.svg"
        className={styles["gg-shop-logo"]}
        alt="GGShop 로고"
      />
      <div className={styles["store-content"]}>
        <Routes>
          <Route
            path="/"
            element={
              <BusinessTypeSelection
                selectedType={selectedType}
                onSelect={handleSelection}
                onSubmit={handleSubmit} // 정보 등록 클릭 시 호출
              />
            }
          />
          <Route path="input" element={<BusinessInput />} />
          <Route path="confirm" element={<BusinessConfirm />} />
          <Route path="waiting" element={<BusinessWaiting />} />
          <Route path="profile" element={<BusinessProfile />} />
          <Route path="password-edit" element={<PasswordEdit />} />
        </Routes>
      </div>
      <BottomNavigation />
    </div>
  );
}

export default Store;
