import React, { useState } from "react";
import { Table } from 'antd'
import { SelectComponent } from '../../components/Selectcomponent/SelectComponent'
import { Divider } from 'antd';
import { Input } from 'antd';

const { TextArea } = Input;
// const columns = [
//     {
//         title: 'Ten phong',
//         dataIndex: 'Ten phong',
//         key: 'Ten phong',
//         render: (text) => <a>{text}</a>,
//       },
//       {
//         title: 'Chon',
//         key: 'Chon',
//         render: () => 
//       },
// ]
const columns = [
    {
        title: 'Tên Phòng',
        dataIndex: 'phong',
        render: (text) => <a>{text}</a>,
    },]
    const columnss = [
        {
            title: 'Tiện ích',
            dataIndex: 'tienich',
            render: (text) => <a>{text}</a>,
        },]
const data = [
    {
        key: '1',
        phong: 'Phòng 101',
    },
    {
        key: '2',
        phong: 'Phòng 102',
    },
    {
        key: '3',
        phong: 'Phòng 103',
    },
];
const datas = [
    {
        key: '1',
        tienich: 'tv',
    },
    {
        key: '2',
        tienich: 'wifi',
    },
    {
        key: '3',
        tienich: 'Spa',
    },
];
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  
};
export const Content1 = () => {
    return (
        <div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div>
            <div style={{justifyContent: "none" }}>
                <p>Tên Loại phòng</p>
                <input type="text" />
                </div>
                <SelectComponent />
               
                <Table
                    rowSelection={{
                        type: rowSelection,
                    }}
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                />
                <input type="text" />
                <input type="text" />   
            </div>

            <div>
                <p>Hướng nhìn</p>
                <TextArea rows={2} style={{ width: 339 }} />
                <Table 
                    rowSelection={{
                        type: rowSelection,
                    }}
                    columns={columnss}
                    dataSource={datas}
                    pagination={false}
                />
                <input type="text" />  
            </div>
            
        </div>
        <TextArea rows={2} style={{ width: 520, marginleft: "20px"}} />
        </div>
    )
}

export default Content1