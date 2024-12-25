import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SelectProduct.module.css";
import ProductItem from "../../../shared/components/ProductItem/ProductItem";

function SelectProduct() {
  const navigate = useNavigate();

  const products = [
    { id: 1, imgSrc: "/ex1.jpeg", name: "공사 비입니다.", price: 1000000 },
    { id: 2, imgSrc: "/ex2.jpeg", name: "공사 비입니다.", price: 1000000 },
    { id: 3, imgSrc: "/ex1.jpeg", name: "공사 비입니다.", price: 1000000 },
  ];
  const handleProductClick = () => {
    navigate(`/link/add`);
  };
  return (
    <div className={styles["select-product__list"]}>
      <div className={styles["select-product__grid"]}>
        {products.map((product) => (
          <div
            key={product.id}
            className={styles["select-product__wrapper"]}
            onClick={() => handleProductClick()}
          >
            <ProductItem
              imgSrc={product.imgSrc}
              name={product.name}
              price={product.price}
              color="#f4f5f7"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectProduct;
