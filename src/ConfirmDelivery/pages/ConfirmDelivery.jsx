import React from "react";
import { Routes, Route } from "react-router-dom";
import Confirm from "./Confirm/Confirm";
import Signature from "./Signature/Signature";
import Complete from "./Complete/Complete";

function ConfirmDelivery() {
  return (
    <Routes>
      <Route path="/" element={<Confirm />} />
      <Route path="/sign" element={<Signature />} />
      <Route path="/Complete" element={<Complete />} />
    </Routes>
  );
}

export default ConfirmDelivery;
