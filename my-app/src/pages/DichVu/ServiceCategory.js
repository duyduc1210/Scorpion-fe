import { Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ServiceCategory = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const { Column } = Table;
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };

    const apiString = 'http://localhost:8080/admin/loai-dich-vu/hien-thi';
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiString);
                // Decode the data from response
                const decodedData = response.data.map((item) => ({
                    id: decodeURIComponent(item.id),
                    tenLoaiDichVu: decodeURIComponent(item.tenLoaiDichVu),
                }));
                setData(decodedData);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false); // Ensure loading state is set to false even on errors
            }
        };

        fetchData();
    }, []); // Empty dependency array to fetch on mount

    return (
        <div>
            {data.length > 0 ? (
                <Table dataSource={data} loading={loading}>
                    <Column title="Số thứ Tự" dataIndex={(rowIndex) => rowIndex + 1} key="index" />
                    <Column title="Tên Loại Dịch Vụ" dataIndex="tenLoaiDichVu" key="tenLoaiDichVu" />
                    <Column title="Chức Năng" key="id" /> {/* Assuming "id" is unique in your data */}
                </Table>

            ) : (
                <p>Loading data...</p>
            )}
        </div>
    );
};

export default ServiceCategory;
