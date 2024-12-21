import React, { useState } from "react";
import styles from "./BusinessInfo.module.css";

function BusinessInfo() {
  const [formData, setFormData] = useState({
    shopName: "",
    businessNumber: "",
    owner: "",
    phone: "",
    address: "",
    addressDetail: "",
    bank: "신한은행",
    accountNumber: "",
    businessFile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("사업자 정보가 등록되었습니다.");
    console.log(formData);
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
          사업자 정보를 입력해 주세요.
        </div>

        <div className={styles["business-form__group"]}>
          <div className={styles["business-form__group-title"]}>상점명 :</div>
          <input
            type="text"
            name="shopName"
            value={formData.shopName}
            onChange={handleChange}
          />
        </div>

        <div className={styles["business-form__group"]}>
          <div className={styles["business-form__group-title"]}>
            사업자등록번호 :
          </div>
          <input
            type="text"
            name="businessNumber"
            value={formData.businessNumber}
            onChange={handleChange}
          />
        </div>

        <div className={styles["business-form__group"]}>
          <div className={styles["business-form__group-title"]}>대표 :</div>
          <div>박철수</div>
        </div>

        <div className={styles["business-form__group"]}>
          <div className={styles["business-form__group-title"]}>연락처 :</div>
          <div>010-0000-0000</div>
        </div>

        <div className={styles["business-form__group"]}>
          <div className={styles["business-form__group-title"]}>주소 :</div>
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
          <input
            type="text"
            name="addressDetail"
            value={formData.addressDetail}
            onChange={handleChange}
          />
        </div>

        <div className={styles["business-form__group"]}>
          <div className={styles["business-form__group-title"]}>
            입금 계좌 :
          </div>
          <div className={styles["account-group"]}>
            <select
              name="bank"
              value={formData.bank}
              onChange={handleChange}
              className={styles["select-box"]}
            >
              <option value="신한은행">신한은행</option>
              <option value="국민은행">국민은행</option>
              <option value="하나은행">하나은행</option>
            </select>
            <button type="button" className={styles["verify-button"]}>
              계좌 인증
            </button>
          </div>
          <input
            type="text"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
          />
        </div>

        <div className={styles["business-form__group"]}>
          <div className={styles["business-form__group-title"]}>
            사업자등록증 :
          </div>
          <div className={styles["file-group"]}>
            <input
              type="text"
              name="businessFile"
              value={formData.businessFile}
              onChange={handleChange}
              readOnly
            />
            <button type="button" className={styles["attach-button"]}>
              첨부
            </button>
          </div>
        </div>
      </div>

      <button type="submit" className={styles["submit-button"]}>
        정보 등록
      </button>
    </form>
  );
}

export default BusinessInfo;
