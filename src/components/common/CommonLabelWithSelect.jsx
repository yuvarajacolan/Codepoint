import React from 'react'
import { Row, Col, Select } from 'antd';

function CommonLabelWithSelect({ label, value, options, placeholdertext, width }) {
    return (
        <>
            <h5 className='school_name_label'>school name</h5>
            <Row>
                <Col style={{ width: width, height: "50px" }}>
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
