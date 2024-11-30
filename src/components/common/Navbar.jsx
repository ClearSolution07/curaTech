import React, { useState } from "react";
import {
  Row,
  Col,
  Menu,
  Typography,
  Space,
  Drawer,
  Button,
  Divider,
} from "antd";
import {
  TwitterOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
  MenuOutlined,
  DownOutlined,
} from "@ant-design/icons";
import logoImage from "../../assets/logo-construction.png";

const { Text } = Typography;

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const menuItems = [
    { label: "Home", key: "home" },
    {
      label: (
        <span>
          Services{" "}
          <DownOutlined style={{ fontSize: "10px", marginLeft: "5px" }} />
        </span>
      ),
      key: "services",
      children: [
        { label: "Service 1", key: "service1" },
        { label: "Service 2", key: "service2" },
      ],
    },
    {
      label: (
        <span>
          Pages <DownOutlined style={{ fontSize: "10px", marginLeft: "5px" }} />
        </span>
      ),
      key: "pages",
      children: [
        { label: "Page 1", key: "page1" },
        { label: "Page 2", key: "page2" },
      ],
    },
    {
      label: (
        <span>
          News <DownOutlined style={{ fontSize: "10px", marginLeft: "5px" }} />
        </span>
      ),
      key: "news",
      children: [
        { label: "Latest News", key: "latestNews" },
        { label: "Popular News", key: "popularNews" },
      ],
    },
    { label: "Contacts", key: "contacts" },
  ];

  return (
    <div
      style={{
        padding: "10px",
        marginLeft: "200px",
        marginRight: "200px",
        borderBottom: "1px solid #e8e8e8",
      }}
    >
      <Row justify="space-between" align="middle">
        <Col>
          <Space size="large">
            <Text strong style={{ fontSize: "12px", color: "#555" }}>
              SUPPORT
            </Text>
            <Text strong style={{ fontSize: "12px", color: "#555" }}>
              PARTNERS
            </Text>
            <Text strong style={{ fontSize: "12px", color: "#555" }}>
              CAREERS
            </Text>
          </Space>
        </Col>
        <Col>
          <Space size="middle">
            <TwitterOutlined style={{ fontSize: "24px", color: "#00215b" }} />
            <FacebookOutlined style={{ fontSize: "24px", color: "#00215b" }} />
            <LinkedinOutlined style={{ fontSize: "24px", color: "#00215b" }} />
            <YoutubeOutlined style={{ fontSize: "24px", color: "#00215b" }} />
          </Space>
        </Col>
      </Row>
      <Divider style={{ margin: "10px 0px", borderColor: "#ddd" }} />

      <Row justify="space-between" align="middle">
        <Col xs={12} md={6}>
          <img
            src={logoImage}
            alt="Dustro Logo"
            style={{ width: "80px", height: "30px" }}
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
          >
            {menuItems.map((item) =>
              item.children ? (
                <Menu.SubMenu key={item.key} title={item.label}>
                  {item.children.map((child) => (
                    <Menu.Item key={child.key}>{child.label}</Menu.Item>
                  ))}
                </Menu.SubMenu>
              ) : (
                <Menu.Item key={item.key}>{item.label}</Menu.Item>
              )
            )}
          </Menu>
        </Col>
        <Col xs={12} md={0} style={{ textAlign: "right" }}>
          <Button
            type="text"
            icon={
              <MenuOutlined style={{ fontSize: "24px", color: "#00215b" }} />
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
                    <Menu.Item key={child.key}>{child.label}</Menu.Item>
                  ))}
                </Menu.SubMenu>
              ) : (
                <Menu.Item key={item.key}>{item.label}</Menu.Item>
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
