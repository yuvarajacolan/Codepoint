import React, { useState } from "react";
import logoimg from "../../assets/images/logo.png";
import "./style.css";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Typography, Dropdown } from "antd";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { menuItems } from "../../utils/constants/Menuitems";
import Profile from "../../assets/images/Profile.png";
import cpLogo from "../../assets/images/cp2.png"
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

  const currentMenuItem = menuItems.find(
    (item) => item.to === location.pathname
  );
  const handleMenuClick = (e) => {
    console.log(e, "hhhhhh");
    if (e.key === "1") {
      navigate("/updateprofile");
    } else if (e.key === "2") {
      navigate("/");
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">
        {" "}
        <UserOutlined /> Update Profile
      </Menu.Item>
      <Menu.Item key="2">
        {" "}
        <LogoutOutlined /> Log Out
      </Menu.Item>
    </Menu>
  );
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <img
          style={{ borderRight: "1px solid #E6EFF5", height:"63px", padding:!collapsed ? "0px": "10px" }}
          src={!collapsed ?logoimg : cpLogo}
          className="logosetup"
          alt="logo"
        />
        <Menu mode="inline" defaultSelectedKeys={[currentMenuItem?.key]}>
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
      {/* <Sider trigger={null} collapsible collapsed={collapsed}>
        <img style={{borderRight:"1px solid #E6EFF5"}} src={logoimg} className="logosetup" alt="logo" />
        <Menu mode="inline" defaultSelectedKeys={[currentMenuItem?.key]}>
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
      </Sider> */}
      <Layout>
        <Header
          style={{
            padding: "0",
            background: colorBgContainer,
            height: "100px",
          }}
        >
          <div className="header_section flex-container">
            <div className="flex-container">
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                className="collapsedButton"
                style={{
                  fontSize: "16px",
                }}
              />
              <h3 className="router_name">
                {currentMenuItem && currentMenuItem.label}
              </h3>
            </div>
            <div className="flex-container header_right_section">
              <div className="flex-container">
                <Dropdown overlay={menu}>
                  <img src={Profile} alt="profile" />
                </Dropdown>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            // margin: "24px 16px",
            padding: "24px 34px",
            minHeight: "89.5vh",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            backgroundColor: "#F7F7F9",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default Sidebar;
