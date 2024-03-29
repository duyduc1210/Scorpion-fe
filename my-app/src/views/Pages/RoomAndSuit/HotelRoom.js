import Sider from "antd/es/layout/Sider";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const HotelRoom = ({ roomType, onClick, mode = null }) => {
  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  let size = null;
  let btn = null;
  if (mode === "RoomAndSuit") {
    btn = (
      <Link className="btn btn-fill" to="/booking">
        Đặt ngay
      </Link>
    );
  } else {
    size = "300";
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
          <span className="btn btn-ghost" onClick={onClick}>
            Xem thêm
          </span>
          {btn}
        </div>
      </div>
    </>
  );
};

export default HotelRoom;
