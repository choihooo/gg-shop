import React, { useState } from "react";
import styles from "./BusinessInput.module.css";
import ButtonDropdown from "./ButtonDropdown";
import { useBusinessTypeStore } from "../../../core/store";
import { useNavigate } from "react-router-dom";
import Modal from "../../../shared/components/Modal/Modal";

function BusinessInput() {
  const navigate = useNavigate();
  const { selectedType } = useBusinessTypeStore();
  const [formData, setFormData] = useState({
    shopName: "",
    businessNumber: "",
    owner: "",
    phone: "",
    address: "",
    addressDetail: "",
    bank: "신한은행",
    idCardFile: "",
    accountNumber: "",
    businessFile: "",
  });
  const handleFileUpload = (e, fieldName) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, [fieldName]: file.name });
    }
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSelectBank = (selectedBank) => {
    setFormData({ ...formData, bank: selectedBank });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.shopName) {
      setModalMessage("상점명을 입력해 주세요.");
      setIsModalOpen(true);
      return;
    }
    if (!formData.businessNumber) {
      setModalMessage(
        selectedType === "non-business"
          ? "주민등록번호를 입력해 주세요."
          : "사업자등록번호를 입력해 주세요."
      );
      setIsModalOpen(true);
      return;
    }
    if (!formData.address) {
      setModalMessage("주소를 입력해 주세요.");
      setIsModalOpen(true);
      return;
    }
    if (!formData.accountNumber) {
      setModalMessage("계좌번호를 입력해 주세요.");
      setIsModalOpen(true);
      return;
    }
    if (!formData.idCardFile) {
      setModalMessage("신분증을 첨부해 주세요.");
      setIsModalOpen(true);
      return;
    }
    if (selectedType === "business" && !formData.businessFile) {
      setModalMessage("사업자 등록증을 첨부해 주세요.");
      setIsModalOpen(true);
      return;
    }

    navigate("/store/confirm");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalMessage("");
  };
  return (
    <form className={styles["business-form"]} onSubmit={handleSubmit}>
      <div className={styles["business-form__profile"]}>
        <img
          src="/profile.png"
          alt="프로필"
          className={styles["profile-img"]}
        />
      </div>
      <div className={styles["business-form__input-wrapper"]}>
        <div className={styles["business-form__title"]}>
          {selectedType === "non-business"
            ? "비사업자 정보를 입력해 주세요."
            : "사업자 정보를 입력해 주세요."}
        </div>
        <div
          className={styles["business-form__group"]}
          style={{ marginBottom: "4px" }}
        >
          <div className={styles["business-form__group-title"]}>상점명 :</div>
          <input
            type="text"
            name="shopName"
            value={formData.shopName}
            onChange={handleChange}
          />
        </div>
        <div
          className={styles["business-form__group"]}
          style={{ marginBottom: "4px" }}
        >
          <div className={styles["business-form__group-title"]}>
            {selectedType === "non-business"
              ? "주민등록번호 :"
              : "사업자등록번호 :"}
          </div>
          <input
            type="number"
            name="businessNumber"
            value={formData.businessNumber}
            onChange={handleChange}
          />
        </div>
        <div className={styles["business-form__group"]}>
          <div className={styles["business-form__group-title"]}>대표 :</div>
          <div className={styles["business-form__group-content"]}>박철수</div>
        </div>
        <div
          className={styles["business-form__group"]}
          style={{ marginBottom: "4px" }}
        >
          <div className={styles["business-form__group-title"]}>연락처 :</div>
          <div className={styles["business-form__group-content"]}>
            010-0000-0000
          </div>
        </div>
        <div
          className={styles["business-form__group"]}
          style={{ marginBottom: "4px" }}
        >
          <div className={styles["business-form__group-title"]}>주소 :</div>
          <div className={styles["address-group"]}>
            <div className={styles["address-group"]}>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
              <button type="button" className={styles["search-button"]}>
                <img src="/search.svg" />
              </button>
            </div>
          </div>
        </div>
        <div
          className={styles["business-form__group"]}
          style={{ marginBottom: "8px" }}
        >
          <div className={styles["business-form__group-title"]}></div>
          <input
            type="text"
            name="addressDetail"
            value={formData.addressDetail}
            onChange={handleChange}
          />
        </div>
        <div
          className={styles["business-form__group"]}
          style={{ marginBottom: "5px" }}
        >
          <div className={styles["business-form__group-title"]}>
            입금 계좌 :
          </div>
          <div className={styles["account-group"]}>
            <ButtonDropdown
              options={["신한은행", "국민은행", "하나은행", "우리은행"]}
              onSelect={handleSelectBank}
              defaultValue={formData.bank}
            />
            <button type="button" className={styles["verify-button"]}>
              계좌 인증
            </button>
          </div>
        </div>
        <div
          className={styles["business-form__group"]}
          style={{ marginBottom: "8px" }}
        >
          <div className={styles["business-form__group-title"]}></div>
          <input
            type="number"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            style={{ width: "149px" }}
          />
        </div>
        <div
          className={styles["business-form__group"]}
          style={{ marginBottom: "4px" }}
        >
          <div className={styles["business-form__group-title"]}>신분증 :</div>
          <div className={styles["file-group"]}>
            <input
              type="text"
              name="idCardFile"
              value={formData.idCardFile}
              onChange={(e) => handleFileUpload(e, "idCardFile")}
              readOnly
            />
            <label className={styles["attach-button"]}>
              첨부
              <input
                type="file"
                style={{ display: "none" }}
                onChange={(e) => handleFileUpload(e, "idCardFile")}
              />
            </label>
            {selectedType === "non-business" ? (
              <div className={styles["notice"]}>
                결제 금액 수령 관련 세무업무로 신분증이 <br />
                반드시 필요합니다.
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        {selectedType === "business" && (
          <div className={styles["business-form__group"]}>
            <div className={styles["business-form__group-title"]}>
              사업자 등록증 :
            </div>
            <div className={styles["file-group"]}>
              <input
                type="text"
                name="businessFile"
                value={formData.businessFile}
                readOnly
              />
              <label className={styles["attach-button"]}>
                첨부
                <input
                  type="file"
                  style={{ display: "none" }}
                  onChange={(e) => handleFileUpload(e, "businessFile")}
                />
              </label>
            </div>
          </div>
        )}
      </div>
      <button type="submit" className={styles["submit-button"]}>
        정보 등록
      </button>{" "}
      <Modal isOpen={isModalOpen} message={modalMessage} onClose={closeModal} />
    </form>
  );
}

export default BusinessInput;
