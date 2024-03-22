import React, { useState } from "react";
import { Tabs } from 'antd';
import Children from  "../../../pages/Taikhoan/quanli"

const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: 'Quản Lí',
      children: () => <Children /> ,
    },
    {
      key: '2',
      label: 'Khách hàng',
      children: 'Content of Tab Pane 2',
    },
  ];

const Accounts = () => {
    return (
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        );
}

export default Accounts;