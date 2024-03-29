import React, { useState, useEffect } from 'react';
import { Table, Switch, Button, Flex, Tooltip, Popconfirm, Modal, Tag } from 'antd'
import { EditOutlined, RestOutlined } from '@ant-design/icons';
export const Children2 = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);


    const { Column } = Table;
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };
    const data2 = [

        {
            id: 1,
            text: "Elizabeth Lopez",
            name: "Nguyen van A",
            phone: "0399703347",
            types: "pay"
        },
        {
            id: 2,
            text: "Elizabeth Lopez",
            name: "Nguyen van A",
            phone: "0399703347",
            types: "notpay"
        },
        {
            id: 3,
            text: "Elizabeth Lopez",
            name: "Nguyen van A",
            phone: "0399703347",
            types: "cancel"
        },
    ]
    useEffect(() => {
        const getData = async () => {
            setData(data2)
        }

        getData();
    }, [])

    return (
        <>

            <Table dataSource={data} loading={loading}>
                <Column title="STT" dataIndex="id" key="id" />
                <Column title="Mã" dataIndex="text" key="text" />
                <Column title="Họ và tên" dataIndex="name" key="name" />
                <Column title="SDT" dataIndex="phone" key="phone" />
                <Column
                    title="Trạng Thái"
                    render={(_, record) => (
                        <span>
                            <Tag color={record.types === "pay" ? 'green' : record.types === "notpay" ? 'red' : 'gray'}>
                                {record.types.toUpperCase()}
                            </Tag>
                        </span>
                    )}
                />

                <Column title="Detail" render={(props) => (
                    <>
                        <Flex justify={"flex-start"}>

                            <Tooltip title={"Sửa"}>
                                <Button type="text" >
                                    {<EditOutlined />}
                                </Button>


                            </Tooltip>
                        </Flex>
                    </>
                )} />
            </Table>
        </>

    );
}
export default Children2;