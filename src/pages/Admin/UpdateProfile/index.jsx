import { Button, Card, Col, Input, Row } from "antd";
import React from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import Commontextfield from "../../../components/common/Commontextfield";
import { TextfieldDate } from "../../../utils/constants/TextfieldData";

const Updateprofile = () => {
  return (
    <>
      <Row>
        <Col span={24}>
          <Card style={{ widht: "auto" }}>
            <h2>Edit Your Details</h2>
            <Row gutter={[16, 16]}>
              {TextfieldDate.map((value, index) => (
                <Col xl={6} key={index}>
                  {value?.type !== "password" ? (
                    <Commontextfield
                      label={value.label}
                      placeholder={value.placeholder}
                    />
                  ) : (
                    <>
                      <div style={{ marginBottom: 8 }}>
                        <label>{value.label}</label>
                      </div>
                      <Input.Password
                        // size="large"
                        style={{padding:"7px 11px"}}
                        placeholder={value.placeholder}
                        iconRender={(visible) =>
                          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                      />
                    </>


                  )}


                </Col>
              ))}
            </Row>
            <Button type="primary" className="btncolor grid-top">Save</Button>

          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Updateprofile;
