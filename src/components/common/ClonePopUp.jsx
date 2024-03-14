import React from 'react'
import { Button, Col, Modal, Row } from 'antd';
import Commontextfield from './Commontextfield';

function ClonePopUp({ isModalOpen, handleOk, handleCancel, title }) {
    return (
        <Modal centered title={title} okText="Confirm" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Row gutter={[16, 16]} style={{ padding: "20px 0" }}>
                <Col className="gutter-row" span={12}>
                    <Commontextfield label={"School Name"}/>
                </Col>
                <Col className="gutter-row" span={12}>
                    <Commontextfield label={"Chatbot"} />
                </Col>
                <Col className="gutter-row" span={12}>
                    <Commontextfield label={"Module"} />
                </Col>
                <Col className="gutter-row" span={12}>
                    <Commontextfield label={"Actor"} />
                </Col>
            </Row>
        </Modal>
    )
}

export default ClonePopUp
