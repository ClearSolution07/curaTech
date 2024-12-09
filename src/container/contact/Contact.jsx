import React from "react";
import CommonCarousel from "../../components/common/CommonCarousel";
import slideImage from "../../assets/slide.jpg";
import phone from "../../assets/phone.png";
import dmail from "../../assets/dmail.png";
import SubmitForm from "./Form";
import styles from "../../container/contact/Contact.module.css";

function Contact() {
    return (
        <>
            <CommonCarousel
                heading="Contacts"
                description="Explore opportunities and possibilities."
                backgroundImage={slideImage}
                showFloatingContact={false}
                containerStyle={{}}
                floatingContactProps={{
                    title: "We Construct and Manage Places and Infrastructures",
                    description: "We offer the best solutions for your needs.",
                }}
            />
            <SubmitForm />
            <div className={styles.mapContainer}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14323.215860987959!2d91.74512190865264!3d26.17051313355451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5a297531bd2b%3A0x85a93a4fdc6c8156!2sGrande%20Cines!5e0!3m2!1sen!2sin!4v1733486587127!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: "0" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps"
                ></iframe>
            </div>
            <div className={styles.contactInfoContainer}>
                <div className={styles.contactWrapper}>
                    <div className={styles.addressCard}>
                        <div className={styles.companyName}>Company Name</div>
                        <h1 className={styles.addressText}>
                            Themeforest, Envato HQ 24 Fifth st., Los Angeles, USA
                        </h1>
                    </div>

                    <div className={styles.contactCard}>
                        <div className={styles.iconContainer}>
                            <img src={phone} alt="Phone" className={styles.icon} />
                        </div>
                        <div className={styles.contactDetails}>
                            <div className={styles.contactTitle}>Company Phones</div>
                            <div className={styles.contactNumbers}>
                                <div>+ 1 234 5678 098</div>
                                <div>+ 1 234 5678 098</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.contactCard}>
                        <div className={styles.iconContainer}>
                            <img src={dmail} alt="Email" className={styles.icon} />
                        </div>
                        <div className={styles.contactDetails}>
                            <div className={styles.contactTitle}>Company Email</div>
                            <div className={styles.contactNumbers}>
                                <div>info@company.com</div>
                                <div>support@company.com</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;