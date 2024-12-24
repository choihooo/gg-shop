import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductList from "./ProductList/ProductList";
import ProductNone from "./ProductNone/ProductNone";
import ProductUpload from "./ProductUpload/ProductUpload";
import ProductEdit from "./ProductEdit/ProductEdit";

function Product() {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/none" element={<ProductNone />} />
      <Route path="/upload" element={<ProductUpload />} />
      <Route path="/edit" element={<ProductEdit />} />
    </Routes>
  );
}

export default Product;
