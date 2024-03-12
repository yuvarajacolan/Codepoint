import React from 'react'
import Commoncard from '../../../components/common/Commoncard'
import Chart from '../../../components/dashboard/Chart';
import "../../../components/dashboard/Dashboard.css"
import { Row, Col } from 'antd';
import { categories, seriesData } from '../../../utils/constants/ChartData';


const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <Commoncard />

      <Row>
        <Col span={16}>
          <div className="chart_box">
            <Chart categories={categories} seriesData={seriesData} />
          </div>

        </Col>
      </Row>
    </div>
  )
}

export default Dashboard
