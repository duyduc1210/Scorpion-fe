import React, { useState } from "react";
import { Tabs } from 'antd';
import Children2 from "../../../pages/Dsdatphong/tatca";

const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: 'Tất cả',
      children: <Children2 />,
    },
    {
      key: '2',
      label: 'Thành công',
      
    },
    {
      key: '3',
      label: 'Đã hủy',
      
    },
    {
      key: '4',
      label: 'lịch sử',
      
    },
  ];
export const Reservationlist = () => {
    return (<div>
        <i class="fa-solid fa-house"></i>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
        );
}
export default Reservationlist;