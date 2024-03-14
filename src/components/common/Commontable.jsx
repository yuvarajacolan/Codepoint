import React from "react";
import { Space, Table, Tag } from "antd";

const Commontable = ({ columns, data }) => {
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};



export default Commontable;
