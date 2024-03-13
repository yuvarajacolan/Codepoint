import { Tag } from "antd";

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
