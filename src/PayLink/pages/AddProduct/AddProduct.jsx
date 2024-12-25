import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 추가
import styles from "./AddProduct.module.css";

function AddProduct() {
  const [quantity, setQuantity] = useState("1");
  const price = 1000000;
  const navigate = useNavigate(); // 네비게이트 훅 사용

  const handleQuantityChange = (e) => {
    let value = e.target.value;

    if (/^0+/.test(value)) {
      value = value.replace(/^0+/, "");
    }

    if (value === "") {
      setQuantity("");
    } else {
      setQuantity(value);
    }
  };

  const handleBlur = () => {
    if (quantity === "" || parseInt(quantity, 10) <= 0) {
      setQuantity("1");
    } else {
      setQuantity(String(parseInt(quantity, 10)));
    }
  };

  const handleClose = () => {
    navigate("/link/select"); // /link/select 경로로 이동
  };

  const totalPrice = price * (parseInt(quantity, 10) || 1);

  return (
    <div className={styles["add-wrapper"]}>
      <div className={styles["add-product"]}>
        <div className={styles["add-product__header"]}>
          <button
            className={styles["close-button"]}
            onClick={handleClose} // 닫기 버튼에 이벤트 추가
          >
            <img src="/close.svg" alt="close" />
          </button>
        </div>

        <img
          src="/ex1.jpeg"
          alt="상품 이미지"
          className={styles["add-product__image"]}
        />

        <div className={styles["add-product__info"]}>
          <div className={styles["add-product__group"]}>
            <span className={styles["add-product__label"]}>상품명 :</span>
            <span className={styles["add-product__value"]}>공사 비입니다.</span>
          </div>
          <div className={styles["add-product__group"]}>
            <span className={styles["add-product__price-label"]}>가 격 :</span>
            <span className={styles["add-product__price-value"]}>
              <span>{price.toLocaleString()}</span>원
            </span>
          </div>
          <div className={styles["add-product__group"]}>
            <span className={styles["add-product__label"]}>상품 설명 :</span>
            <span className={styles["add-product__value"]}>
              바닦 및 벽면 타일 공사 핑크색 페인트 칠 오늘도 이쁜 인테리어 하는
              칠쟁이 타일쟁이 인건비 및 재료, 운송 모든 비용 총 합계낸 겁니다.
              불만 있으면 말씀하세요. 확 가서 불질러 버릴 라니까.
            </span>
          </div>
          <div
            className={`${styles["add-product__quantity"]} ${styles["add-product__group"]}`}
          >
            <label htmlFor="quantity">수 량 : </label>

            <input
              id="quantity"
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              onBlur={handleBlur}
              min="1"
              className={styles["quantity-input"]}
            />
          </div>
        </div>
      </div>

      <div className={styles["add-product__summary"]}>
        <div className={styles["add-product__summary-info"]}>
          <p>
            수량 입력 확인 후 <br />
            우측 결제상품 추가하기 버튼을 눌러주세요.
          </p>
          <div className={styles["summary__group"]}>
            <span className={styles["summary__label"]}>합계 :</span>
            <span className={styles["summary__total-value"]}>
              {totalPrice.toLocaleString()}
              <span>원</span>
            </span>
          </div>
        </div>
        <button className={styles["add-product__button"]}>
          결제 상품 <br />
          추가하기
        </button>
      </div>
    </div>
  );
}

export default AddProduct;