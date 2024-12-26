import React from "react";
import { Route, Routes } from "react-router-dom";
import PaymentLinkList from "./PaymentLinkList/PaymentLinkList";
const payments = [
  {
    date: "2024-09-12 16:25",
    buyer: "김길성",
    phone: "010-0000-0000",
    amount: 5000000,
    status: "미결제",
    complete: false,
    linkRequired: true,
  },
  {
    date: "2024-09-12 16:25",
    buyer: "고길성",
    phone: "010-0000-0000",
    amount: 5000000,
    status: "결제완료",
    complete: true,
    linkRequired: false,
  },
  {
    date: "2024-09-12 16:25",
    buyer: "한길성",
    phone: "010-0000-0000",
    amount: 5000000,
    status: "미결제",
    complete: false,
    linkRequired: true,
  },
  {
    date: "2024-09-12 16:25",
    buyer: "홍길성",
    phone: "010-0000-0000",
    amount: 800000,
    status: "결제완료",
    complete: true,
    linkRequired: false,
  },
];

function PaymentList() {
  return (
    <Routes>
      <Route path="/" element={<PaymentLinkList />} />
    </Routes>
  );
}

export default PaymentList;
