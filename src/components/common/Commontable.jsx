import React from "react";
import { Space, Table, Tag } from "antd";
import { columns, data } from "../../utils/constants/Tabledata";

const Commontable = () => {
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Commontable;
