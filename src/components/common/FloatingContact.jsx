import React from 'react';
import PropTypes from "prop-types";
import { Row, Col, Button } from "antd";
import { PhoneOutlined } from "@ant-design/icons";

const FloatingContact = ({ title, description, phoneNumber }) => {
  return (
    <div 
      className="fixed inset-x-0 bottom-0 flex justify-center z-50"
      style={{
        pointerEvents: 'none' // Allow clicks to pass through the wrapper
      }}
    >
      <Col
        style={{
          padding: "20px",
          backgroundColor: "white",
          width: "300px",
          height: "140px",
          position: "relative", // Changed to relative
          left: "30vw", // Maintain desktop positioning
          bottom: "4vh",
          borderTop: "8px solid #b02636",
          borderRadius: 20,
          boxShadow:
            "2px 6px 10px 0 rgba(0, 0, 0, 0.2), 2px 8px 22px 0 rgba(0, 0, 0, 0.19)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          maxWidth: "73%", // Prevent overflow on smaller screens
        }}
        className="mobile-responsive-container" // Added for potential additional styling
      >
        <Row
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "-50px", 
          }}
        >
          <div
            style={{
              color: "#00215b",
              fontFamily: "'Josh', sans-serif",
              fontSize: "17px",
              fontWeight: "bold",
              maxWidth: '200px', // Prevent overflow
            }}
          >
            {title}
          </div>
          <Button
            type="primary"
            shape="circle"
            icon={<PhoneOutlined style={{ fontSize: "32px" }} />}
            href={`tel:${phoneNumber}`}
            style={{
              backgroundColor: "#b02636",
              borderColor: "#b02636",
              width: "60px",
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </Row>
        <Row
          style={{
            color: "#555",
            fontFamily: "'Poppins', sans-serif",
            fontSize: "14px",
            fontWeight: "bold",
            maxWidth: '280px', // Prevent overflow
          }}
        >
          {description}
        </Row>
      </Col>
    </div>
  );
};

FloatingContact.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
};

export default FloatingContact;