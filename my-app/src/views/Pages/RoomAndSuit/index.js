import HeaderPage from "../../../components/Pages/HeaderPage";
import FooterPage from "../../../components/Pages/FooterPage";
import React, { useState, useEffect } from "react";
import { Button, DatePicker, message } from "antd";

import HotelRoom from "./HotelRoom";

import { uuDais } from "../../../shared/db/dataRoom";
import { chinhSach } from "../../../shared/db/dataRoom";
import CsModal from "./CsModal";
import UuDaiDetail from "./UuDaiDetail";
import * as api from "../../../services/RoomService";

import RoomTypeDetail from "./RoomTypeDetail";
import RoomApi from "../../../shared/api/RoomApi";
import moment from "moment";
import ChinhSachDetail from "./ChinhSachDetai";

const RoomAndSuit = () => {
  const [getRoomTypes, setRoomTypes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [searched, setSearched] = useState(true);

  const [mode, setMode] = useState("");
  const [getData, setData] = useState({});
  const [timeVao, setTimeVao] = useState();
  const [timeRa, setTimeRa] = useState();

  const [disabled, setDisabled] = useState(false);

  const disabledDate = (current) => {

    return current && current < moment().startOf('day');
  };
  let content = null;

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await RoomApi.getAll();
        setRoomTypes(result.data);
        console.log(result.data);
      } catch (error) {}
    };
    getData();
   

  }, []);

  const showRoomType = (data = null) => {
    setIsModalOpen(true);
    setMode("roomTypeDetail");

    let newData = {
      title: "Text",
    };

    if (data) {
      newData.title = data.ten_loai_phong;
      newData.param = data;
      setData(newData);
    }
  };

  const handleSearchDate = async () => {

  
    let x = { timeVao: timeVao, timeRa: timeRa };
    localStorage.setItem("timeSearch", JSON.stringify(x));

    try {
      let body = {};
      if (!timeRa && !timeVao) {
        messageApi.open({
          type: "warning",
          content: "Vui lòng chọn ngày ",
        });
      } else if (timeVao > timeRa) {
        messageApi.open({
          type: "warning",
          content: "Ngày bắt đầu phải nhỏ hơn ngày kết thúc ",
        });
      } else if (timeVao === timeRa) {
        messageApi.open({
          type: "warning",
          content: "Ngày bắt đầu và kết thúc không được trùng nhau",
        });
      } else if (!timeRa) {
        messageApi.open({
          type: "warning",
          content: "Vui lòng chọn ngày kết thúc",
        });
      } else if (!timeVao) {
        messageApi.open({
          type: "warning",
          content: "Vui lòng chọn ngày bắt đầu",
        });
      } else {
        if (timeVao) {
          body.thoiGianVao = `${timeVao} 12:00:00`;
        }
        if (timeRa) {
          body.thoiGianRa = `${timeRa} 12:00:00`;
        }

        const res = await api.searchDateCt(body);

        setRoomTypes(res.data);
        setSearched(false);
        messageApi.open({
          type: "success",
          content: "Tìm kiếm thành công vui lòng kiểm tra các phòng còn trống",
        });
        console.log(res);

        localStorage.removeItem("gioHang");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const showModalUuDai = (data = null) => {
    setIsModalOpen(true);
    setMode("uuDai");

    let newData = {};

    if (data) {
      newData.param = data;
      setData(newData);
    }
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  if (mode === "roomTypeDetail") {
    content = <RoomTypeDetail data={getData} />;
  } else if (mode === "uuDai") {
    content = <UuDaiDetail data={getData} />;
  } else if (mode === "chinhSach") {
    content = <ChinhSachDetail data={getData} />;
  }

  return (
    <>
      {contextHolder}
      <CsModal
        open={isModalOpen}
        title={getData.title}
        content={content}
        onCancel={handleCancel}
        onOk={handleOk}
      />

      <HeaderPage />
      <main>
        <div className="container">
          <div className="page-header-container">
            <h2 className="page-header">Các phòng của khách sạn Scorpio </h2>
            <hr />
            <p className="page-sub-header">
              Tận dụng tối đa các ưu đãi đặc biệt của khách sạn chúng tôi. Tận
              hưởng sự hiện đại <br />
              sự thoải mái và tầm nhìn toàn cảnh
            </p>
          </div>

          <section className="special-offers">
            <div className="row center-lg">
              <div className="col image-col right-marg">
                <img
                  src="assets/img/hotel-1.webp"
                  alt="room_image"
                  className="small-image"
                />
                <img
                  src="assets/img/hotel-2.webp"
                  alt="room_image"
                  className="small-image"
                />
                <img
                  src="assets/img/hotel-3.webp"
                  alt="room_image"
                  className="small-image"
                />
                <div className="side-by-side-container">
                  <div className="large-image-container">
                    <img
                      src="assets/img/hotel-4-large.webp"
                      alt="room_image_large"
                      className="large-image"
                    />
                  </div>
                  <section className="stacked-image-container">
                    <div>
                      <img
                        src="assets/img/hotel-5.webp"
                        alt="room_image"
                        className="small-image"
                      />
                    </div>
                    <div>
                      <img
                        src="assets/img/hotel-6.webp"
                        alt="room_image"
                        className="small-image"
                      />
                    </div>
                  </section>
                </div>
              </div>

              {uuDais.map((uuDai) => (
                <div className="col" key={uuDai.id}>
                  <h3 className="offers-title">{uuDai.title}</h3>
                  <p className="offers-sub-title">{uuDai.description}</p>
                  <ul className="offers-list">
                    {uuDai.attribute.map((item) => (
                      <li key={item.id}>
                        <div>
                          <img
                            src="assets/img/check-square.svg"
                            alt="tick"
                            className="list-icon"
                          />
                          <p className="list-text">{item.service}</p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <Button
                    type="text"
                    onClick={() => showModalUuDai(uuDai)}
                    className="btn btn-fill btn-large1"
                  >
                    Chính sách đặt phòng
                  </Button>
                </div>
              ))}
            </div>
          </section>

          <center>
            <div style={{ marginBottom: 16 }}>
              <h2> Tìm kiếm các phòng còn trống</h2>
              <hr />
              <br />
              <DatePicker
                style={{ marginRight: "10px" }}
                onChange={(date, dateString) => setTimeVao(dateString)}
                format="DD/MM/YYYY"
                placeholder="Ngày bắt đầu"
                disabledDate={disabledDate}
              />
              <DatePicker
                style={{ marginRight: "10px" }}
                onChange={(date, dateString) => setTimeRa(dateString)}
                format="DD/MM/YYYY"
                placeholder="Ngày kết thúc"
                disabledDate={disabledDate}
              />
              <Button
                style={{ marginLeft: "10px" }}
                type="primary"
                onClick={handleSearchDate}
              >
                Tìm kiếm 
                
              </Button>
            </div>
            <br />
          </center>

              
          <section className="rooms-section">
            <div className="row center-lg">
              {getRoomTypes.map((roomType) => (
                <span key={roomType.id}>
                  <HotelRoom
                    mode={"RoomAndSuit"}  
                    roomType={roomType}
                    onClick={() => showRoomType(roomType)}
                    timeVao={timeVao}
                    timeRa={timeRa}
                    searched={searched}
                  />
                </span>
              ))}
            </div>
          </section>
        </div>
      </main>
      <FooterPage />
    </>
  );
};

export default RoomAndSuit;
