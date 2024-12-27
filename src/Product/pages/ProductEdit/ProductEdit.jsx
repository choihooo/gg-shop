import React, { useState, useRef } from "react";
import styles from "./ProductEdit.module.css";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import Modal from "../../../shared/components/Modal/Modal";
import { useNavigate } from "react-router-dom";

function ProductEdit() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    productName: "",
    price: "",
    description: "",
  });
  const [modalMessage, setModalMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const fileInputRef = useRef(null); // 파일 업로드 input 참조

  // 입력값 변경 핸들러
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // 모달 닫기 핸들러
  const closeModal = () => {
    setIsModalOpen(false);
    setModalMessage("");
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  // 상품 수정 핸들러
  const handleSubmit = () => {
    const { productName, price, description } = formData;

    if (!productName) {
      setModalMessage("상품명을 입력해주세요.");
      setIsModalOpen(true);
      return;
    }
    if (!price) {
      setModalMessage("가격을 입력해주세요.");
      setIsModalOpen(true);
      return;
    }
    if (!description) {
      setModalMessage("상품 설명을 입력해주세요.");
      setIsModalOpen(true);
      return;
    }

    navigate("/product");
  };

  // 상품 삭제 버튼 클릭 핸들러
  const handleDelete = () => {
    setIsDeleteModalOpen(true);
  };

  // 삭제 확인 핸들러
  const confirmDelete = () => {
    setIsDeleteModalOpen(false);
    setModalMessage("상품이 삭제되었습니다.");
    setIsModalOpen(true);

    console.log("상품이 삭제되었습니다.");
    navigate("/product"); // 삭제 후 상품 목록으로 이동
  };

  // 파일 업로드 버튼 클릭 핸들러
  const handleFileUploadClick = () => {
    fileInputRef.current.click(); // 버튼 클릭 시 input 동작
  };

  return (
    <div className={styles["product-edit"]}>
      <div className={styles["product-edit__image"]}>
        <img
          src="/ex1.jpeg"
          alt="사진 수정"
          className={styles["product-edit__image"]}
        />
      </div>
      <button
        className={styles["product-edit__image-upload"]}
        onClick={handleFileUploadClick} // 버튼 클릭 시 파일 업로드 실행
      >
        사진 수정
      </button>
      <input
        type="file"
        ref={fileInputRef} // useRef로 참조
        id="file-upload"
        style={{ display: "none" }} // input 숨김 처리
      />

      <div className={styles["product-edit__form"]}>
        <div className={styles["product-edit__form-group"]}>
          <label
            htmlFor="productName"
            className={styles["product-edit__form-label"]}
          >
            상품명 :
          </label>
          <input
            type="text"
            id="productName"
            value={formData.productName}
            onChange={handleInputChange}
            className={styles["product-edit__form-input"]}
          />
        </div>

        <div className={styles["product-edit__form-group"]}>
          <label htmlFor="price" className={styles["product-edit__form-label"]}>
            가격 :
          </label>
          <input
            type="number"
            id="price"
            value={formData.price}
            onChange={handleInputChange}
            className={styles["product-edit__form-input"]}
          />
        </div>

        <div className={styles["product-edit__form-group"]}>
          <label
            htmlFor="description"
            className={styles["product-edit__form-label"]}
          >
            상품 설명 :
          </label>
          <textarea
            id="description"
            value={formData.description}
            onChange={handleInputChange}
            className={styles["product-edit__form-textarea"]}
          ></textarea>
        </div>

        <div className={styles["product-edit__button-wrapper"]}>
          <button
            className={styles["product-edit__delete-button"]}
            onClick={handleDelete}
          >
            상품 삭제
          </button>
          <button
            className={styles["product-edit__submit-button"]}
            onClick={handleSubmit}
          >
            수정 등록
          </button>
        </div>
      </div>

      {/* 일반 모달 */}
      <Modal isOpen={isModalOpen} message={modalMessage} onClose={closeModal} />

      {/* 삭제 모달 */}
      <DeleteModal
        isOpen={isDeleteModalOpen}
        message="상품 정보를 삭제하시겠습니까?"
        onClose={closeDeleteModal}
        onConfirm={confirmDelete}
      />
    </div>
  );
}

export default ProductEdit;
