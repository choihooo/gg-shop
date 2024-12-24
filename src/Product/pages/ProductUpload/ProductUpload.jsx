import React, { useState } from "react";
import styles from "./ProductUpload.module.css";
import Modal from "../../../shared/components/Modal/Modal";
import { useNavigate } from "react-router-dom";

function ProductUpload() {
  const [formData, setFormData] = useState({
    productName: "",
    price: "",
    description: "",
  });
  const navigate = useNavigate();
  const [modalMessage, setModalMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleClose = () => {
    navigate("/product");
  };

  const validateInputs = () => {
    if (!formData.productName) {
      setModalMessage("상품명을 입력해주세요.");
      setIsModalOpen(true);
      return false;
    }
    if (!formData.price) {
      setModalMessage("가격을 입력해주세요.");
      setIsModalOpen(true);
      return false;
    }
    if (!formData.description) {
      setModalMessage("상품 설명을 입력해주세요.");
      setIsModalOpen(true);
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (validateInputs()) {
      navigate("/product");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalMessage("");
  };

  return (
    <div className={styles["product-upload"]}>
      <img
        src="/close.svg"
        className={styles["product-upload__close"]}
        onClick={handleClose}
      />

      <div className={styles["product-upload__image"]}>
        <label htmlFor="file-upload">
          <img
            src="/plus.svg"
            alt="사진 등록"
            className={styles["plus-icon"]}
          />
          <p>사진 등록</p>
        </label>
        <input type="file" id="file-upload" style={{ display: "none" }} />
      </div>

      <div className={styles["product-upload__form"]}>
        <div className={styles["form-group"]}>
          <label htmlFor="productName">상품명 :</label>
          <input
            type="text"
            id="productName"
            value={formData.productName}
            onChange={handleInputChange}
          />
        </div>

        <div className={styles["form-group"]}>
          <label htmlFor="price">가격 :</label>
          <input
            type="number"
            id="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>

        <div className={styles["form-group"]}>
          <label htmlFor="description">상품 설명 :</label>
          <textarea
            id="description"
            value={formData.description}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className={styles["submit-button-wrapper"]}>
          <button className={styles["submit-button"]} onClick={handleSubmit}>
            상품 등록
          </button>
        </div>
      </div>

      {/* 모달 컴포넌트 */}
      <Modal isOpen={isModalOpen} message={modalMessage} onClose={closeModal} />
    </div>
  );
}

export default ProductUpload;
