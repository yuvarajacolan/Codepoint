import { Col, Row } from "antd";
import React from "react";
import CommonLabelWithSelect from "../../../components/common/CommonLabelWithSelect";
import { Actor, Module, School } from "../../../utils/constants/Selectdata";
import Reactflow from "../Reactflow/Reactflow";
const Createbot = () => {
  return (
    <>
      <h2>Create Bot</h2>
      <Row  gutter={24} style = {{marginTop:"20px"}}>
        <Col span={5}>
          <CommonLabelWithSelect
            options={Actor}
            placeholdertext="Student"
            label="Actor"
            
          />
        </Col>
        <Col span={5}>
          <CommonLabelWithSelect
            options={Module}
            placeholdertext="Homework"
            label="Module"
            
          />
        </Col>
        <Col span={5}>
          <CommonLabelWithSelect
            options={School}
            placeholdertext="International Multischool"
            label="School"
            
          />
        </Col>
      </Row>
      <h2 style={{marginTop:"40px"}}>Flow of Q&A</h2>
      <div style={{width:'auto',height:"500px"}}>
        <Reactflow />
        </div>
    </>
  );
};

export default Createbot;
