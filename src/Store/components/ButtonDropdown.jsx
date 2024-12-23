import React, { useState, useRef, useEffect } from "react";
import styles from "./ButtonDropdown.module.css";

function ButtonDropdown({ options = [], defaultValue = "신한은행", onSelect }) {
  const [selected, setSelected] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelected(option);
    onSelect(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles["dropdown-container"]} ref={dropdownRef}>
      <button
        className={styles["dropdown-button"]}
        onClick={handleToggle}
        type="button"
      >
        {selected}
        <img src="/down.svg" />
      </button>

      {isOpen && (
        <ul className={styles["dropdown-list"]}>
          {options.map((option, index) => (
            <li
              key={index}
              className={styles["dropdown-item"]}
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ButtonDropdown;
