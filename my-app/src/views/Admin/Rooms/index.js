import React, { useState, useEffect } from 'react';
import { Table, Switch, Button, Flex, Tooltip, Popconfirm, Modal } from 'antd';
import { SelectComponent } from '../../../components/Selectcomponent/SelectComponent'
import { EditOutlined, RestOutlined } from '@ant-design/icons';
import { Content } from "../../../pages/Loaiphong/AddRoom"
import { Content1 } from "../../../pages/Loaiphong/EditRoom"
import axios from 'axios';
import * as api from '../../../services/RoomService';

const Rooms = () => {
    const [data, setData] = useState([]);

    console.log("data", data);
    const [loading, setLoading] = useState(false);

    const [modal1Open, setModal1Open] = useState(false);
    const [modal2Open, setModal2Open] = useState(false);
    const { Column } = Table;
    const handleStatusChange = (record, status) => {
        const cloneData = [...data]
        const indexItem = cloneData.findIndex(item => item.id === record.id)
        cloneData[indexItem].status = status;
        setData(cloneData)
    }

    const fecthdata = async (value) => {
        const res = await api.getRoom(value);

        const decodedData = res.data.map((item) => {
            console.log("item", item);
            return {
                id: item.id,
                name: item.soPhong,
                tang: item.soTang,
                type: item.loaiPhongIdLoaiPhong.tenLoaiPhong,
                status: item.trangThai,

            }
        });

        setData(decodedData)
        console.log(decodedData)
    }
    useEffect(() => {
        fecthdata()
    }, []);

    const editRoomType = (props) => {
        console.log(props.id)
    }
    const apiDeleteRoom = 'http://localhost:8080/admin/phong/xoa/';
    const deleteRoomtype = async (props) => {
        // console.log(data)
        // const filterData = data.filter(item => item.id !== props.id);
        // setData(filterData);
        try {
            const response = axios.delete(`${apiDeleteRoom}${props.id}`);
            if (response.status === 200) {
                console.log("Room deleted successfully");
                // Reload data after successful deletion
                const res = await api.getRoom(null);

                const decodedData = res.data.map((item) => {
                    console.log("item", item);
                    return {
                        id: item.id,
                        name: item.soPhong,
                        tang: item.soTang,
                        type: item.loaiPhongIdLoaiPhong.tenLoaiPhong,
                        status: item.trangThai,

                    }
                });

                setData(decodedData)
                console.log(decodedData)
            } else {
                console.error("Failed to delete room");
            }
        } catch (error) {
            console.error("Error occurred while deleting room:", error);
        }
    }
    const apiAddRoom = 'http://localhost:8080/admin/phong/add';

    return (<>
        <h3>Phòng</h3>

        <SelectComponent onChangeData={fecthdata} />

        <Button type="primary" onClick={() => setModal1Open(true)}>
            Thêm
        </Button>
        <Modal title="Thêm phòng" open={modal1Open} onOk={() => setModal1Open(false)}
            onCancel={() => setModal1Open(false)} width={600}>
            <Content />
        </Modal>
        <>
            <Table dataSource={data} loading={loading}>
                <Column
                    title="STT"
                    dataIndex="index"
                    key="index"
                    render={(text, record, index) => <span>{index + 1}</span>}
                />
                <Column title="Tên phòng" dataIndex="name" key="name" />
                <Column title="Tầng" dataIndex="tang" key="tang" />
                <Column title="Loại Phòng" dataIndex="type" key="type" />
                <Column
                    title="Trạng thái"
                    dataIndex="status"
                    key="status"
                    render={(text, record) => (
                        <Switch
                            checked={record.status} // Assuming status is stored as string 'true' or 'false'
                            onChange={(checked) => handleStatusChange(record, checked)}
                        />
                    )}
                />
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