import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LinkList.module.css";
import LinkItem from "../../../shared/components/LinkItem/LinkItem";
import LinkTotal from "../../components/LinkTotal/LinkTotal";

const items = [
  {
    image: "/ex1.jpeg",
    name: "공사 비입니다.",
    price: 1000000,
    quantity: 1,
    description: "아주 멋진 자동차 입니다. ㅋㅋㅋㅋㅋㅋㅋㅋ",
  },
  {
    image: "/ex2.jpeg",
    name: "공사 비입니다.",
    price: 1000000,
    quantity: 2,
    description: "아주 멋진 자동차 입니다. ㅋㅋㅋㅋㅋㅋㅋㅋ",
  },
];

function LinkList() {
  const navigate = useNavigate();

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleAddClick = () => {
    navigate("/link/select");
  };

  const handleItemClick = () => {
    navigate("/link/add");
  };

  return (
    <div className={styles["link-list"]}>
      <div className={styles["link-list__items"]}>
        {items.length > 0 ? (
          items.map((item, index) => (
            <div
              key={index}
              onClick={() => handleItemClick()}
              className={styles["link-list__item"]}
            >
              <LinkItem item={item} />
            </div>
          ))
        ) : (
          <div className={styles["link-list__empty"]}>
            <p>등록된 상품이 없습니다.</p>
            <button
              onClick={handleAddClick}
              className={styles["link-list__add-button"]}
            >
              <img src="/plus.svg" alt="Add Item" />
            </button>
            <p>상품등록</p>
          </div>
        )}
        {items.length > 0 && (
          <div className={styles["link-list__plus"]} onClick={handleAddClick}>
            <img src="plus.svg" alt="Add More" />
          </div>
        )}
      </div>
      {items.length > 0 && <LinkTotal total={total} />}
    </div>
  );
}

export default LinkList;
