import React from "react";
import styles from "./LinkItem.module.css";

function LinkItem({ item }) {
  return (
    <div className={styles["link-item"]}>
      <img
        src={item.image}
        alt={item.name}
        className={`${styles["link-item__image"]} ${styles["itemData"]}`}
      />
      <div className={styles["link-item__info"]}>
        <div className={`${styles["link-item__group"]} ${styles["itemData"]}`}>
          <span className={styles["link-item__title"]}>상품명 : </span>
          <span
            className={`${styles["link-item__data"]} ${styles["link-item__data--name"]}`}
          >
            {item.name}
          </span>
        </div>
        <div className={`${styles["link-item__group"]} ${styles["itemData"]}`}>
          <span className={styles["link-item__title"]}>가 격 : </span>
          <span className={styles["link-item__data"]}>
            <span className={styles["link-item__number"]}>
              {item.price.toLocaleString()}
            </span>
            원
          </span>
        </div>
        <div className={`${styles["link-item__group"]} ${styles["itemData"]}`}>
          <span className={styles["link-item__title"]}>수 량 : </span>
          <span className={styles["link-item__data"]}>
            <span className={styles["link-item__number"]}>{item.quantity}</span>
            개
          </span>
        </div>
        <div className={`${styles["link-item__group"]} ${styles["itemData"]}`}>
          <span className={styles["link-item__title"]}>설 명 : </span>
          <span
            className={`${styles["link-item__data"]} ${styles["link-item__data--description"]}`}
          >
            {item.description}
          </span>
        </div>
      </div>
    </div>
  );
}

export default LinkItem;
