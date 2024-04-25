import React from "react";
import { Tabs } from 'antd';
import RoomAssign from "./RoomsAssign"

const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: 'Phòng',
      children: <RoomAssign />,
    },
    {
      key: '2',
      label: 'Thanh Toán',
    },
  ];

const Transaction = () => {
    return (
        <div style={{marginLeft:"20px"}}>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange}/>
        </div>
    );
}
export default Transaction;