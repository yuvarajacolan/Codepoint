import React, { useState } from 'react'
import "../../../components/manageActors/manageActor.css"
import { Row, Col, Card, Table } from "antd";
import Commonselectfield from '../../../components/common/Commonselectfield'
import { School } from '../../../utils/constants/Selectdata'
import Commontable from '../../../components/common/Commontable'
import { manage_actor_data } from '../../../utils/constants/Tabledata'
import CommonLabelWithSelect from '../../../components/common/CommonLabelWithSelect'
import DeletePopUp from '../../../components/common/DeletePopUp'
import SwitchToggle from '../../../components/common/CommonSwitch'
import deleteImage from "../../../assets/images/delete.png"



const ManageActor = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const manage_actor_column = [
    {
      id: "slno",
      title: "SL No",
      dataIndex: "slno",
      key: "slno",
    },
    {
      id: "chatbot",
      title: "Chatbot",
      dataIndex: "chatbot",
      key: "chatbot",
    },
    {
      id: "actors",
      title: "Actors",
      dataIndex: "actors",
      key: "actors",
    },
    {
      id: "Status",
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (_, { status }) => (
        // <Tag color={tags == "Active" ? "green" : "red"} key={tags}>
        //   {tags}
        // </Tag>
        <SwitchToggle status={status} />
      ),

    },
    {

      id: "action",
      title: "Action",
      dataIndex: "actors",
      key: "actors",
      render: (_, { tags }) => (
        <div onClick={() => setIsModalOpen(true)} style={{ cursor: "pointer" }}><img src={deleteImage} alt="deleteIcon" /></div>
      ),

    }
  ];
  return (
    <div className='manage_actor_container'>
      <h2>list of actors</h2>
      <div>
        <CommonLabelWithSelect width="340px" options={School} label= "School" placeholdertext="School" />
      </div>
      <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Card style={{marginTop:"50px"}}>
              <div className="table-container">
                <Commontable
                  columns={manage_actor_column}
                  data={manage_actor_data}
                  className="custom-table"
                />
              </div>
            </Card>
          </Col>
        </Row>
      {/* <div className='manage_actor_table'>
        <Commontable columns={manage_actor_column} data={manage_actor_data} />
      </div> */}
      <DeletePopUp isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} />
    </div>

  )
}

export default ManageActor
