import React, { useState, useEffect } from "react";
import { Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { SelectComponent } from '../../components/Selectcomponent/SelectComponent'
import { Divider } from 'antd';
import { Input } from 'antd';
import * as api from '../../services/RoomService';
import { setRoomData, selectRoom } from '../../redux/slides/roomSlides';

const { TextArea } = Input;
const columns = [
    {
        title: 'Tên Phòng',
        dataIndex: 'phong',
        render: (text) => <a>{text}</a>,
    },]
const columnss = [
    {
        title: 'Tiện ích ',
        dataIndex: 'tienich',
        render: (text) => <a>{text}</a>,
    },]
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },

};
export const Content1 = ({ roomId, handleSave }) => {
    const dispatch = useDispatch();
    const roomData = useSelector(selectRoom);

    const [data, setData] = useState([]);
    const [typeRoom, setTypeRoom] = useState('');
    const [view, setView] = useState('');
    const [tienIch, setTienIch] = useState([]);
    const [soNguoi, setSoNguoi] = useState('');
    const [dienTich, setDienTich] = useState('');
    const [giaTien, setGiaTien] = useState('');
    const [moTa, setMoTa] = useState('');
    const [tenPhong, setTenPhong] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await api.getDetailRoom(roomId);
                dispatch(setRoomData(res.data[0]));
                setData(res.data);
                if (res.data.length > 0) {
                    setTypeRoom(res.data[0].tenLoaiPhong);
                    setView(res.data[0].huongNhin);
                    setTienIch(res.data[0].tienIch.map((item) => item.tenTienIch));
                    setSoNguoi(res.data[0].soNguoi);
                    setDienTich(res.data[0].dienTich);
                    setGiaTien(res.data[0].giaTien);
                    setMoTa(res.data[0].moTa);
                    setTenPhong(res.data[0].phongIdPhong.map((item) => item.soPhong));
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [dispatch, roomId]);


    const tienIchData = tienIch.map((item, index) => ({
        key: index.toString(),
        tienich: item
    }));

    const phongData = tenPhong.map((item, index) => ({
        key: index.toString(),
        phong: item
    }))


    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                    <div style={{ justifyContent: "none" }}>
                        <p>Tên Loại phòng</p>
                        <input style={{ width: "339px" }} type="text" value={typeRoom} onChange={(e) => setTypeRoom(e.target.value)}></input>
                    </div>
                    {/* <SelectComponent /> */}

                    <Table
                        // rowSelection={{
                        //     type: rowSelection,
                        // }}
                        columns={columns}
                        dataSource={phongData}
                        pagination={false}
                    />
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <input style={{ width: '40%' }} type="number" placeholder="Số người" value={soNguoi} onChange={(e) => setSoNguoi(e.target.value)} />
                        <input style={{ width: '40%' }} type="number" placeholder="Diện tích" value={dienTich} onChange={(e) => setDienTich(e.target.value)} />
                    </div>
                </div>

                <div>
                    <p>Hướng nhìn</p>
                    <TextArea rows={2} style={{ width: 339 }} value={view} onChange={(e) => setView(e.target.value)} />
                    <Table
                        // rowSelection={{
                        //     type: rowSelection,
                        // }}
                        columns={columnss}
                        dataSource={tienIchData}
                        pagination={false}
                    />
                    <input style={{ width: "339px" }} type="number" placeholder="Giá tiền" value={giaTien} onChange={(e) => setGiaTien(e.target.value)} />
                </div>

            </div>
            <TextArea rows={2} style={{ marginLeft: "30px", width: 720, marginleft: "20px" }} placeholder="Mô tả" value={moTa} onChange={(e) => setMoTa(e.target.value)} />
        </div>
    )
}

export default Content1