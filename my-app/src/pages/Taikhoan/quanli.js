import React, { useState, useEffect } from 'react';
import { Table, Button, Flex, Tooltip, Popconfirm, Modal } from 'antd'
import { EditOutlined, RestOutlined } from '@ant-design/icons';

import { Content1 } from "../../pages/Loaiphong/EditRoom"
import { Content3 } from './addcontact';

export const Children = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const [modal1Open, setModal1Open] = useState(false);
    const [modal2Open, setModal2Open] = useState(false);
    const { Column } = Table;
    const data2 = [

        {
            id: 1,
            name: "Nguyen van A",
            pass: "123456",
            type: "admin",
        },
    ]
    useEffect(() => {
        const getData = async () => {
            setData(data2)
        }

        getData();
    }, [])
    const deleteRoomtype = (props) => {
        console.log(data)
        const filterData = data.filter(item => item.id !== props.id);
        setData(filterData);
    }
    return (
        <>
            <Button type="primary" onClick={() => setModal1Open(true)}>
                Thêm
            </Button>
            <Modal
                title="Tạo tài khoản" open={modal1Open} onOk={() => setModal1Open(false)}
                onCancel={() => setModal1Open(false)} width={600}>
                <Content3 />
            </Modal>
            <>
                <Table dataSource={data} loading={loading}>
                    <Column title="STT" dataIndex="id" key="id" />
                    <Column title="Tên tài khoản" dataIndex="name" key="name" />
                    <Column title="Mật khẩu" dataIndex="pass" key="pass" />
                    <Column title="Quyền" dataIndex="type" key="type" />

                    <Column title="Hành Động" render={(props) => (
                        <>
                            <Flex justify={"flex-start"}>
                                <Tooltip title={"Sửa"}>
                                    <Button type="text" onClick={() => setModal2Open(true)}>
                                        {<EditOutlined />}
                                    </Button>
                                    <Modal title="Sửa loại phòng" open={modal2Open} onOk={() => setModal2Open(false)}
                                        onCancel={() => setModal2Open(false)} width={600}>
                                        <Content1 />
                                    </Modal>

                                </Tooltip>
                                <Tooltip title={"Xóa"}>
                                    <Popconfirm title="Cảnh báo" description={props.name + " sẽ bị xóa, bạn muốn xác nhận không?"}
                                        onConfirm={() => deleteRoomtype(props)}
                                    >
                                        <Button type="text" icon={<RestOutlined />}></Button>
                                    </Popconfirm>
                                </Tooltip>
                            </Flex>
                        </>
                    )} />
                </Table>
            </>
        </>
    );
}
export default Children;