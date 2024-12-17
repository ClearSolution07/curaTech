import { Row, Col, Typography, Space } from "antd";
import logoImage from "../../assets/Cura Tech Enginnering WithoutB.png";

const { Title, Text, Link } = Typography;

const FooterComponent = () => {
    return (
        <div style={{ color: "#fff" }}>
            <Row>
                {/* Left Section with Logo */}
                <Col
                    xs={24}
                    md={6}
                    style={{
                        backgroundColor: "#b02636",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Row
                        style={{
                            flexDirection: "column",
                            gap: "20px",
                        }}
                    >
                        <Row
                            style={{ marginTop: "16px", marginBottom: "20px" }}
                        >
                            <img
                                src={logoImage}
                                alt="Dustro Logo"
                                style={{ width: "300px", height: "auto" }}
                            />
                        </Row>
                        <Row>
                            <Text
                                style={{
                                    display: "block",
                                    marginTop: "-60px",
                                    fontSize: "14px",
                                    color: "#fff",
                                }}
                            >
                                Complete engineering solutions under one roof.{" "}
                            </Text>
                        </Row>
                    </Row>
                </Col>

                {/* Right Section */}
                <Col
                    xs={24}
                    md={18}
                    style={{
                        backgroundColor: "#00215b",
                        padding: "66px",
                    }}
                >
                    <Row gutter={[16, 16]}>
                        {/* Quick Links */}
                        <Col xs={24} md={8}>
                            <Title level={2} style={{ color: "#fff" }}>
                                Quick Links
                            </Title>
                            <Space direction="vertical">
                                <Link
                                    href="#"
                                    style={{ color: "#fff", fontSize: "16px" }}
                                >
                                    About Company
                                </Link>
                                <Link
                                    href="#"
                                    style={{ color: "#fff", fontSize: "16px" }}
                                >
                                    Our Services
                                </Link>
                                <Link
                                    href="#"
                                    style={{ color: "#fff", fontSize: "16px" }}
                                >
                                    Our Projects
                                </Link>
                                <Link
                                    href="#"
                                    style={{ color: "#fff", fontSize: "16px" }}
                                >
                                    Pricings
                                </Link>
                                <Link
                                    href="#"
                                    style={{ color: "#fff", fontSize: "16px" }}
                                >
                                    Contacts
                                </Link>
                            </Space>
                        </Col>

                        {/* Clients Support */}
                        <Col xs={24} md={8}>
                            <Title level={2} style={{ color: "#fff" }}>
                                Clients Support
                            </Title>
                            <Space direction="vertical">
                                <Link
                                    href="#"
                                    style={{ color: "#fff", fontSize: "16px" }}
                                >
                                    Careers
                                </Link>
                                <Link
                                    href="#"
                                    style={{ color: "#fff", fontSize: "16px" }}
                                >
                                    Our Process
                                </Link>
                                <Link
                                    href="#"
                                    style={{ color: "#fff", fontSize: "16px" }}
                                >
                                    FAQs
                                </Link>
                                <Link
                                    href="#"
                                    style={{ color: "#fff", fontSize: "16px" }}
                                >
                                    Clients Testimonials
                                </Link>
                                <Link
                                    href="#"
                                    style={{ color: "#fff", fontSize: "16px" }}
                                >
                                    Our Blog
                                </Link>
                            </Space>
                        </Col>

                        {/* Our News */}
                        <Col xs={24} md={8}>
                            <Title level={2} style={{ color: "#fff" }}>
                                Our News
                            </Title>
                            <Space direction="vertical" size="large">
                                <div>
                                    <Link
                                        href="#"
                                        style={{
                                            color: "#fff",
                                            fontSize: "16px",
                                        }}
                                    >
                                        Agile Construction <br /> Management
                                        Building
                                    </Link>
                                    <br />

                                    <Text
                                        style={{
                                            color: "#ddd",
                                            fontSize: "12px",
                                        }}
                                    >
                                        20 Nov 2020 &nbsp; by merkulove
                                    </Text>
                                </div>
                                <div>
                                    <Link
                                        href="#"
                                        style={{
                                            color: "#fff",
                                            fontSize: "16px",
                                        }}
                                    >
                                        Top Saas Construction <br /> Products
                                        Information
                                    </Link>
                                    <br />
                                    <Text
                                        style={{
                                            color: "#ddd",
                                            fontSize: "12px",
                                        }}
                                    >
                                        29 Nov 2020 &nbsp;by merkulove
                                    </Text>
                                </div>
                            </Space>
                        </Col>
                        <Row style={{ marginTop: "24px" }}>
                            <Text style={{ color: "#fff", fontSize: "14px" }}>
                                © 2021 CURA TECH ENGINEERING. All rights reserved.
                            </Text>
                        </Row>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default FooterComponent;
