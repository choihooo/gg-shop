import React, { useEffect, useState } from "react";
import styles from "./RegisterTerms.module.css";

function RegisterTerms({ agreements, setAgreements }) {
  const [terms, setTerms] = useState([]);

  useEffect(() => {
    // Fetch terms from terms.json
    fetch("/terms.json")
      .then((response) => response.json())
      .then((data) => {
        setTerms(data.terms);

        // Initialize agreements state based on fetched terms
        const initialAgreements = {};
        data.terms.forEach((term, index) => {
          initialAgreements[index] = false; // 초기값 false로 설정
        });
        initialAgreements["marketing"] = false; // 마케팅 동의 초기값
        setAgreements((prev) => ({ ...prev, ...initialAgreements }));
      })
      .catch((error) => {
        console.error("Error fetching terms:", error);
      });
  }, [setAgreements]);

  const handleCheckboxChange = (key) => {
    setAgreements((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className={styles["terms-container"]}>
      {terms.map((term, index) => (
        <div key={index} className={styles["terms-item"]}>
          <div className={styles["terms-title"]}>{term.title}</div>
          <div className={styles["terms-content"]}>{term.content}</div>
          <label className={styles["terms-checkbox"]}>
            {term.required ? "(필수)" : "(선택)"}
            <input
              type="checkbox"
              checked={agreements[index] || false}
              onChange={() => handleCheckboxChange(index)}
            />
            동의합니다.
          </label>
        </div>
      ))}
      <div className={styles["terms-item"]}>
        <div className={styles["terms-title"]}>마케팅 광고 수신동의 여부</div>
        <div className={styles["terms-marketing"]}>
          지지샵의 신상품 안내 및 할인 혜택 정보, 이벤트 소식 등 마케팅 정보를
          이메일, 문자 메시지, 푸시 알림으로 받는 것에 동의합니다.
        </div>
        <label className={styles["terms-checkbox"]}>
          (선택)
          <input
            type="checkbox"
            checked={agreements["marketing"] || false}
            onChange={() => handleCheckboxChange("marketing")}
          />
          동의합니다.
        </label>
      </div>
    </div>
  );
}

export default RegisterTerms;
