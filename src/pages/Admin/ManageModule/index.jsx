import React, {useState} from 'react'
import { Row, Col, Card, Table } from "antd";
import "../../../components/manageActors/manageActor.css"
import Commonselectfield from '../../../components/common/Commonselectfield'
import { School } from '../../../utils/constants/Selectdata'
import Commontable from '../../../components/common/Commontable'
import { manage_module_data } from '../../../utils/constants/Tabledata'
import CommonLabelWithSelect from '../../../components/common/CommonLabelWithSelect'
import DeletePopUp from '../../../components/common/DeletePopUp'
import SwitchToggle from '../../../components/common/CommonSwitch'
import deleteImage from "../../../assets/images/delete.png"

const ManageModule = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const manage_module_column = [
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
      id: "module",
      title: "Module",
      dataIndex: "module",
      key: "module",
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
    <div className='manage_module_container'>
      <h2>list of modules</h2>
      <div>
        <CommonLabelWithSelect width="340px" options={School} placeholdertext="School" />
      </div>
      <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <h2 className="grid-top">Active Chatbot Status</h2>
            <Card>
              <div className="table-container">
                <Commontable
                  columns={manage_module_column}
                  data={manage_module_data}
                  className="custom-table"
                />
              </div>
            </Card>
          </Col>
        </Row>
      <DeletePopUp isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} />
    </div>
  )
}

export default ManageModule
