import React, { useEffect, useState } from "react";
import { message, Button } from "antd"; // Import các thư viện cần thiết
import { Space, Table, Tag, InputNumber, DatePicker, TimePicker } from "antd";
import "./HotelBookingForm.css"; // Import CSS cho form (bạn có thể tạo file CSS riêng)
import Column from "antd/es/table/Column";
import HotelRoom from "../RoomAndSuit/HotelRoom";
import { roomTypes } from "../../../shared/db/dataRoom";
import CsModal from "../RoomAndSuit/CsModal";
import moment from "moment";
import RoomTypeDetail from "../RoomAndSuit/RoomTypeDetail";
import RoomApi from "../../../shared/api/RoomApi";
import apiRequest from "../../../shared/api/loginApi";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import HeaderPage from "../../../components/Pages/HeaderPage";
import FooterPage from "../../../components/Pages/FooterPage";
const HotelBookingForm = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const {
    setError,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const [dateTime, setDateTime] = useState(null);

  const handleSearch = () => {
    if (dateTime) {
      // Thực hiện tìm kiếm với ngày và giờ được chọn
      alert("Ngày tìm kiếm:", dateTime.format("YYYY-MM-DD"));
    } else {
      alert("Vui lòng chọn ngày và giờ để tìm kiếm.");
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [getRoomTypes, setRoomTypes] = useState([]);
  const [mode, setMode] = useState("");
  const [getData, setData] = useState({});

  useEffect(() => {
    getDatapage();
  }, []);

  const getDatapage = async () => {
    try {
      const result = await RoomApi.getAll();
      let dataRaw = result.data;
      let dataNew = [];
      let gioHang = [];
      let gioHangStore = localStorage.getItem("gioHang");
      if (gioHangStore) {
        gioHang = JSON.parse(gioHangStore);
      }

      //dataNew = dataRaw.filter(i=> gioHang.some(g=>g.id === i.id));
      for (const i of dataRaw) {
        let giohangdata = gioHang.find((g) => g.id === i.id);
        if (giohangdata != null) {
          dataNew.push({
            ...i,
            soluong: giohangdata.soluong,
          });
        }
      }

      setRoomTypes(dataNew);
      console.log("dataNew", dataNew);
    } catch (error) {}
  };

  const showRoomType = (data = null) => {
    setIsModalOpen(true);
    setMode("roomTypeDetail");

    let newData = {
      title: "Text",
    };

    console.log(data);

    if (data) {
      newData.title = data.tenLoaiPhong;
      newData.param = data;
      setData(newData);
    }
  };

  
  let content;
  if (mode === "roomTypeDetail") {
    content = <RoomTypeDetail data={getData} />;
  }
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const formatNumber = (number) => {
    if (number !== undefined) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    return "";
  };

 
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDelete = (item) => {
    let gioHang = [];
    let gioHangStore = localStorage.getItem("gioHang");
    if (gioHangStore) {
      gioHang = JSON.parse(gioHangStore);
    }
   
    let indexDelete = gioHang.findIndex(x=>x.id === item.id);
    if(indexDelete !== -1){
      gioHang.splice(indexDelete, 1);
      localStorage.setItem("gioHang",JSON.stringify(gioHang));
      //
      getDatapage();

    }
 }
  

  const onChange = (item ,value) => {
    console.log("changed", value);
    item.soluong = value;
    console.log('getRoomTypes', getRoomTypes);

    //
    let gioHang = [];
        let gioHangStore = localStorage.getItem("gioHang");
        if (gioHangStore) {
          gioHang = JSON.parse(gioHangStore);
        }
    let ghdx = gioHang.find(g=>g.id === item.id);
    if(ghdx !== null){
      ghdx.soluong = value;
    }
    localStorage.setItem("gioHang",JSON.stringify(gioHang));

    setData([...getRoomTypes]);
  };

  return (
    <>
    <HeaderPage/>
     
      <center><h2>Giỏ hàng</h2></center>
        <div style={{ marginBottom: 16, marginTop: 16 , marginLeft : 16}}>
          <DatePicker
            placeholder="Check in"
            onChange={(date, dateString) =>
              setDateTime(moment(dateString, "YYYY-MM-DD"))
            }
            style={{ marginRight: 8 }}
          />
          <DatePicker
            placeholder="Check out"
            onChange={(date, dateString) =>
              setDateTime(moment(dateString, "YYYY-MM-DD"))
            }
            style={{ marginRight: 8 }}
          />

          <Button type="primary"  onClick={handleSearch}>
            Chọn ngày
          </Button>
        </div>
     
      <CsModal
        open={isModalOpen}
        title={getData.title}
        content={content}
        onCancel={handleCancel}
        onOk={handleOk}
      />

      <Table pagination={false} dataSource={getRoomTypes}>
        <Column
          title="Loại phòng"
          key="name"
          render={(roomType) => (
            <>
              {roomType.tenLoaiPhong}

              <HotelRoom
                roomType={roomType}
                onClick={() => showRoomType(roomType)}
              />
            </>
          )}
        />
        <Column
          title="Số lượng khách"
          key="so_luong_nguoi_o"
          render={(roomType) => (
            <>
              {roomType.soLuongNguoiO} <span>Người</span>
            </>
          )}
        />
        <Column
          title="Mức giá hôm nay"
          key="gia_tien"
          render={(roomType) => (
            <>
              {formatNumber(roomType.giaTien)} <span>VNĐ / ngày</span>
            </>
          )}
        />

        <Column
          title="Chọn số lượng phòng"
          key="action"
          render={(roomType) => (
            <>
              <InputNumber
                min={0}
                max={10}
                value={roomType.soluong}
                onChange={(event)=> onChange(roomType, event)}
              />
            </>
          )}
        />
      

        <Column
          title="Action"
          key="dat_phong"
          render={(roomType) => (
            <>
             <button type="primary" className="buttonXoa" onClick={() => handleDelete(roomType)}>Xóa</button>
            </>
          )}
        />
      </Table>
      <br/>
     <center>

     <Link to={"/check-out"}>
                <button type="primary">Đặt ngay</button>
              </Link>
              
     </center>
     <br/>
      <FooterPage />
    </>
  );
};
export default HotelBookingForm;
