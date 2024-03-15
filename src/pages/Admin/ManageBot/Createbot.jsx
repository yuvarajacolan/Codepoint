import { Col, Row } from 'antd'
import React from 'react'
import CommonLabelWithSelect from '../../../components/common/CommonLabelWithSelect'
import { useLocation } from 'react-router-dom'
const Createbot = () => {
  const location = useLocation()
let locationbot = location.pathname.substring(1)

console.log(locationbot,'pathhh')

  return (
    <>
    <h2>Manage Bot</h2>
    <Row gutter={24}>
      <Col span={6}>
<CommonLabelWithSelect label= "Actor"  width="340px"  />
      </Col>
    </Row>
    </>
    
  )
}

export default Createbot