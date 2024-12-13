import React, { useState } from "react";
import { Row, Col, Menu, Drawer, Button, Divider } from "antd";
import { MenuOutlined, DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import logoImage from "../../assets/Cura Tech Enginnering WithoutB.png";

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleDrawerOpen = () => {
        setIsDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
    };

    const menuItems = [
        { label: <Link to="/">Home</Link>, key: "home" },
        {
            label: (
                <span>
                    Services{" "}
                    <DownOutlined
                        style={{ fontSize: "10px", marginLeft: "5px" }}
                    />
                </span>
            ),
            key: "services",
            children: [
                {
                    label: <Link to="/single-service">Our Service</Link>,
                    key: "singleService",
                },
                {
                    label: <Link to="/service-archive">Service Archive</Link>,
                    key: "serviceArchive",
                },
            ],
        },
        {
            label: (
                <span>
                    Pages{" "}
                    <DownOutlined
                        style={{ fontSize: "10px", marginLeft: "5px" }}
                    />
                </span>
            ),
            key: "pages",
            children: [
                {
                    label: <Link to="/single-project">Single Project</Link>,
                    key: "singleProject",
                },
                {
                    label: <Link to="/portfolio">Portfolio</Link>,
                    key: "portfolio",
                },
            ],
        },
        { label: <Link to="/about-us">About Us</Link>, key: "aboutUs" },
        { label: <Link to="/contact">Contact Us</Link>, key: "contacts" },
    ];

    return (
        <div
            style={{
                position: "sticky",
                top: 0,
                zIndex: 1000,
                background: "#fff",
                padding: "8px",
                paddingLeft: "200px",
                paddingRight: "200px",
                borderBottom: "1px solid #e8e8e8",
            }}
        >
            {/* Inline Styles */}
            <style>
                {`
                /* Base styles for menu items */
                .navbar-menu .ant-menu-item,
                .navbar-menu .ant-menu-submenu-title {
                    color: #001d52 !important; /* Ensure the default color */
                    font-weight: bold;
                    transition: color 0.3s ease, transform 0.3s ease;
                }

                /* Hover styles */
                .navbar-menu .ant-menu-item:hover,
                .navbar-menu .ant-menu-submenu-title:hover,
                .navbar-menu .ant-menu-item a:hover {
                    color: #ba1c1c !important; /* Ensure hover color applies */
                }

                /* Link hover fix */
                .navbar-menu .ant-menu-item a {
                    color: inherit; /* Inherit color from parent for consistency */
                }
                `}
            </style>
            <Row justify="space-between" align="middle">
                <Col xs={12} md={6}>
                    <img
                        src={logoImage}
                        alt="Dustro Logo"
                        style={{ width: "60px" }}
                    />
                </Col>
                <Col xs={0} md={18}>
                    <Menu
                        mode="horizontal"
                        style={{
                            borderBottom: "none",
                            justifyContent: "right",
                            marginRight: "-16px",
                        }}
                        className="navbar-menu"
                    >
                        {menuItems.map((item) =>
                            item.children ? (
                                <Menu.SubMenu
                                    key={item.key}
                                    title={item.label}
                                >
                                    {item.children.map((child) => (
                                        <Menu.Item key={child.key}>
                                            {child.label}
                                        </Menu.Item>
                                    ))}
                                </Menu.SubMenu>
                            ) : (
                                <Menu.Item key={item.key}>
                                    {item.label}
                                </Menu.Item>
                            )
                        )}
                    </Menu>
                </Col>
                <Col xs={12} md={0} style={{ textAlign: "right" }}>
                    <Button
                        type="text"
                        icon={
                            <MenuOutlined
                                style={{ fontSize: "24px", color: "#00215b" }}
                            />
                        }
                        onClick={handleDrawerOpen}
                    />
                </Col>
            </Row>

            <Drawer
                title="Menu"
                placement="right"
                onClose={handleDrawerClose}
                open={isDrawerOpen}
            >
                <Menu
                    mode="vertical"
                    style={{
                        borderRight: "none",
                    }}
                >
                    {menuItems.map((item, index) => (
                        <React.Fragment key={item.key}>
                            {item.children ? (
                                <Menu.SubMenu
                                    key={item.key}
                                    title={item.label}
                                    popupClassName="custom-menu-arrow"
                                >
                                    {item.children.map((child) => (
                                        <Menu.Item key={child.key}>
                                            {child.label}
                                        </Menu.Item>
                                    ))}
                                </Menu.SubMenu>
                            ) : (
                                <Menu.Item key={item.key}>
                                    {item.label}
                                </Menu.Item>
                            )}
                            {index < menuItems.length - 1 && <Divider />}
                        </React.Fragment>
                    ))}
                </Menu>
            </Drawer>
        </div>
    );
};

export default Navbar;
