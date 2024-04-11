import React, { useState } from "react";
import { Tabs } from 'antd';
import Children3 from "../../../pages/Thongtinkhacho/thongtin";
const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: 'Tất cả',
      children: <Children3/>,
    },
    {
      key: '2',
      label: 'Khách đã ở',
      
    },
    {
      key: '3',
      label: 'lịch sử',
      
    },
  ];
const Guestinformation = () => {
    return (<div>
        <i class="fa-solid fa-house"></i>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
        );
}
export default Guestinformation;