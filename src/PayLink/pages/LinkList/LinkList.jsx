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

  return (
    <div className={styles["link-list"]}>
      <div className={styles["link-list__items"]}>
        {items.map((item, index) => (
          <LinkItem key={index} item={item} />
        ))}
        <div className={styles["link-list__plus"]} onClick={handleAddClick}>
          <img src="plus.svg" alt="Add" />
        </div>
      </div>
      <LinkTotal total={total} />
    </div>
  );
}

export default LinkList;
