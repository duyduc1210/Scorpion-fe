import { Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Checkbox, Button, DatePicker, Modal } from 'antd';
import {Ganphong} from '../Transaction/ganphong'
import {Sualoaiphong} from '../Transaction/SuaLoaiphong';

const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
};

const data = [
    {
        khach: 'ABc',
    },
];
const RoomsAssign = () => {
    const [timeVao, setTimeVao] = useState();
    const [timeRa, setTimeRa] = useState();

    const [modal1Open, setModal1Open] = useState(false);
    const [modal2Open, setModal2Open] = useState(false);
const columns = [
    {
        title: 'Khách',
        dataIndex: 'khach',
    },
    {
        title: 'Hành Động',
        dataIndex: 'hanhdong',
        render: (_, record) => (
            <div>
                <Button type="primary" onClick={() => setModal2Open(true)}>
                    Sửa
                </Button>
                <Modal title="Thông tin khách ở" open={modal2Open} onOk={() => setModal2Open(false)}
                    onCancel={() => setModal2Open(false)} width={550}>
                    < Sualoaiphong/>
                </Modal>
            </div>
        ),
    },
]
    

    return (
        <div style={{ display: "flex", borderTop: "1px solid gray" }}>
            <div style={{ marginLeft: "50px", marginTop: "50px", }}>
                <div> <Checkbox onChange={onChange}>Đôi/1</Checkbox></div>
                <div style={{ marginTop: "20px" }}> <Checkbox onChange={onChange}>Đơn/2</Checkbox></div>
            </div>
            <div style={{ marginLeft: "150px", borderLeft: "1px solid gray", borderRight: "1px solid gray" }} >
                <div style={{ display: "flex", marginTop: "10px", }}>
                    <div style={{ paddingLeft: "20px" }}  >
                        <i class="fa-solid fa-couch"></i>  Vip 1 _
                    </div>
                    <div style={{ alignItems: "center", marginLeft: "200px" }}>
                        <Button type="primary" danger onClick={() => setModal1Open(true)} >
                            Gán phòng
                        </Button>
                        <Modal title="Gán phòng" open={modal1Open} onOk={() => setModal1Open(false)}
                            onCancel={() => setModal1Open(false)} >
                            < Ganphong/>
                        </Modal>
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: "40px", borderTop: "1px solid gray", paddingLeft: "20px", paddingTop: "25px" }}>
                    <DatePicker style={{ marginRight: "10px", border: "none" }} onChange={(date, dateString) => setTimeVao(dateString)} format='DD/MM   HH:mm' />
                    _ <DatePicker style={{ marginRight: "10px", border: "none" }} onChange={(date, dateString) => setTimeRa(dateString)} format='DD/MM   HH:mm' />
                </div>
                <div style={{ marginTop: "30px", borderTop: "1px solid gray", paddingLeft: "20px", paddingTop: "20px" }}>
                    <i class="fa-solid fa-circle-dollar-to-slot"></i>Giá : 900000VND
                </div>
                <div style={{ marginTop: "30px", borderTop: "1px solid gray", paddingLeft: "20px", paddingTop: "10px" }}>
                    <i class="fa-solid fa-user"></i> 2 Người Lớn, 1 Trẻ Em
                </div>
                <div style={{ marginTop: "20px" }}>
                    <Table
                        columns={columns}
                        dataSource={data}
                        pagination={false}
                    />
                </div>
            </div>
            <div style={{ marginLeft: "500px", marginTop: "500px" }}>
                <Button type='primary'>Lưu </Button>
            </div>
        </div>
    )
}
export default RoomsAssign;