import Sider from "antd/es/layout/Sider";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, message, Space } from 'antd';


const HotelRoom = ({ roomType, onClick, mode = null }) => {


  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const formatNumber = (number) => {
    if (number !== undefined) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    return "";
};

  let size = null;
  let btn = null;
  const guest_id = localStorage.getItem("guest_id");


  const onClickDP = () =>{
    if (guest_id) {
      navigate("/booking");
    } else {
    messageApi.open({
      type: 'warning',
      content: 'Bạn phải đăng nhập để đặt phòng',
    });
     
        
     
    }
  };
  
  
  if (mode === "RoomAndSuit") {
  btn = ( 
    <span className="btn btn-fill cursor" onClick={onClickDP}>
    
      Đặt ngay
    </span>
  );
  }
 
  let content = null;
  if (mode === "RoomAndSuit") {
    content = (
      <>
        <h3 className="room-title">{roomType.tenLoaiPhong}</h3>
        <p className="room-text">{roomType.moTa}</p>
        <div>
          <div className="details-container">
            <img
              src="assets/img/check-square.svg"
              alt="tick"
              className="list-icon"
            />
            <p className="list-text">{roomType.soLuongNguoiO} người</p>
          </div>
          {/* <div className="details-container">
            <img src="assets/img/bed.png" alt="tick" className="list-icon" />
            <p className="list-text">1 giường đôi lớn</p>
          </div> */}
        </div>
        <p className="amount-text">
          {formatNumber(roomType.giaTien)} VNĐ / ngày
        </p>
      </>
    );
  }
  
  console.log('roomeType',roomType);
  return (
    <>
      {contextHolder}

      <div className="room col col-2">
        <img
          width={size}
          src={`data:image/png;base64,${roomType.hinhAnh[0].hinhAnhLoaiPhong}`}
          alt="anh_loai_phong"
          className="img2 rooms-img"
        />
        {content}
        <div className="buttons-container">
          <span className="btn btn-ghost cursor" onClick={onClick}>
            Xem thêm
          </span>
          {btn}
        </div>
      </div>
  
    </>
  );
};

export default HotelRoom;
