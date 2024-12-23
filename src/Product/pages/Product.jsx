import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductList from "./ProductList/ProductList";
import ProductNone from "./ProductNone/ProductNone";

function Product() {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/none" element={<ProductNone />} />
    </Routes>
  );
}

export default Product;
