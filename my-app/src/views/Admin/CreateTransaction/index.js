import React, { useState, useEffect } from 'react';
import { Table, Button, DatePicker, Modal } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import * as api from '../../../services/RoomService';
import AddCart from './AddCart';

const Createtransaction = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState({
        cartData: [],
        selectedRowKeys: [],
        soLuong: 0
    });

    const [timeVao, setTimeVao] = useState();
    const [timeRa, setTimeRa] = useState();

    const [modal1Open, setModal1Open] = useState(false);

    const handleSearchDate = async () => {
        try {
            let body = {};

            if (timeVao) {
                body.thoiGianVao = `${timeVao} 12:00:00`;
            }
            if (timeRa) {
                body.thoiGianRa = `${timeRa} 12:00:00`;
            }

            const res = await api.searchDateCt(body);
            const decodedData = res.data.map(i => ({
                id: i.tenLoaiPhong,
                name: i.soLuongTrong,
                price: i.giaTien,
                khach: i.soLuongNguoiO,
                soLuong: 0
            }));

            setData(decodedData);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(() => {
        handleSearchDate();
    }, []);

    const handleAddToCart = (record, index, action) => {
        const newCartData = [...state.cartData];
        const updatedRecord = { ...record }; // Copy the record to update
        if (action === 'plus') {
            updatedRecord.soLuong += 1;
        } else if (action === 'minus' && updatedRecord.soLuong > 0) {
            updatedRecord.soLuong -= 1;
        }
        newCartData[index] = updatedRecord;
        setState(prevState => ({
            ...prevState,
            cartData: newCartData.filter(item => item.soLuong > 0)
        }));
        setData(newCartData);
    };
    console.log(data);

    return (
        <>
            <div>
                <i className="fa-solid fa-house"></i>
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Tìm tên phòng& tên khách đặt" />
            </div>
            <div style={{ display: "flex" }}>
                <DatePicker style={{ marginRight: "10px" }} onChange={(date, dateString) => setTimeVao(dateString)} format='DD/MM/YYYY' placeholder='Ngày bắt đầu' />
                <DatePicker style={{ marginRight: "10px" }} onChange={(date, dateString) => setTimeRa(dateString)} format='DD/MM/YYYY' placeholder="Ngày kết thúc" />
                <Button style={{ marginLeft: "10px" }} type="primary" onClick={handleSearchDate}>
                    Tìm kiếm
                </Button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                <div>
                    <Table dataSource={data} loading={loading}>
                        <Table.Column title="Loại Phòng" dataIndex="id" key="id" />
                        <Table.Column title="Phòng" key="status" render={(text, record, index) => (
                            <>
                                <div style={{ display: "flex", height: "30px", justifyContent: "space-between" }}>
                                    {record.soLuong > 0 && (
                                        <button onClick={() => handleAddToCart(record, index, 'minus')}>-</button>
                                    )}
                                    <div>{record.soLuong}</div>
                                    {record.soLuong < record.name && (
                                        <button onClick={() => handleAddToCart(record, index, 'plus')}>+</button>
                                    )}
                                </div>
                                <span>{record.name - record.soLuong} / {record.name} số phòng còn lại</span>
                            </>
                        )} />
                        <Table.Column title="Giá Phòng" dataIndex="price" key="price" />
                        <Table.Column title="Khách" dataIndex="khach" key="khach" />
                    </Table>
                </div>
                {state.cartData.length > 0 && (
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <Button type="primary" onClick={() => setModal1Open(true)}>
                            Tiếp Tục
                        </Button>
                        <Modal title="Chi tiết" open={modal1Open} onOk={() => setModal1Open(false)}
                            width={800}>
                            <AddCart/>
                        </Modal>
                        <div style={{ fontWeight: "bold", marginBottom: "10px", border: "1px solid black", height: "100%", marginTop: "10px" }}>
                            Thông tin chi tiết ngày
                            <div>
                                {state.cartData.map(item => (
                                    <div key={item.key} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} >
                                        <div style={{ fontWeight: "bold" }}>
                                            <p>{item.id}</p>
                                            <p><i className="fa-solid fa-user"></i>{item.khach} <i className="fa-solid fa-house-circle-xmark"></i>{item.tang}</p>
                                        </div>
                                        <p>{item.price} * {item.soLuong}</p>
                                    </div>
                                ))}
                            </div>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                <p>Tổng tiền</p>
                                <span>500000 đ</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Createtransaction;
