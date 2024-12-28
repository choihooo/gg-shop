import React from "react";
import { Route, Routes } from "react-router-dom";
import PaymentLinkList from "./PaymentLinkList/PaymentLinkList";
import DetailPageDown from "./DetailPageDown/DetailPageDown";
import DetailPageUp from "./DetailPageUp/DetailPageUp";

function SendList() {
  return (
    <Routes>
      <Route path="/" element={<PaymentLinkList />} />
      <Route path="/down" element={<DetailPageDown />} />
      <Route path="/up" element={<DetailPageUp />} />
    </Routes>
  );
}

export default SendList;
