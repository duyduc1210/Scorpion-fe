import React, { useState, useEffect } from 'react';
import { Table, Switch, Button, Flex, Tooltip, Popconfirm, Modal } from 'antd';
import { SelectComponent } from '../../../components/Selectcomponent/SelectComponent'
import { EditOutlined, RestOutlined } from '@ant-design/icons';
import { Content } from "../../../pages/Loaiphong/AddRoom"
import { Content1 } from "../../../pages/Loaiphong/EditRoom"
import axios from 'axios';

const Rooms = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const [modal1Open, setModal1Open] = useState(false);
    const [modal2Open, setModal2Open] = useState(false);
    const { Column } = Table;
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };
    const data2 = [
        {
            id: 1,
            name: "Phòng 101",
            tang: "1",
            type: "Phòng VIP",
            status: true
        },
        {
            id: 2,
            name: "Phòng PIV",
            type: 5000000,
            status: false
        },
        {
            id: 3,
            name: "Phòng LỎ",
            type: 800000,
            status: true
        }
    ]

    
    useEffect(() => {
        const getData = async () => {
            setData(data2)
        }
        getData();
    }, [])

    const editRoomType = (props) => {
        console.log(props.id)
    }

    const deleteRoomtype = (props) => {
        console.log(data)
        const filterData = data.filter(item => item.id !== props.id);
        setData(filterData);
    }
    return (<>
     <h3>Phòng</h3>
     <SelectComponent />
     <Button type="primary" onClick={() => setModal1Open(true)}>
            Thêm
        </Button>
        <Modal title="Thêm phòng" open={modal1Open} onOk={() => setModal1Open(false)}
            onCancel={() => setModal1Open(false)} width={600}>
            <Content />
        </Modal>
     <>
            <Table dataSource={data} loading={loading}>
                <Column title="STT" dataIndex="id" key="id" />
                <Column title="Tên phòng" dataIndex="name" key="name" />
                <Column title="Tầng" dataIndex="tang" key="tang" />
                <Column title="Loại Phòng" dataIndex="type" key="type" />
                <Column title="Trạng thái" key="status" render={(props) => (
                    <><Switch checked={props.status} onChange={onChange} /></>
                )} />
                <Column title="Thao tác" render={(props) => (
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
     </>);
}

export default Rooms;