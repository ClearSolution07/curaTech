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
        }}
    >
        <Row level={2} style={{ color: "#00215b", textAlign: "left" }}>
            {title}
        </Row>
        <Row
            style={{
                marginTop: "20px",
                color: "#555",
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
