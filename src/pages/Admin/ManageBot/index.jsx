import React, {useState} from 'react'
import { Row, Col, Button, Flex, Card, Table } from 'antd';
import "../../../components/manageBots/manageBots.css"
import { manage_actor_data, manage_bot_data } from '../../../utils/constants/Tabledata';
import SwitchToggle from '../../../components/common/CommonSwitch';
import Commontable from '../../../components/common/Commontable';
import view from "../../../assets/images/view.png";
import duo from "../../../assets/images/duo.png";
import ClonePopUp from '../../../components/common/ClonePopUp';
import { useNavigate } from 'react-router-dom';
const ManageBot = () => {

  const [isCloneModalOpen, setIsCloneModalOpen] = useState(false);

  const handleOk = () => {
    setIsCloneModalOpen(false);
  };
  const handleCancel = () => {
    setIsCloneModalOpen(false);
  };
  const navigate = useNavigate();
const handleSubmit = () => {
  navigate("/managebot/createbot") 
}
  const manage_actor_column = [
    {
      id: "slno",
      title: "SL No",
      dataIndex: "slno",
      key: "slno",
    },
    {
      id: "schoolName",
      title: "School Name",
      dataIndex: "schoolName",
      key: "schoolName",
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
        <Flex gap={"10px"} align='center'>
          <div style={{ cursor: "pointer" }}><img src={view} alt="viewIcon" /></div>
          <div onClick={() => setIsCloneModalOpen(true)} style={{ cursor: "pointer" }}><img src={duo} alt="duoIcon" /></div>
        </Flex>
      ),

    }
  ];
  
  return (
    <div>
      <Flex justify={"space-between"} align={"center"}>
        <h3 className='bot_title'>List of module</h3>
        <Button onClick={handleSubmit} type="primary" className='btncolor'>ADD</Button>
      </Flex>

      <div className='bots_table'>
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Card>
              <div className="table-container">
                <Commontable
                  columns={manage_actor_column}
                  data={manage_bot_data}
                  className="custom-table"
                />
              </div>
            </Card>
          </Col>
        </Row>
        
        <ClonePopUp title = "Do you want clone the same bot?" isModalOpen={isCloneModalOpen} handleOk={handleOk} handleCancel={handleCancel} />
      </div>
    </div>
  )
}

export default ManageBot
