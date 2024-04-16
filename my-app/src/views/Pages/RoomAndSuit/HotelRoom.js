
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, DatePicker, message } from 'antd';
import moment from "moment";


const HotelRoom = ({ roomType, onClick, mode = null }) => {


  const [messageApi, contextHolder] = message.useMessage();
  const [dateTime, setDateTime] = useState(null);
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
      let gioHang = [];
      let giohangStore = localStorage.getItem("gioHang");
      if(giohangStore){
        gioHang = JSON.parse(giohangStore);
      }
      // kiem tra loai phong nay chua dc dat moi them vao gio hang
      if(gioHang.some(g=>g.id === roomType.id)){
        messageApi.open({
          type: 'warning',
          content: 'Sản phẩm đã có trong giỏ hàng',
        });     
      }else{
        gioHang.push({
          id: roomType.id,
          soluong: 1, 
          soLuongTrong: roomType.soLuongTrong
        });
        messageApi.open({
          type: 'success',
          content: 'Đã thêm vào giỏ hàng thành công',
        });     
     
        localStorage.setItem("gioHang", JSON.stringify(gioHang));
      }
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
    
      Thêm vào giỏ hàng
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
            {roomType.soLuongTrong > 0 ? 
              <><br/><p className="amount-text">Số lượng phòng trống : {roomType.soLuongTrong} / {roomType.soLuongTrong} phòng </p></>  : null}  
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
