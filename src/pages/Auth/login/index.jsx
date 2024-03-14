import React, { useEffect, useState } from "react";
import logoimg from "../../../assets/images/logo.png";
import "./loginStyle.css";
import mainimg from "../../../assets/images/side-img.png";
import bigimg from "../../../assets/images/voi 1.png";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Layout, Row, Col, Card, Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

const Loginindex = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
const navigate = useNavigate()

const handleLogin = () => {
  navigate("/dashboard")
}

  return (
    <>
      <div className="corner-img">
        <img src={mainimg} className="img-adjusment" alt="corner-img" />
      </div>
      <div className="logoplacing">
        <img src={logoimg} alt="logo" />
      </div>
      <div>
        <Row justify="space-evenly" align="middle">
          <Col className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
            <Row>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud.
              </p>
              <img src={bigimg} alt="" className="img-adjusment" />
            </Row>
          </Col>
          <Col className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
            <Card
              className="cardbox"
              title={
                <span
                  style={{
                    fontWeight: 900,
                    fontSize: "18px",
                    borderBottom: "0px",
                  }}
                >
                  Sign in
                </span>
              }
              bordered={false}
              style={{
                width: "100%",
                maxWidth: 400,
                margin: "auto",
              }}
              headStyle={{ borderBottom: 0 }}
            >
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Email or Phone number!",
                    },
                  ]}
                >
                  <Input
                    className="box-shadow"
                    size="large"
                    placeholder="Enter Email or Phone number"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Password!",
                    },
                  ]}
                >
                  <Input.Password
                    size="large"
                    className="box-shadow"
                    placeholder="password"
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    block
                    htmlType="submit"
                    className="login-form-button btncolor"
                    size="large"
                    onClick={handleLogin}
                  >
                    Sign in
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
        <Card bordered={false} className="footer">
          <Row justify="space-evenly" align="middle">
            Colan Infotech &copy;2024
          </Row>
        </Card>
      </div>
    </>
  );
};
export default Loginindex;
