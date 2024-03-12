import React, { useState } from "react";
import logoimg from "../../assets/images/logo.png";
import "./style.css";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, Button, theme, Row, Typography, Flex } from "antd";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { menuItems } from "../../utils/constants/Menuitems";
import NotificationBell from "../../assets/images/notificationBell.png";
import Profile from "../../assets/images/Profile.png";
const { Title } = Typography;
const { Header, Sider, Content } = Layout;
const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const currentMenuItem = menuItems.find((item) => item.to === location.pathname);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <img src={logoimg} className="logosetup" alt="logo" />
        <Menu mode="inline" defaultSelectedKeys={["1"]}>
          {menuItems.map((item) => (
            <Menu.Item
              key={item.key}
              icon={item.icon}
              onClick={() => handleNavigation(item.to)}
            >
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: "0",
            background: colorBgContainer,
            height: "100px"
          }}
        >
          <div className="header_section flex-container">
            <div className="flex-container">
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                }}
              />
              <h3 className="router_name">{currentMenuItem && currentMenuItem.label}</h3>
            </div>
            <div className="flex-container header_right_section">
              <div className="notification_bell">
                <img src={NotificationBell} alt="notification_bell" />
              </div>
              <div className="flex-container">
                <img src={Profile} alt="profile" />
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: "99vh",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default Sidebar;
