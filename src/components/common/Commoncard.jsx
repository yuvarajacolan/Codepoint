import React from "react";
import { Avatar, Card } from "antd";
import "../common/Common.css";
const { Meta } = Card;
const Commoncard = ({ title, description, icon, backgroundColor }) => (
 
  // <Card>
  //   <div className="card-container">
  //     <div
  //       className="cardflex"
  //       style={{
  //         position: "relative",
  //         textAlign: "center",
  //         backgroundColor: backgroundColor,
  //         borderRadius: "50%",
  //         width: 50,
  //         height: 50,
  //       }}
  //     >
  //       <Avatar
  //         src={icon}
  //         style={{
  //           position: "absolute",
  //           top: "50%",
  //           left: "50%",
  //           transform: "translate(-50%, -50%)",
  //           width: "60%",
  //           height: "auto",
  //         }}
  //       />
  //     </div>
  //     <div
  //       style={{
  //         display: "flex",
  //         flexDirection: "column",
  //         justifyContent: "space-evenly",
  //       }}
  //     >
  //       <p style={{ fontWeight: 600, fontSize: "14px" }}>{title}</p>
  //       <h2>{description}</h2>
  //     </div>
  //   </div>
  // </Card>

  <Card>
    <div className="hstack">
      <div className="p-2">
        <p class="fs-6 lh-1 tclr">{title}</p>
        <strong class="fs-5">{description}</strong>
      </div>
      <div>
        <div
          class="p-2 ms-auto rounded-circle"
          style={{ backgroundColor: backgroundColor }}
        >
          <img className="img-size" src={icon} alt = "icon"></img>
        </div>
      </div>
    </div>
  </Card>
);
export default Commoncard;
