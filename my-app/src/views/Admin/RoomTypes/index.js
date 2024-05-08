import React, { useState, useEffect } from 'react';
import { Table, Switch, Button, Flex, Tooltip, Popconfirm, Modal } from 'antd';
import { EditOutlined, RestOutlined } from '@ant-design/icons';
import { Content } from "../../../pages/Quanlyloaiphong/ModalRoom"
import Content1 from "../../../pages/Quanlyloaiphong/EditRoom"
import * as api from '../../../services/RoomService';
import { useDispatch } from 'react-redux';
const RoomTypes = () => {
    const dispatch = useDispatch();


    const [data, setData] = useState([]);
    console.log("");
    const [loading, setLoading] = useState(false);
    const [price, setPrice] = useState();
    const [name, setName] = useState();

    const [selectedId, setSelectedId] = useState(0);
    const [modal1Open, setModal1Open] = useState(false);
    const [modal2Open, setModal2Open] = useState(false);

    const [infoRoom, setInfoRoom] = useState(
        {
            typeRoom: '',
            view: '',
            tienIch: '',
            soNguoi: '',
            dienTich: '',
            giaTien: '',
            moTa: '',
            tenPhong: '',
        }
    )


    const { Column } = Table;

    const handleStatusChange = (id, status) => {
        const updatedData = data.map(item => {
            if (item.id === id) {
                return { ...item, status: status ? 'true' : 'false' };
            }
            return item;
        });
        setData(updatedData);
    };

    const handleSearchPrice = async () => {
        try {
            const res = await api.searchPriceRoom(price);
            const decodedData = res.data.map((item) => ({
                id: decodeURIComponent(item.id),
                name: decodeURIComponent(item.tenLoaiPhong),
                price: decodeURIComponent(item.giaTien),
                status: decodeURIComponent(item.trangThai),
            }));
            setData(decodedData);
        } catch (error) {
            console.error('Error searching by price:', error);
        }
    }
    const handleSearchName = async () => {
        try {
            const res = await api.searchNameRoom(price);
            const decodedData = res.data.map((item) => ({
                id: decodeURIComponent(item.id),
                name: decodeURIComponent(item.tenLoaiPhong),
                price: decodeURIComponent(item.giaTien),
                status: decodeURIComponent(item.trangThai),
            }));
            setData(decodedData);
        } catch (error) {
            console.error('Error searching by name:', error);
        }
    }
    const fecthdata = async () => {
        const res = await api.getListRoom();
        const decodedData = res.data.map((item) => ({
            id: decodeURIComponent(item.id),
            name: decodeURIComponent(item.tenLoaiPhong),
            price: decodeURIComponent(item.giaTien),
            status: decodeURIComponent(item.trangThai),
        }));
        setData(decodedData)
    }
    useEffect(() => {
        fecthdata()
    }, []);


    const editRoomType = (id) => {
        setSelectedId(id);
        setModal2Open(true);
        console.log(id)
    }

    const handleSave = async (roomData) => {
        try {
            await api.updateRoom(roomData);
            await fecthdata();
            setModal2Open(false); // Ẩn modal sau khi lưu thành công
        } catch (error) {
            console.error('Error updating data:', error);
        }
    }

    const deleteRoomtype = (props) => {
        // console.log(data)
        const filterData = data.filter(item => item.id !== props.id);
        setData(filterData);
    }




    const toolbar = () => (
        <Button type="text" onClick={() => handleSave(selectedId)}>
            Lưu
        </Button>
    )

    

    //render
    return (<>
        <div>
            <h3>Loại Phòng</h3>
            <i class="fa-solid fa-dollar-sign"></i>
            <input type="text" placeholder="Giá tiền" value={price} onChange={(e) => setPrice(e.target.value)} />
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search" value={name} onChange={(e) => setName(e.target.value)} />
            <Button type="primary" onClick={handleSearchPrice}>
                Tìm kiếm
            </Button>
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
                <Column
                    title="Trạng thái"
                    dataIndex="status"
                    key="status"
                    render={(text, record) => (
                        <Switch
                            checked={record.status === 'true'}
                            onChange={(checked) => handleStatusChange(record.id, checked)}
                        />
                    )}
                />
                <Column title="Thao tác" dataIndex="id" key="id" render={(props) => (
                    <>
                        <Flex justify={"flex-start"}>
                            <Tooltip title={"Sửa"}>
                                <Button type="text" onClick={() => editRoomType(props)}>
                                    {<EditOutlined />}
                                </Button>
                                <Modal title="Sửa loại phòng" open={modal2Open} onOk={handleSave}
                                    onCancel={() => setModal2Open(false)} width={800} footer={toolbar()}>
                                    <Content1 id={selectedId} setInfoRoom={setInfoRoom} infoRoom={infoRoom} />
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