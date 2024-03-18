import React from "react";
import Commonselectfield from "../../../components/common/Commonselectfield";
import { Actor, Module, School } from "../../../utils/constants/Selectdata";
import Commoncard from "../../../components/common/Commoncard";
import Chart from "../../../components/dashboard/Chart";
import "../../../components/dashboard/Dashboard.css";
import { Row, Col, Card, Table } from "antd";
import { categories, seriesData } from "../../../utils/constants/ChartData";
import { Carddata, Cardlistdata } from "../../../utils/constants/Carddata";
import Cardlist from "../../../components/common/Cardlist";
import { columns, data } from "../../../utils/constants/Tabledata";
import Commontable from "../../../components/common/Commontable";
import "../../../components/common/Common.css";
import Reactflow from "../Reactflow/Reactflow";

const Dashboard = () => {
  return (
    <div>
      <Row gutter={[16, 16]} justify="end">
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <div style={{ marginBottom: 16 }}>
            <Commonselectfield options={School} placeholdertext="School" />
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <div style={{ marginBottom: 16 }}>
            <Commonselectfield options={Actor} placeholdertext="Actor" />
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <div style={{ marginBottom: 16 }}>
            <Commonselectfield options={Module} placeholdertext="Module" />
          </div>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        {Carddata.map((card, index) => (
          <Col xs={24} sm={24} md={12} lg={8} xl={6} key={index}>
            <Commoncard
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
              backgroundColor={card.backgroundColor}
            />
          </Col>
        ))}
      </Row>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={24} lg={12} xl={18}>
          <h2 className="grid-top">Statics of Active User</h2>
          <div className="chart_box">
            <Chart categories={categories} seriesData={seriesData} />
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={6}>
          <h2 className="grid-top">Feedback of Users</h2>
          <Card>
            {Cardlistdata.map((card, index) => (
              <Row gutter={[16, 24]}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} key={index}>
                  <Cardlist
                    key={index}
                    title={card.title}
                    description={card.description}
                    icon={card.icon}
                    backgroundColor={card.backgroundColor}
                  />
                </Col>
              </Row>
            ))}
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <h2 className="grid-top">Active Chatbot Status</h2>
          <Card>
            <div className="table-container">
              <Commontable
                columns={columns}
                data={data}
                className="custom-table"
              />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
