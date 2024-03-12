import { Row, Col, Select } from 'antd';

const Commonselectfield = ({label, value, options}) => {

  return (
    <Row>
    <Col span={4}>
      <div style={{ marginBottom: 8 }}>
        <label>{label}</label>
      </div>
      <Select style={{ width: '100%' }} value={value}>
          {options.map((option) => (
            <Select.Option key={option.value} value={option.value}>
              {option.label}
            </Select.Option>
          ))}
        </Select>
    </Col>
  </Row>
  );
};

export default Commonselectfield;