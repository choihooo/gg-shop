import React from "react";
import { Routes, Route } from "react-router-dom";
import LinkList from "./LinkList/LinkList";
import SelectProduct from "./SelectProduct/SelectProduct";
import AddProduct from "./AddProduct/AddProduct";
import MakeLink from "./MakeLink/MakeLink";

function PayLink() {
  return (
    <Routes>
      <Route path="/" element={<LinkList />} />
      <Route path="/select" element={<SelectProduct />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/make" element={<MakeLink />} />
    </Routes>
  );
}

export default PayLink;
