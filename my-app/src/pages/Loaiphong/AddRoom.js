// Content.js

import React, { useState, useEffect } from "react";
import { Button, Input, Modal } from "antd";
import axios from "axios";
import SelectComponent from "../../components/Selectcomponent/SelectComponent"; // Corrected import path

const apiAddRoom = "http://localhost:8080/admin/phong/add";
const apiGetLoaiPhong = "http://localhost:8080/admin/loai-phong/list";

export const Content = () => {
  const [soPhong, setSoPhong] = useState("");
  const [soTang, setSoTang] = useState("");
  const [loaiPhongIdLoaiPhong, setLoaiPhongIdLoaiPhong] = useState(null);
  const [dataLoaiPhong, setDataLoaiPhong] = useState([]);
  const [modal1Open, setModal1Open] = useState(false);

  const onChangeSoPhong = (e) => setSoPhong(e.target.value);
  const onChangeSoTang = (e) => setSoTang(e.target.value);

  const handleSelectChange = (value) => {
    setLoaiPhongIdLoaiPhong(value); // Set selected ID here
  };

  const handleOk = async () => {
    // Validate input fields
    if (!soPhong || !soTang || loaiPhongIdLoaiPhong === null) {
      console.error("Please fill in all required fields.");
      return;
    }

    const requestBody = {
      loaiPhongIdLoaiPhong: { id: loaiPhongIdLoaiPhong }, // Corrected value
      soPhong,
      soTang,
      trangThai: false,
    };

    try {
      const response = await axios.post(apiAddRoom, requestBody);
      console.log("Room added successfully:", response.data);

      // Clear form fields after successful addition
      setSoPhong("");
      setSoTang("");
      setLoaiPhongIdLoaiPhong(null);

      setModal1Open(false);
    } catch (error) {
      console.error("Error adding room:", error);
    }
  };

  useEffect(() => {
    getLoaiPhong();
  }, []);

  const getLoaiPhong = async (value) => {
    try {
      const response = await axios.get(apiGetLoaiPhong);
      const filterData = response.data.map((item) => ({
        value: item.id,
        label: item.tenLoaiPhong,
      }));
      setDataLoaiPhong(filterData);
    } catch (error) {
      console.error("Error fetching Loai Phong:", error);
    }
  };

  return (
    <>
      <Button type="primary" onClick={() => setModal1Open(true)}>
        Thêm
      </Button>
      <Modal
        title="Thêm phòng"
        visible={modal1Open} // Corrected prop name
        onOk={handleOk}
        onCancel={() => setModal1Open(false)}
        width={600}
      >
        <div>
          <div style={{ marginBottom: 10 }}>
            <p>Tên phòng</p>
            <Input
              value={soPhong}
              onChange={onChangeSoPhong}
              placeholder="Nhập tên phòng"
            />
          </div>
          <div style={{ marginBottom: 10 }}>
            <p>Tầng</p>
            <Input
              value={soTang}
              onChange={onChangeSoTang}
              placeholder="Nhập tầng"
            />
          </div>
          <div style={{ marginBottom: 10 }}>
            <p>Loại phòng</p>
            <SelectComponent onChangeData={handleSelectChange} /> {/* Pass callback */}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Content;
