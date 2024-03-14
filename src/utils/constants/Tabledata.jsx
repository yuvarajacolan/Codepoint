import { Tag } from "antd";
import SwitchToggle from "../../components/common/CommonSwitch";
import deleteImage from "../../assets/images/delete.png"

export const columns = [
  {
    id: "slno",
    title: "SL No",
    dataIndex: "slno",
    key: "slno",
  },
  {
    id: "schoolname",
    title: "School Name",
    dataIndex: "schoolname",
    key: "schoolname",
  },
  {
    id: "chatbot",
    title: "Chatbot",
    dataIndex: "chatbot",
    key: "chatbot",
  },
  {
    title: "Modules",
    dataIndex: "modules",
    key: "modules",
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
    render: (_, { tags }) => (
      <Tag color={tags == "Active" ? "green" : "red"} key={tags}>
        {tags}
      </Tag>
    ),
  },
];

export const data = [
  {
    slno: "01",
    schoolname: "John Brown",
    chatbot: "Echobot",
    modules: "Attendance",
    actors: "Staff",
    tags: "Active",
  },
  {
    slno: "02",
    schoolname: "Cns Public Hr Sec School",
    chatbot: "Buddy",
    modules: "FEE",
    actors: "Management",
    tags: "Inactive",
  },
  {
    slno: "03",
    schoolname: "M B International School",
    chatbot: "Champ",
    modules: "Remainder",
    actors: "Teacher",
    tags: "Active",
  },
  {
    slno: "04",
    schoolname: "Global Public School",
    chatbot: "Amigo",
    modules: "Project / Homework",
    actors: "Student",
    tags: "Inactive",
  },
];


export const manage_actor_column = [
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
      <div style={{ cursor: "pointer" }}><img src={deleteImage} alt="deleteIcon" /></div>
    ),

  }
];

export const manage_actor_data = [
  {
    slno: "01",
    chatbot: "Echobot",
    actors: "Staff",
    status: true,
  },
  {
    slno: "02",
    chatbot: "Buddy",
    actors: "Management",
    status: false,
  },
  {
    slno: "03",
    chatbot: "Champ",
    actors: "Teacher",
    status: true,
  },
  {
    slno: "04",
    chatbot: "Amigo",
    actors: "Student",
    status: false,
  },


]


export const manage_module_column = [
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
      <div style={{ cursor: "pointer" }}><img src={deleteImage} alt="deleteIcon" /></div>
    ),

  }
];

export const manage_module_data = [
  {
    slno: "01",
    chatbot: "Echobot",
    module: "Attandance",
    status: true,
  },
  {
    slno: "02",
    chatbot: "Buddy",
    module: "Fees",
    status: false,
  },
  {
    slno: "03",
    chatbot: "Champ",
    module: "Remainder",
    status: true,
  },
  {
    slno: "04",
    chatbot: "Amigo",
    module: "Project",
    status: false,
  },


]


export const manage_bot_data = [
  {
    slno: "01",
    schoolName:"Central Sr Sec School",
    chatbot: "Echobot",
    module: "Attandance",
    actors:"Staff",
    status: true,
  },
  {
    slno: "02",
    schoolName:"Cns Public Hr Sec School",
    chatbot: "Buddy",
    module: "Fees",
    actors:"Management",
    status: false,
  },
  {
    slno: "03",
    schoolName:"M B Internation School",
    chatbot: "Champ",
    module: "Remainder",
    actors:"Teacher",
    status: true,
  },
  {
    slno: "04",
    schoolName:"Glopal public School",
    chatbot: "Amigo",
    module: "Project",
    actors:"Student",
    status: false,
  },


]