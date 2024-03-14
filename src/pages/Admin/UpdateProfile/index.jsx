import { Button, Card, Col, Row } from "antd";
import React from "react";
import Commontextfield from "../../../components/common/Commontextfield";
import { TextfieldDate } from "../../../utils/constants/TextfieldData";

const Updateprofile = () => {
  return (
    <>
      <Row>
        <Col span={24}>
          <Card style={{ widht: "auto" }}>
            <h2>Edit Your Details</h2>
            <Row gutter={[16,16]}>
              {TextfieldDate.map((value, index) => (
                <Col xl={6}>
                  <Commontextfield
                    key={index}
                    label={value.label}
                    placeholder={value.placeholder}
                  />
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
