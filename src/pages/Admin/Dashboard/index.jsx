import React from "react";
import Commonselectfield from "../../../components/common/Commonselectfield";
import { Actor, Module, School } from "../../../utils/constants/Selectdata";

const Dashboard = () => {
  return (
    <div>
      {/* <div>
      {Carddata.map((card, index) => (
        <Commoncard
          key={index}
          title={card.title}
          description={card.description}
          icon={card.icon}
          backgroundColor={card.backgroundColor}
        />
      ))}
    </div> */}

    <div style={{display:"flex",justifyContent:"flex-end",gap:"40px"}}>
    <Commonselectfield  options={School} placeholdertext="School"/>
    <Commonselectfield  options={Actor} placeholdertext="Actor"/>
    <Commonselectfield  options={Module} placeholdertext="Module"/>
    </div>
    </div>
  );
};

export default Dashboard;
