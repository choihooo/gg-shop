import React from "react";
import styles from "./ProductItem.module.css";

function ProductItem({ imgSrc, name, price, color = "white" }) {
  return (
    <div className={styles["product-item"]} style={{ backgroundColor: color }}>
      <img src={imgSrc} alt={name} className={styles["product-item__image"]} />
      <div className={styles["product-item__info"]}>
        <div className={styles["product-item__name"]}>
          <span className={styles["product-item__label"]}>상품명 :</span>
          <span className={styles["product-item__value"]}>{name}</span>
        </div>
        <div className={styles["product-item__price"]}>
          <span className={styles["product-item__label"]}>가 격 :</span>
          <span className={styles["product-item__value"]}>
            {price.toLocaleString()}원
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
