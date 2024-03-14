import { Input, Row, Col } from 'antd';
const Commontextfield = ({label,placeholder}) => {
  return (
    <Row>
    <Col span={24}>
      <div style={{ marginBottom: 8 }}>
        <label>{label}</label>
      </div>
      <Input size="large" placeholder={placeholder} />
    </Col>
  </Row>
  );
};
export default Commontextfield;