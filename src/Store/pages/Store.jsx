import React from "react";
import { Routes, Route } from "react-router-dom";
import BusinessTypeSelection from "./BusinessTypeSelection/BusinessTypeSelection";
import BusinessInput from "./BusinessInput/BusinessInput";
import BusinessConfirm from "./BusinessConfirm/BusinessConfirm";
import BusinessWaiting from "./BusinessWaiting/BusinessWaiting";
import BusinessProfile from "./BusinessProfile/BusinessProfile";
import PasswordEdit from "./PasswordEdit/PasswordEdit";

function Store() {
  return (
    <Routes>
      <Route path="/" element={<BusinessTypeSelection />} />
      <Route path="input" element={<BusinessInput />} />
      <Route path="confirm" element={<BusinessConfirm />} />
      <Route path="waiting" element={<BusinessWaiting />} />
      <Route path="profile" element={<BusinessProfile />} />
      <Route path="password-edit" element={<PasswordEdit />} />
    </Routes>
  );
}

export default Store;
