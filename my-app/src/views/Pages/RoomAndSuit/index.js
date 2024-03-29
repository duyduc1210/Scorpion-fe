import HeaderPage from "../../../components/Pages/HeaderPage";
import FooterPage from "../../../components/Pages/FooterPage";
import React, { useState, useEffect } from "react";
import { Button } from "antd";

import HotelRoom from "./HotelRoom";

import { roomTypes, uuDais } from "../../../shared/db/dataRoom";

import CsModal from "./CsModal";
import UuDaiDetail from "./UuDaiDetail";

import RoomTypeDetail from "./RoomTypeDetail";

const RoomAndSuit = () => {
  const [getRoomTypes, setRoomTypes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mode, setMode] = useState("");
  const [getData, setData] = useState({});

  let content = null;

  useEffect(() => {
    const getData = () => {
      setRoomTypes(roomTypes);
    };
    getData();
  }, []);

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

  const showModalUuDai = (data = null) => {
    setIsModalOpen(true);
    setMode("uuDai");

    let newData = {
      title: "Ưu đãi đặc biệt",
    };

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
  }

  return (
    <>
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
            <h2 className="page-header">Các phòng của khách sạn Scorpion </h2>
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
                <div className="col">
                  <h3 className="offers-title">{uuDai.title}</h3>
                  <p className="offers-sub-title">{uuDai.description}</p>
                  <ul className="offers-list">
                    {uuDai.attribute.map((item) => (
                      <li>
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
                    Xem Thêm
                  </Button>
                </div>
              ))}
            </div>
          </section>

          <section className="rooms-section">
            <div className="row center-lg">
              {getRoomTypes.map((roomType) => (
                <HotelRoom
                  mode={"RoomAndSuit"}
                  roomType={roomType}
                  onClick={() => showRoomType(roomType)}
                />
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
