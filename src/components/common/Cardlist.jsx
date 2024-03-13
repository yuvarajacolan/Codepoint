import React from 'react';
import { Avatar, Card } from 'antd';
import '../common/Common.css'
const { Meta } = Card;
const Cardlist = ({title,description,icon,backgroundColor}) => (
    <div
    style={{
      width: 300,
    }}
  >
    <div className='card-container'>
    <div className='cardflex'
      style={{
        position: 'relative',
        textAlign: 'center',
        backgroundColor: backgroundColor,
        borderRadius: '50%',
        width: 50,
        height: 50,
      }}
    >
      <Avatar
        src={icon}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60%',
          height: 'auto',
        }}
      />
    </div>
    <Meta className='cardflex'
        title={
          <span style={{ fontWeight: 400 }}>
           {title}
          </span>
        }
        description={
          <span style={{ fontWeight: 700,color:'#000' }}>
            {description}
          </span>
        }
      />
    </div>
    
  </div>
);
export default Cardlist;