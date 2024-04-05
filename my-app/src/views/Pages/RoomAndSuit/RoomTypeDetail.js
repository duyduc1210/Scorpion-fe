import { Carousel } from "antd";
import React, { useState, useEffect } from "react";

const RoomTypeDetail = (props) => {
  const contentStyle = {
    width: "75%",
    margin: 0,
    height: "450px",
    color: "#fff",
    lineHeight: "300px",
    textAlign: "center",
    background: "#364d79",
  };
  const contentStyle2 = {
    width: "100% ",
    margin: 0,
    height: "100% ",
    color: "#fff",
    lineHeight: "300px",
    textAlign: "center",
    background: "#364d79 ",
  };
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const formatNumber = (number) => {
    if (number !== undefined) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    return "";
  };
  const { data } = props;

  console.log(data);

  return (
    <>
      <div className="textForm">
        <h3 className="textTTCT">Thông tin chi tiết </h3>

        <p>- Loại phòng: {data.param.tenLoaiPhong}</p>
        <p>- Diện tích : {data.param.dienTich}m2</p>
        <p>- Giá tiền : {formatNumber(data.param.giaTien)} VNĐ / ngày</p>
        <p>- Hướng nhìn : {data.param.huongNhin}</p>
        <p>- Mô tả : {data.param.moTa}</p>
        <p>- Số lượng ở tối đa : {data.param.soLuongNguoiO}</p>
        <h3>Các hình ảnh của phòng :</h3>
      </div>
      <center>
        <Carousel afterChange={onChange}>
          {data.param.hinhAnh.map((image) => (
            <div>
              <div style={contentStyle}>
                <img
                  style={contentStyle2}
                  src={`data:image/png;base64,${image.hinhAnhLoaiPhong}`}
                  alt="anh_loai_phong"
                  className="rooms-img"
                />
              </div>
            </div>
          ))}
        </Carousel>
      </center>
    </>
  );
};

export default RoomTypeDetail;
