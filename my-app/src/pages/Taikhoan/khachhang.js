import React, { useState, useEffect } from 'react';
import { Table, Switch, Button, Flex, Tooltip, Popconfirm, Modal} from 'antd'
import { EditOutlined, RestOutlined } from '@ant-design/icons';
export const Children1 = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

   
    const { Column } = Table;
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };
    const data2 = [

        {
            id: 1,
            name: "Nguyen van A",
            pass: "123456",
            type: "admin",
        },
    ]
    useEffect(() => {
        const getData = async () => {
            setData(data2)
        }

        getData();
    }, [])
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