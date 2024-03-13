import React, { useState } from 'react';
import style from '../Quanlyloaiphong/Quanlyloaiphong.module.css'
import { Table } from "antd";
import { Button, Modal } from 'antd';
import { EditOutlined, DeleteOutlined, FileImageOutlined, FileAddOutlined } from '@ant-design/icons';
import { Switch } from 'antd';

export const Content = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const object = [
        {
            room: "",
            quantity: "",
            price: "",
            status: 1,
            act: "",
        },
        {
            room: "",
            quantity: "",
            price: "",
            status: 2,
            act: "",
        },
    ];
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };
    const handleDelete = (index) => {
        alert("Bạn có muốn xóa phòng này không?") || object.splice(index, 1);
    }
    const handleimage = (index) => {
        alert("Bạn có muốn xóa phòng này không?") || object.splice(index, 1);
    }
    const handleadd = (index) => {
        alert("Bạn có muốn xóa phòng này không?") || object.splice(index, 1);
    }
    //   const rows = object.map((item, index) => ({
    //     Id: index + 1,
    //     room: item.room,
    //     quantity: item.quantity,
    //     price: item.price,
    //     status: item.status,
    //     act: item.act,
    //   }));

    const columns = [
        {
            title: '#',
            dataIndex: 'Id',
            key: 'Id',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Tên loại phòng',
            dataIndex: 'ten loai phong',
            key: 'ten loai phong',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Số lượng người',
            dataIndex: 'so luong nguoi',
            key: 'so luong nguoi',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Giá',
            dataIndex: 'gia',
            key: 'gia',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Trạng Thái',
            dataIndex: 'trang thai',
            key: 'trang thai',
            render: () => <Switch defaultChecked onChange={onChange} />,
        },
        {
            title: 'Hành Động',
            dataIndex: 'hanh dong',
            key: 'hanh dong',
            render: () => <>
            <Button onClick={() => handleadd(true)}>
            <FileAddOutlined style = {{border : "none"}} />
            </Button>
            <Button onClick={() => handleimage(true)}>
            <FileImageOutlined style = {{border : "none"}} />
            </Button>
                <Button onClick={() => handleDelete(true)}>
                    <DeleteOutlined />
                </Button>
            </>,
        },

    ]
    return (
        <>
            <div>
                <h3>Loại Phòng</h3>
                <i class="fa-solid fa-dollar-sign"></i>
                <input type="text" placeholder="Giá tiền" />
                <i class="fa-solid fa-filter"></i>
                <input type="text" placeholder="Số người" />
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Search" />
            </div>
            <div>
                <>
                    <Button type="primary" onClick={showModal}>
                        Thêm
                    </Button>
                    <Modal title="Thêm loại phòng" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Modal>
                </>
                <div className={style.table}>
                    {/* <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Loại Phòng</th>
                                <th>Số lượng người</th>
                                <th>Giá</th>
                                <th>Trạng Thái</th>
                                <th>Hành Động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row) => (
                                <tr key={row.Id}>
                                    <td>{row.Id}</td>
                                    <td>{row.room}</td>
                                    <td>{row.quantity}</td>
                                    <td>{row.price}</td>
                                    <td>{row.status}</td>
                                    <td>{row.act}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table> */}
                    <Table dataSource={object} columns={columns} />

                </div>
            </div>
        </>
    )
}
export default Content