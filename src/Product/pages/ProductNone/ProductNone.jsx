import React from "react";
import ProductItem from "../../components/ProductItem/ProductItem";
import styles from "./ProductList.module.css";

function ProductNone() {
  const products = [];

  return (
    <div className={styles["product-list"]}>
      {products.length > 0 ? (
        <div className={styles["grid-container"]}>
          {products.map((product) => (
            <ProductItem
              key={product.id}
              imgSrc={product.imgSrc}
              name={product.name}
              price={product.price}
            />
          ))}
          <div className={styles["add-item"]}>
            <img src="/plus.svg" className={styles["plus-icon"]} alt="plus" />
            <p>상품등록</p>
          </div>
        </div>
      ) : (
        <div className={styles["empty-container"]}>
          <p className={styles["empty-text"]}>상품 등록이 필요합니다.</p>
          <div className={styles["add-item"]}>
            <img src="/plus.svg" className={styles["plus-icon"]} alt="plus" />
            <p>상품등록</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductNone;
