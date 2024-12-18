import { Button, Form, Input, Row, Col } from "antd";
import styles from "../../container/contact/Contact.module.css";

const SubmitForm = () => {
    const [form] = Form.useForm();

    const inputStyle = {
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
        borderRadius: "6px",
        minHeight:"60px",
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "80vh",
            }}
        >
            <Form
                form={form}
                scrollToFirstError={{
                    behavior: "instant",
                    focus: true,
                }}
                style={{
                    borderRadius: "8px",
                    width: "60%",
                    padding: "20px",
                    maxWidth: "60vw",
                }}
                labelCol={{
                    span: 6,
                }}
            >
                {/* Row with two input fields */}
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter your full name",
                                },
                            ]}
                        >
                            <Input
                                placeholder="Your Full Name"
                                style={inputStyle}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter your email address",
                                },
                            ]}
                        >
                            <Input
                                placeholder="Your Email Address"
                                style={inputStyle}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="address"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter your address",
                                },
                            ]}
                        >
                            <Input
                                placeholder="Your Address"
                                style={inputStyle}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="phone"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter your phone number",
                                },
                            ]}
                        >
                            <Input
                                placeholder="Your Phone Number"
                                style={inputStyle}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item>
                    <Input.TextArea
                        rows={8}
                        placeholder="Additional Information"
                        style={inputStyle}
                    />
                </Form.Item>

                {/* Buttons */}
                <Form.Item>
                <div className={styles.actionContainer}>
                    <button className={styles.contactButton}>Submit Form</button>
                </div>
                </Form.Item>
            </Form>
        </div>
    );
};

export default SubmitForm;
