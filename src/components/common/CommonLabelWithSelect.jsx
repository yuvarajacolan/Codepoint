import React from 'react'
import { Row, Col, Select } from 'antd';

function CommonLabelWithSelect({ label, value, options, placeholdertext, width }) {
    return (
        <>
            
            <Row>
                <Col span={24} style={{ height: "50px" }}>
                    <div style={{ marginBottom: 8 }}>
                        <label>{label}</label>
                    </div>
                    <Select style={{ width: '100%' }} value={value} placeholder={placeholdertext}>
                        {options?.map((option) => (
                            <Select.Option key={option.value} value={option.value}>
                                {option.label}
                            </Select.Option>
                        ))}
                    </Select>
                </Col>
            </Row>
        </>

    );
}

export default CommonLabelWithSelect
