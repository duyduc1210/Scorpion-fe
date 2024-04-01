import React, { useState, useEffect } from 'react';
import { Table, Switch, Button, Flex, Tooltip, Popconfirm, Modal, Tag } from 'antd'
import { EditOutlined, RestOutlined } from '@ant-design/icons';
import {Detail} from  '../Danhsachdatphong/Detail'
export const Children2 = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modal1Open, setModal1Open] = useState(false);

    const { Column } = Table;
   
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

                            <Tooltip title={"Thông tin" }>
                            <Button type="text" onClick={() => setModal1Open(true)}>
                                {<EditOutlined />}
                            </Button>
                            <Modal title="Thông tin" open={modal1Open} onOk={() => setModal1Open(false)}
                                onCancel={() => setModal1Open(false)} width={1000}>
                                <Detail />
                            </Modal>

                        </Tooltip>
                    </Flex>
                </>
                )} />
            </Table>
        </>

    );
}
export default Children2;