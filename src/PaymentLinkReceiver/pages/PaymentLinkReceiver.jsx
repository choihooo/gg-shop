import React from "react";
import { Route, Routes } from "react-router-dom";
import PaymentProcess from "./PaymentProcess/PaymentProcess";
import PaymentComplete from "./PaymentComplete/PaymentComplete";

function PaymentLinkReceiver() {
  return (
    <Routes>
      <Route path="/" element={<PaymentProcess />} />
      <Route path="/complete" element={<PaymentComplete />} />
    </Routes>
  );
}

export default PaymentLinkReceiver;
