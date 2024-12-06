import styles from "./ContactInfo.module.css";
import { PhoneOutlined, MessageOutlined } from "@ant-design/icons";

const ContactInfo = () => {
    return (
        <div
            className={styles.contactInfoContainer}
            style={{ marginBottom: "4rem" }}
        >
            {/* Replace the map image background with the Google Maps iframe */}
            <div className={styles.mapBackground}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14323.215860987959!2d91.74512190865264!3d26.17051313355451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5a297531bd2b%3A0x85a93a4fdc6c8156!2sGrande%20Cines!5e0!3m2!1sen!2sin!4v1733486587127!5m2!1sen!2sin"
                    width="800"
                    height="600"
                    style={{
                        border: 0,
                        width: "100%",
                        height: "100%",
                        display: "block",
                    }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
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
