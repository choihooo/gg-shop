import React from "react";
import { Routes, Route } from "react-router-dom";
import Confirm from "./Confirm/Confirm";
import Signature from "./Signature/Signature";

function ConfirmDelivery() {
  return (
    <Routes>
      <Route path="/" element={<Confirm />} />
      <Route path="/sign" element={<Signature />} />
    </Routes>
  );
}

export default ConfirmDelivery;
