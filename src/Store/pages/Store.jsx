import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useBusinessTypeStore } from "../../core/store";
import BottomNavigation from "../../shared/components/BottomNavigation/BottomNavigation";
import styles from "../styles/Store.module.css";
import BusinessTypeSelection from "../components/BusinessTypeSelection/BusinessTypeSelection";
import BusinessInfo from "../components/BusinessInfo/BusinessInfo";
// import NonBusinessInfo from "../components/NonBusinessInfo/NonBusinessInfo";

function Store() {
  const { selectedType, setSelectedType } = useBusinessTypeStore();
  const navigate = useNavigate();

  const handleSelection = (type) => {
    setSelectedType(type);
  };

  const handleSubmit = () => {
    if (selectedType === "business") {
      navigate("/store/business");
    } else if (selectedType === "non-business") {
      navigate("/store/non-business");
    }
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
          <Route path="business" element={<BusinessInfo />} />
          {/* <Route path="non-business" element={<NonBusinessInfo />} /> */}
        </Routes>
      </div>
      <BottomNavigation />
    </div>
  );
}

export default Store;
