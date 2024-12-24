import React from "react";
import { useNavigate } from "react-router-dom";
import ProductItem from "../../components/ProductItem/ProductItem";
import styles from "./ProductList.module.css";

function ProductNone() {
  const navigate = useNavigate();

  const products = [
    { id: 1, imgSrc: "/ex1.jpeg", name: "공사 비입니다.", price: 1000000 },
    { id: 2, imgSrc: "/ex2.jpeg", name: "공사 비입니다.", price: 1000000 },
    { id: 3, imgSrc: "/ex1.jpeg", name: "공사 비입니다.", price: 1000000 },
  ];

  // 상품 수정 페이지 이동
  const handleEditProduct = () => {
    navigate(`/product/edit`);
  };

  // 상품 등록 페이지 이동
  const handleAddProduct = () => {
    navigate("/product/upload");
  };

  return (
    <div className={styles["product-list"]}>
      {products.length > 0 ? (
        <div className={styles["grid-container"]}>
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => handleEditProduct()} // 클릭 이벤트 추가
            >
              <ProductItem
                imgSrc={product.imgSrc}
                name={product.name}
                price={product.price}
              />
            </div>
          ))}
          <div className={styles["add-item"]} onClick={handleAddProduct}>
            <img src="/plus.svg" className={styles["plus-icon"]} alt="plus" />
            <p>상품등록</p>
          </div>
        </div>
      ) : (
        <div className={styles["empty-container"]}>
          <p className={styles["empty-text"]}>상품 등록이 필요합니다.</p>
          <div className={styles["add-item"]} onClick={handleAddProduct}>
            <img src="/plus.svg" className={styles["plus-icon"]} alt="plus" />
            <p>상품등록</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductNone;
