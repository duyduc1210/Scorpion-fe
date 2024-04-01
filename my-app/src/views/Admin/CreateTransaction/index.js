import React, { useState, useEffect } from 'react';
import { Table, Button, DatePicker, Select } from 'antd';
import { EditOutlined } from '@ant-design/icons';

const Createtransaction = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const { Column } = Table;

    const [state, setState] = useState({
        cartData: [],
        selectedRowKeys: [],
        roomCount: 0
    });
   

    const data2 = [
        {
            key: "1",
            id: "Đơn",
            name: 4,
            status: false,
            tang: "1",
            text: " ",
            price: "75,000 VND",
            khach: "2",
            room: 0,
            soLuong: 20
        },
        {
            key: "2",
            id: "Đôi",
            name: 2,
            status: true,
            tang: "2",
            text: " ",
            price: "95,000 VND",
            khach: "3",
            room: 0,
            soLuong: 10
        }
    ];

    useEffect(() => {
        const getData = async () => {
            setData(data2);
        }
        getData();
    }, []);

    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };

    const onChange1 = (value) => {
        console.log('changed', value);
    };

    const handleAddToCart = (record, index) => {
        const newCartData = [...state.cartData]
        newCartData[index] = { ...record }
        setState(prevState => ({
            ...prevState,
            cartData: newCartData
        }));
    };
 
    return (
        <>
            <div>
                <i className="fa-solid fa-house"></i>
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Tìm tên phòng& tên khách đặt" />
            </div>
            <div style={{ display: "flex" }}>
                <DatePicker onChange={onChange} placeholder='Ngày bắt đầu' />
                <DatePicker onChange={onChange} placeholder="Ngày kết thúc" />
                <Button type="primary">
                    Tìm kiếm
                </Button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                <div>
                    <Table dataSource={data} loading={loading}>
                        <Column title="Loại Phòng" dataIndex="id" key="id" />
                        <Column title="Phòng" key="status" render={(text, record, index) => (
                            <>
                                <div style={{ display: "flex", height:"30px", justifyContent: "space-between" }}>
                                    {record.soLuong > 1 && (
                                        <button onClick={() => {
                                            const dataClone = [...data]
                                            dataClone[index].soLuong = record.soLuong -1
                                            setData(dataClone)
                                        } }
                                        > - </button>
                                    )}
                                    <div> {record.soLuong}</div>
                                    <button onClick={() => {
                                        const newState = { ...state }
                                        handleAddToCart({ ...record, room: newState.roomCount + 1 }, index)
                                        setState(prevState => {
                                            return ({ ...prevState, roomCount: prevState.roomCount + 1 })
                                        })
                                    } }
                                    > + </button>
                                </div>
                                <span>{record?.name - state.roomCount} / {record.name} số phòng còn lại</span>
                            </>
                        )} />
                        <Column title="Tầng" dataIndex="tang" key="tang" />
                        <Column title="Text" dataIndex="text" key="text" />
                        <Column title="Giá Phòng" dataIndex="price" key="price" />
                        <Column title="Khách" dataIndex="khach" key="khach" />
                    </Table>
                </div>
                {state.roomCount !== 0 && (
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <Button type="primary">Tiếp tục</Button>
                        <div style={{ fontWeight: "bold", marginBottom: "10px", border: "1px solid black", height: "100%", marginTop: "10px" }}>
                            Thông tin chi tiết ngày
                            <div>
                                {state.cartData.map(item => (
                                    <div key={item.key} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} >
                                        {/* Display shopping cart item details */}
                                        <div style={{ fontWeight: "bold" }}>
                                            <p>{item.id}</p>
                                            <p><i class="fa-solid fa-user"></i>{item.khach}
                                            <i class="fa-solid fa-house-circle-xmark"></i>{item.tang}</p></div>
                                        <p>{item.price}*{item.room}</p>
                                        <p></p>
                                        {/* Add more details as needed */}
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
