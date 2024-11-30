import { Row, Col } from "antd";
import {
    ToolOutlined,
    ProjectOutlined,
    BuildOutlined,
} from "@ant-design/icons";


const FeatureSection = () => {
    const features = [	
        {
            icon: (
                <ToolOutlined style={{ fontSize: "50px", color: "#c13c3c" }} />
            ),
            title: "General Contract",
            description:
                "Quisque condimentum erat ac orci blandit, in sollicitudin tellus vestibulum",
        },
        {
            icon: (
                <ProjectOutlined
                    style={{ fontSize: "50px", color: "#c13c3c" }}
                />
            ),
            title: "Project Planning",
            description:
                "Nullam commodo tincidunt nisl, nec vehicula dui interdum nec",
        },
        {
            icon: (
                <BuildOutlined style={{ fontSize: "50px", color: "#c13c3c" }} />
            ),
            title: "Refurbishment",
            description:
                "Sed vitae aliquet ipsum, ut ornare lectus. Proin sed sem risus. Sed nunc",
        },
    ];

    return (
        <Col
            style={{
                padding: "40px 40px",
                backgroundColor: "white",
                width: "450px",
            }}
        >
            <Row level={2} style={{ color: "#00215b", textAlign: "left" }}>
                We Construct and Manage Places and Infrastructures
            </Row>
            <Col
                gutter={[16, 24]}
                style={{
                    marginTop: "20px",
                }}
            >
                {features.map((feature, index) => (
                    <Row
                        key={index}
                        xs={24}
                        md={8}
                        style={{ display: "flex", flexDirection: "row" }}
                    >
                        <div>{feature.icon}</div>
                        <div>
                            <div
                                style={{ color: "#00215b", marginTop: "15px" }}
                            >
                                {feature.title}
                            </div>
                            <div style={{ color: "#555" }}>
                                {feature.description}
                            </div>
                        </div>
                    </Row>
                ))}
            </Col>
        </Col>
    );
};

export default FeatureSection;
