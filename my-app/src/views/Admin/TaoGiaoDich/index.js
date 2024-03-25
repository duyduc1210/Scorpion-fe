import React, { useState, useEffect } from 'react';
import { Table, Switch, Button, Flex, Tooltip, Popconfirm, Modal } from 'antd';
import { EditOutlined, RestOutlined } from '@ant-design/icons';
import { DatePicker, Space } from 'antd';
import { InputNumber } from 'antd';

const Createtransaction = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const { Column } = Table;
    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };
    const onChange1 = (value) => {
        console.log('changed', value);
      };
      

    const data2 = [

        {
            id: "Đơn",
            name: "4/4 phòng còn lại",
            text: " ",
            price: "75,000 VND",
            khach: "2",
        }
    ]
    useEffect(() => {
        const getData = async () => {
            setData(data2)
        }

        getData();
    }, [])

    return (<>
        <div><i class="fa-solid fa-house"></i>
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Tìm tên phòng& tên khách đặt" />
        </div>
        <div style={{
            display: "flex-colum", flexdirection: " row-reverse",
            justifycontent: "flex-end"
        }}>
            <DatePicker onChange={onChange} placeholder='Ngày bắt đầu' />
            <DatePicker onChange={onChange} placeholder="ngày kết thúc" />
            <InputNumber min={1} max={100} defaultValue={3} onChange={onChange1} />
            <Button type="primary" >
                Tìm kiếm
            </Button>

        </div>
        <>
            <Table dataSource={data} loading={loading}>
                <Column title="Loại Phòng" dataIndex="id" key="id" />
                <Column title="Phòng" dataIndex="name" key="name" />
                <Column title="Text" dataIndex="text" key="text" />

                <Column title="Giá Phòng" dataIndex="price" key="price" />
                <Column title="Khách" dataIndex="khach" key="khach" />


            </Table>
        </>
    </>
    );
}
export default Createtransaction;