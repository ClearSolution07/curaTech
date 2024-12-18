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
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d4420.113268358756!2d91.80119945557989!3d26.12923567493806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sHouse%20No%2006%2C%20Jayanagar%2C%20Guwahati%2C%20781022!5e0!3m2!1sen!2sin!4v1734072739298!5m2!1sen!2sin"
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
                        <strong>Jayanagar, Guwahati, Assam</strong>
                        <br />
                        House No 06, Jayanagar, Guwahati, 781022
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
                                <span>+91 7002394679</span>
                            </p>
                        </div>
                    </div>

                    <div className={styles.detailBox}>
                        <MessageOutlined className={styles.icon} />
                        <div>
                            <h5>DUSTRO EMAILS</h5>
                            <p>
                                <span>curatechengineering@gmail.com</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
