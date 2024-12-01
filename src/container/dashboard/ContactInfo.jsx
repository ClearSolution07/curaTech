import React from "react";
import styles from "./ContactInfo.module.css";
import mapImage from "../../assets/map.png"; 
import { PhoneOutlined, MessageOutlined } from "@ant-design/icons";

const ContactInfo = () => {
  return (
    <div
      className={styles.contactInfoContainer}
      style={{ marginBottom: "4rem" }}
    >
      <div
        className={styles.mapBackground}
        style={{ backgroundImage: `url(${mapImage})` }}
      >
        <div className={styles.addressBox}>
          <h5>COMPANY ADDRESS</h5>
          <p>
            <strong>Themeforest, Envato HQ</strong>
            <br />
            24 Fifth St., Los Angeles, USA
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <div className={styles.contactDetails}>
          <div className={styles.detailBox}>
            <PhoneOutlined className={styles.icon} />
            <div>
              <h5>COMPANY PHONES</h5>
              <p>
                <span>+1234 5678 098</span>
                <br />
                <span>+1634 7638 654</span>
              </p>
            </div>
          </div>

          <div className={styles.detailBox}>
            <MessageOutlined className={styles.icon} />
            <div>
              <h5>DUSTRO EMAILS</h5>
              <p>
                <span>dusto@gmail.com</span>
                <br />
                <span>dusto.info@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
