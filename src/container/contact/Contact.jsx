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
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d4420.113268358756!2d91.80119945557989!3d26.12923567493806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sHouse%20No%2006%2C%20Jayanagar%2C%20Guwahati%2C%20781022!5e0!3m2!1sen!2sin!4v1734072739298!5m2!1sen!2sin"
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
                        <div className={styles.companyName}>Cura Tech Engineering</div>
                        <h1 className={styles.addressText}>
                        House No 06, Jayanagar, Guwahati, 781022
                        </h1>
                    </div>

                    <div className={styles.contactCard}>
                        <div className={styles.iconContainer}>
                            <img src={phone} alt="Phone" className={styles.icon} />
                        </div>
                        <div className={styles.contactDetails}>
                            <div className={styles.contactTitle}>Company Phones</div>
                            <div className={styles.contactNumbers}>
                                <div>+91 7002394679</div>
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
                                <div>curatechengineering@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;