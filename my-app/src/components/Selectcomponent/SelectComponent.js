import React, { useEffect, useState } from "react";
import { Select } from "antd";
import axios from "axios";

export const SelectComponent = ({ onChangeData }) => {
    const [dataLoaiPhong, setDataLoaiPhong] = useState([]);

    const onChange = (value) => {
        console.log(`selected ${value}`);
        if (onChangeData) {
            onChangeData(value);
        }
    };

    const getCategoriesRoom = async () => {
        const apiGet = 'http://localhost:8080/admin/loai-phong/list';
        try {
            const response = await axios.get(apiGet);
            console.log(response.data);
            const filterData = response.data.map(item => ({
                value: item.id,
                label: item.tenLoaiPhong,
            }));
            filterData.push({
                value: null,
                label: "All Option"
            });
            console.log(filterData);
            setDataLoaiPhong(filterData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCategoriesRoom();
    }, []);

    const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    return (
        <Select
            showSearch
            placeholder="Danh Sách Phòng"
            onChange={onChange}
            options={dataLoaiPhong}
            filterOption={filterOption}
        />
    );
};

export default SelectComponent;
