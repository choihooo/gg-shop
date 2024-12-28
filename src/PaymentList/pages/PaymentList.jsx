import React from "react";
import { Route, Routes } from "react-router-dom";
import CardList from "./CardList/CardList";

function PaymentList() {
  return (
    <Routes>
      <Route path="/" element={<CardList />} />
    </Routes>
  );
}

export default PaymentList;
