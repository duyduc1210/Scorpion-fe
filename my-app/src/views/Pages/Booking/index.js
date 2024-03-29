import React, { useState } from "react";
import { message, Button } from "antd"; // Import các thư viện cần thiết
import { Space, Table, Tag, InputNumber  } from "antd";
import "./HotelBookingForm.css"; // Import CSS cho form (bạn có thể tạo file CSS riêng)
import Column from "antd/es/table/Column";
import HotelRoom from "../RoomAndSuit/HotelRoom";
import { roomTypes } from "../../../shared/db/dataRoom";
import CsModal from "../RoomAndSuit/CsModal";
import RoomTypeDetail from "../RoomAndSuit/RoomTypeDetail";




const HotelBookingForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mode, setMode] = useState("");
  const [getData, setData] = useState({});

  const showRoomType = (data = null) => {
    setIsModalOpen(true);
    setMode("roomTypeDetail");

    let newData = {
      title: "Text",
    };

    console.log(data);
    if (data) {
      newData.title = data.ten_loai_phong;
      newData.param = data;
      setData(newData);
    }
  };
  let content
  if (mode === "roomTypeDetail") {
    content = <RoomTypeDetail data={getData} />;
  }
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onChange = (value) => {
    console.log('changed', value);
  };
  return (
    
    <>
    <CsModal
        open={isModalOpen}
        title={getData.title}
        content={content}
        onCancel={handleCancel}
        onOk={handleOk}
      />

      <Table pagination={false} dataSource={roomTypes}>
        <Column title="Loại phòng" key="name" render={(props) =>(
          <>
            {props.ten_loai_phong}

            <HotelRoom
              roomType={props}
              onClick={() => showRoomType(props)}
            />
          </>
        )}/>
        <Column title="Số lượng khách"  key="so_luong_nguoi_o"  render={(props) => (
          <>
            {props.so_luong_nguoi_o} <span>Người</span>
          </>
        )}/>
        <Column title="Mức giá hôm nay"  key="gia_tien" render={(props) => (
         <>
          {formatNumber(props.gia_tien)} <span>VNĐ</span>
         </>
        )}/>
       
        <Column title="Chọn số lượng phòng" dataIndex="action" key="action" render={(props) =>(
          <>
            <InputNumber min={0} max={10} defaultValue={0} onChange={onChange} />
          </>
        )}/>
        <Column title="Đặt phòng" dataIndex="dat_phong" key="dat_phong" render={(props) => (
          <>
            <Button type="primary">Đặt phòng</Button>
          </>
        )} />
        
      </Table>
    </>
  );
};
export default HotelBookingForm;
