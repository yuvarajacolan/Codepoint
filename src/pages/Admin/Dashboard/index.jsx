import React from "react";
import Commonselectfield from "../../../components/common/Commonselectfield";
import { Actor, Module, School } from "../../../utils/constants/Selectdata";
import Commoncard from '../../../components/common/Commoncard'
import Chart from '../../../components/dashboard/Chart';
import "../../../components/dashboard/Dashboard.css"
import { Row, Col } from 'antd';
import { categories, seriesData } from '../../../utils/constants/ChartData';


const Dashboard = () => {
  return (
    <>
    <div>
      {/* <div>
      {Carddata.map((card, index) => (
        <Commoncard
          key={index}
          title={card.title}
          description={card.description}
          icon={card.icon}
          backgroundColor={card.backgroundColor}
        />
      ))}
    </div> */}
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
       <div style={{display:"flex",justifyContent:"flex-end",gap:"40px"}}>
       <Commonselectfield  options={School} placeholdertext="School"/>
       <Commonselectfield  options={Actor} placeholdertext="Actor"/>
       <Commonselectfield  options={Module} placeholdertext="Module"/>
       </div>
       </>
  )
}

 


export default Dashboard;
