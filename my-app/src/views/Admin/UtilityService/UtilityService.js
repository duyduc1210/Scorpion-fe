
import { Tabs } from 'antd';
import React from 'react';
import ServiceCategory from '../../../pages/DichVu/ServiceCategory';
import Service from '../../../pages/DichVu/Service';
const onChange = (key) => {
    console.log(key);
};
const tabsUtilityService = [
    {
        key: '1',
        label: 'Loại Dịch Vụ',
        children: <ServiceCategory/>,
    },
    {
        key: '2',
        label: 'Dịch Vụ',
        children: <Service/>,
    },
];

const UtilityService = () => {
    return (
        <Tabs defaultActiveKey="1" items={tabsUtilityService} onChange={onChange}/>
    );
};

export default UtilityService;