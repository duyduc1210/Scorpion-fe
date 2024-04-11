 import React, { useState, useEffect } from 'react';
import { Table, Switch, Button, Flex, Tooltip, Popconfirm, Modal} from 'antd'
import { EditOutlined, RestOutlined } from '@ant-design/icons';
import axios from "axios";
export const Children1 = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

   
    const { Column } = Table;
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };
    // const data2 = [

    //     {
    //         id: 1,
    //         name: "Nguyen van A",
    //         pass: "123456",
    //         type: "admin",
    //     },
    // ]
    const apiString = 'http://localhost:8080/khach/hien-thi-list'
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(apiString);
                const decodedData = response.data.map((item) => ({
                    id: (item.thongTinKhachDatIdKhachDat.soDienThoai),
                    name: (item.thongTinKhachDatIdKhachDat.hoTen),
                    pass: (item.thongTinKhachDatIdKhachDat.ngaySinh),
                    type: (item.thongTinKhachDatIdKhachDat.email),
                    status: (item.trangThai),
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
    const deleteRoomtype = (props) => {
        console.log(data)
        const filterData = data.filter(item => item.id !== props.id);
        setData(filterData);
    }
    return (
        <>
          
                <Table dataSource={data} loading={loading}>
                    <Column title="Số Điện Thoại" dataIndex="id" key="id" />
                    <Column title="Tên" dataIndex="name" key="name" />
                    <Column title="Ngày sinh" dataIndex="pass" key="pass" />
                    <Column title="Email" dataIndex="type" key="type" />
                    <Column title="Vô hiệu tài khoản" key="status" render={(props) => (
                    <><Switch checked={props.status} onChange={onChange} /></>
                )} />
                    <Column title="Chi tiết" render={(props) => (
                        <>
                            <Flex justify={"flex-start"}>
                                
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
        
    );
}
export default Children1;