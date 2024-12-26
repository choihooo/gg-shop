import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LinkList.module.css";
import LinkItem from "../../../shared/components/LinkItem/LinkItem";
import LinkTotal from "../../components/LinkTotal/LinkTotal";

const items = []; // 아이템이 없을 때 테스트

function LinkList() {
  const navigate = useNavigate();

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleAddClick = () => {
    navigate("/link/select");
  };

  return (
    <div className={styles["link-list"]}>
      <div className={styles["link-list__items"]}>
        {items.length > 0 ? (
          items.map((item, index) => <LinkItem key={index} item={item} />)
        ) : (
          <div className={styles["link-list__empty"]}>
            <p>등록된 상품이 없습니다.</p>
            <button
              onClick={handleAddClick}
              className={styles["link-list__add-button"]}
            >
              <img src="/plus.svg" />
            </button>
            <p>상품등록</p>
          </div>
        )}
        {items.length > 0 && (
          <div className={styles["link-list__plus"]} onClick={handleAddClick}>
            <img src="plus.svg" alt="Add" />
          </div>
        )}
      </div>
      {items.length > 0 && <LinkTotal total={total} />}
    </div>
  );
}

export default LinkList;
