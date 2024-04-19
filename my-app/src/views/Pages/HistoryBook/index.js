import React, { useEffect, useState } from "react";
import { Button, Modal, Space, Table, Tag } from "antd";
import Column from "antd/es/table/Column";
import historyBook from "../../../shared/api/historyBook";
// import FooterPage from "../../../components/Pages/FooterPage";
import HeaderPage from "../../../components/Pages/HeaderPage";
// import RoomApi from "../../../shared/api/RoomApi";
// import historyBookDetail from "../../../shared/api/historyBookDetailApi";
import CsModal from "../RoomAndSuit/CsModal";
import DetailHistory from "./DetailHistory";
import FooterPage from "../../../components/Pages/FooterPage";

const HistoryBook = () => {
  const [getCurrentUserId, setCurrentUserId] = useState(null);

  const [getRoomTypes, setRoomTypes] = useState([]);
  const [getRooms, setRooms] = useState([])

  const [getData, setData] = useState({});

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const guest_id = JSON.parse(localStorage.getItem("guest_id"));

    console.log(guest_id);
    setCurrentUserId(guest_id.idThongTinKhachDat);
  }, []);

  //GET API lịch sử đặt phòng
  useEffect(() => {
    const getHistory = async () => {
      try {
        const result = await historyBook.get(getCurrentUserId);
        setRoomTypes(result.data);
      } catch (error) {}
    };

    if(getCurrentUserId){
      getHistory();
    }

  }, [getCurrentUserId]);

  //GET API chi tiết lịch sử đặt phòng
  // useEffect(() => {
  //   const getHistoryDetail = async () => {
  //     try {
  //       const results = await historyBookDetail.get();
  //       setRooms(results.data);
  //       console.log(results.data);
  //     } catch (error) {}
  //   };

  //   getHistoryDetail();
  // }, []);

  const showModal = (data) => {
    const newData = {
      title: "Chi tiết đặt phòng",
      id: data.id
    }

    setData(newData)
    setIsModalOpen(true);
  }

  const handleOk = () => {
    setIsModalOpen(false);
  }

  const handleCancel = () => {
    setIsModalOpen(false);
  }

  const formatNumber = (number) => {
    if (number !== undefined) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    return "";
  };

  

  return (
    <>

      <CsModal
        open={isModalOpen}
        title={getData.title}
        content={<DetailHistory data={getData} />}
        onCancel={handleCancel}
        onOk={handleOk}
      />
   
      <HeaderPage />
      <center>
        <h2 className="lsdpcss">Lịch sử đặt phòng</h2>
        <br />
      </center>
      <Table pagination={false} dataSource={getRoomTypes}>
        <Column
          title="Mã đặt phòng"
          key="name"
          render={(roomType) => <>{roomType.id}</>}
        />

        <Column
          title="Thời gian check in"
          key="name"
          render={(roomType) => <>{roomType.thoiGianVao}</>}
        />
        <Column
          title="Thời gian check out"
          key="name"
          render={(roomType) => <>{roomType.thoiGianRa}</>}
        />

        <Column
          title="Tổng tiền"
          key="gia_tien"
          render={(roomType) => (
            <>
              {formatNumber(roomType.tongTien)} <span>VNĐ </span>
            </>
          )}
        />
        <Column
          title="Action"
          key="name"
          render={(roomType) => (
            <>
              <button type="primary" onClick={() => showModal(roomType)}>
                Chi tiết
              </button>
            </>
          )}
        />
      </Table>


    </>
  );
};

export default HistoryBook;
