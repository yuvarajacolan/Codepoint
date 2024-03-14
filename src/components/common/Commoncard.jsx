import React from "react";
import { Avatar, Card } from "antd";
import "../common/Common.css";
const { Meta } = Card;
const Commoncard = ({ title, description, icon, backgroundColor }) => (
  <Card>
    <div className="card-container">
      <div
        className="cardflex"
        style={{
          position: "relative",
          textAlign: "center",
          backgroundColor: backgroundColor,
          borderRadius: "50%",
          width: 50,
          height: 50,
        }}
      >
        <Avatar
          src={icon}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "60%",
            height: "auto",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <p style={{ fontWeight: 600, fontSize: "14px" }}>{title}</p>
        <h2>{description}</h2>
      </div>
    </div>
  </Card>
);
export default Commoncard;
