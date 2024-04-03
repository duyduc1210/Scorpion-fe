import Sider from "antd/es/layout/Sider";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const HotelRoom = ({ roomType, onClick, mode = null }) => {
  const navigate = useNavigate();
  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  let size = null;
  let btn = null;
  const guest_id = localStorage.getItem("guest_id");


  const onClickDP = () =>{
    if (guest_id) {
      navigate("/booking");
    } else {
      alert("Bạn phải đăng nhập");
    }
  }
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
        <h3 className="room-title">{roomType.ten_loai_phong}</h3>
        <p className="room-text">{roomType.mo_ta}</p>
        <div>
          <div className="details-container">
            <img
              src="assets/img/check-square.svg"
              alt="tick"
              className="list-icon"
            />
            <p className="list-text">{roomType.so_luong_nguoi_o} người</p>
          </div>
          {/* <div className="details-container">
            <img src="assets/img/bed.png" alt="tick" className="list-icon" />
            <p className="list-text">1 giường đôi lớn</p>
          </div> */}
        </div>
        <p className="amount-text">
          {formatNumber(roomType.gia_tien)} VNĐ / ngày
        </p>
      </>
    );
  }
  return (
    <>
      <div className="room col col-2">
        <img
          width={size}
          src={roomType.image}
          alt="anh_loai_phong"
          className="rooms-img"
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
