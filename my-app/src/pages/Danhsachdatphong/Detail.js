import React, { useState, useEffect } from "react";
import { Table } from 'antd'
import { DatePicker, Space } from 'antd';
import { Input } from 'antd';

const { TextArea } = Input;
export const Detail = () => {
    const { Column } = Table;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };

    const data2 = [
        {
            type: "Content",
            number: ""
        },
        {
            type: "Content",
            number: ""
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
            <h3 style={{ fontWeight: "bold", backgroundColor: "#15ABFFFF", textAlign: "center", width: "250px", marginLeft: "350px", }}>Thông tin đặt phòng</h3>
            <div style={{ display: "flex" }}>
                <div>
                    <div style={{ display: "flex" }}>
                        <div>
                            <div style={{ fontWeight: "bold" }}>Thông tin phòng</div>
                            <Table dataSource={data} loading={loading} pagination={false}>
                                <Column title="Loại phòng" dataIndex="type" key="type" />
                                <Column title="Số Lượng" dataIndex="number" key="number" />
                            </Table>
                        </div>
                        <div>
                            <div style={{ fontWeight: "bold" }}>Thời gian ở</div>
                            <DatePicker onChange={onChange} placeholder='Ngày bắt đầu' style={{ width: 205, height: 30, marginleft: "20px" }} />
                            <div style={{ fontWeight: "bold" }}>Thời gian đi</div>
                            <DatePicker onChange={onChange} placeholder="ngày kết thúc" style={{ width: 205, height: 30, marginleft: "20px" }} />
                        </div>
                    </div>
                    <div style={{ fontWeight: "bold" }}>Tiền phòng</div>
                    <input type="text" />
                    <div style={{ fontWeight: "bold" }}>Ghi chú :</div>
                    <TextArea rows={2} style={{ width: 420, marginleft: "20px" }} />
                </div>
                <div>
                    <div style={{ display: "flex" }}>
                        <div>
                            <div style={{ fontWeight: "bold" }}>Họ và Tên</div>
                            <TextArea rows={2} style={{ width: 205, height: 30, marginleft: "20px" }} />
                            <div style={{ fontWeight: "bold" }}>Số Điện Thoại</div>
                            <TextArea rows={2} style={{ width: 205, height: 30, marginleft: "20px" }} />
                            <div style={{ fontWeight: "bold" }}>Quốc Tịch</div>
                            <TextArea rows={2} style={{ width: 205, height: 30, marginleft: "20px" }} />
                        </div>
                        <div>
                            <div style={{ fontWeight: "bold" }}>Ngày sinh:</div>
                            <DatePicker onChange={onChange} placeholder="" style={{ width: 205, height: 30, marginleft: "20px" }} />
                            <div style={{ fontWeight: "bold" }}>Email:</div>
                            <TextArea rows={2} style={{ width: 205, height: 30, marginleft: "20px" }} />
                            <div style={{ fontWeight: "bold" }}>Giới tính:</div>
                            <div style={{ display: "flex" }}>
                                <div style={{ fontWeight: "bold" }}><input type="radio" />Nam</div>
                                <div style={{ fontWeight: "bold" }}><input type="radio" />Nữ</div>
                            </div>
                        </div>
                    </div>

                    <div style={{ fontWeight: "bold" }}>Ghi chú :</div>
                    <TextArea rows={1} style={{ width: 420, marginleft: "20px" }} />
                </div>
            </div>
        </>
    )
}
export default Detail