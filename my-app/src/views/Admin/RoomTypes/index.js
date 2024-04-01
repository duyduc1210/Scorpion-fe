import React, { useState, useEffect } from 'react';
import { Table, Switch, Button, Flex, Tooltip, Popconfirm, Modal } from 'antd';
import { EditOutlined, RestOutlined } from '@ant-design/icons';
import { Content } from "../../../pages/Quanlyloaiphong/ModalRoom"
import { Content1 } from "../../../pages/Quanlyloaiphong/EditRoom"
import axios from "axios";
const RoomTypes = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const [modal1Open, setModal1Open] = useState(false);
    const [modal2Open, setModal2Open] = useState(false);


    const { Column } = Table;
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };
    // const data2 = [
    //     {
    //         id: 1,
    //         name: "Phòng VIP",
    //         price: 1000000,
    //         status: true
    //     },
    //     {
    //         id: 2,
    //         name: "Phòng PIV",
    //         price: 5000000,
    //         status: false
    //     },
    //     {
    //         id: 3,
    //         name: "Phòng LỎ",
    //         price: 800000,
    //         status: true
    //     }
    // ]
    const apiString = 'http://localhost:8080/admin/phong/hien-thi';
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(apiString);
                const decodedData = response.data.map((item) => ({
                    // id: decodeURIComponent(item.id),
                    name: decodeURIComponent(item.loaiPhongIdLoaiPhong.tenLoaiPhong),
                    price: decodeURIComponent(item.loaiPhongIdLoaiPhong.giaTien),
                    status: decodeURIComponent(item.trangThai),
                }));
                setData(decodedData);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false); // Ensure loading state is set to false even on errors
            }
        };

        getData();
    }, []);

    const editRoomType = (props) => {
        console.log(props.id)
    }

    const deleteRoomtype = (props) => {
        console.log(data)
        const filterData = data.filter(item => item.id !== props.id);
        setData(filterData);
    }

    const cancel = () => {

    }


    return (<>
        <div>
            <h3>Loại Phòng</h3>
            <i class="fa-solid fa-dollar-sign"></i>
            <input type="text" placeholder="Giá tiền" />
            <i class="fa-solid fa-filter"></i>
            <input type="text" placeholder="Số người" />
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search" />
        </div>
        <Button type="primary" onClick={() => setModal1Open(true)}>
            Thêm
        </Button>
        <Modal title="Thêm loại phòng" open={modal1Open} onOk={() => setModal1Open(false)}
            onCancel={() => setModal1Open(false)} width={800}>
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
                <Column title="Tên loại phòng" dataIndex="name" key="name" />
                <Column title="Giá" dataIndex="price" key="price" />
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
                                    onCancel={() => setModal2Open(false)} width={800}>
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

export default RoomTypes;