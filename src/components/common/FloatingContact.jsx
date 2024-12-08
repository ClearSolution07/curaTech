import PropTypes from "prop-types";
import { Row, Col } from "antd";

const FloatingContact = ({ title, description }) => (
    <Col
        style={{
            padding: "40px",
            backgroundColor: "white",
            width: "450px",
            left: "16vw",
            bottom: "8vh",
            borderTop: "8px solid #b02636",
            boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
    >
        <Row
            level={2}
            style={{
                color: "#00215b",
                textAlign: "left",
                fontFamily: "'Josh', sans-serif", // Font family for title
            }}
        >
            {title}
        </Row>
        <Row
            style={{
                marginTop: "20px",
                color: "#555",
                fontFamily: "'Poppins', sans-serif", // Font family for description
            }}
        >
            {description}
        </Row>
    </Col>
);

FloatingContact.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default FloatingContact;
