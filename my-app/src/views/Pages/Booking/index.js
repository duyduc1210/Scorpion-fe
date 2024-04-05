import React, { useEffect, useState } from "react";
import { message, Button } from "antd"; // Import các thư viện cần thiết
import { Space, Table, Tag, InputNumber, DatePicker, TimePicker  } from "antd";
import "./HotelBookingForm.css"; // Import CSS cho form (bạn có thể tạo file CSS riêng)
import Column from "antd/es/table/Column";
import HotelRoom from "../RoomAndSuit/HotelRoom";
import { roomTypes } from "../../../shared/db/dataRoom";
import CsModal from "../RoomAndSuit/CsModal";
import moment from 'moment';
import RoomTypeDetail from "../RoomAndSuit/RoomTypeDetail";
import RoomApi from "../../../shared/api/RoomApi";
import apiRequest from "../../../shared/api/loginApi";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";



const HotelBookingForm = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const {  setError, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const onHandleLogin = async (data) =>{
  
    try {
      const result = await apiRequest.loginGuest(data);
      if(result.data){
        localStorage.setItem('guest_id', JSON.stringify(result.data));
        navigate("/booking");
      } else{
        messageApi.open({
          type: 'warning',
          content: 'Bạn phải đăng nhập để đặt phòng',
        });
         
      }
    } catch (error) {
      
    }
  }
  const [dateTime, setDateTime] = useState(null);


    const handleSearch = () => {
        if (dateTime) {
            // Thực hiện tìm kiếm với ngày và giờ được chọn
            alert("Ngày tìm kiếm:", dateTime.format("YYYY-MM-DD"));
        } else {
            alert("Vui lòng chọn ngày và giờ để tìm kiếm.");
        }
      }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [getRoomTypes, setRoomTypes] = useState([]);
  const [mode, setMode] = useState("");
  const [getData, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      
      try {
        const result = await RoomApi.getAll();
        setRoomTypes(result.data);
        
      } catch (error) {
        
      }
      
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
      newData.title = data.tenLoaiPhong;
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
    if (number !== undefined) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    return "";
};

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onChange = (value) => {
    console.log('changed', value);
  };
  return (
    
    <>
   <center>
   <div style={{ marginBottom: 16, marginTop: 16}}>
            <DatePicker
                placeholder="Check in"
                onChange={(date, dateString) => setDateTime(moment(dateString, "YYYY-MM-DD"))}
                style={{ marginRight: 8 }}
            />
            <DatePicker
                placeholder="Check out"
                onChange={(date, dateString) => setDateTime(moment(dateString, "YYYY-MM-DD"))}
                style={{ marginRight: 8 }}
            />
           
            <Button type="primary" onClick={handleSearch}>Tìm kiếm</Button>
        </div>
   </center>
    <CsModal
        open={isModalOpen}
        title={getData.title}
        content={content}
        onCancel={handleCancel}
        onOk={handleOk}
      />

      <Table pagination={false} dataSource={getRoomTypes}>

         
        <Column title="Loại phòng" key="name" render={(roomType) =>(
          <>
            {roomType.tenLoaiPhong}
           
                <HotelRoom
                  roomType={roomType}
                  onClick={() => showRoomType(roomType)}
                />
              
            
          </>
        )}/>
        <Column title="Số lượng khách"  key="so_luong_nguoi_o"  render={(roomType) => (
          <>
            {roomType.soLuongNguoiO} <span>Người</span>
          </>
        )}/>
        <Column title="Mức giá hôm nay"  key="gia_tien" render={(roomType) => (
         <>
          {formatNumber(roomType.giaTien)} <span>VNĐ</span>
         </>
        )}/>
       
        <Column title="Chọn số lượng phòng" dataIndex="action" key="action" render={(roomType) =>(
          <>
            <InputNumber min={0} max={10} defaultValue={0} onChange={onChange} /> <span>/Phòng trống</span>
          </>
        )}/>
        <Column title="Đặt phòng" dataIndex="dat_phong" key="dat_phong" render={(roomType) => (
          <>
            <Button type="primary"  onClick={setIsModalOpen}>Đặt phòng</Button>
          </>
        )} />
        
      </Table>
      
    </>
    
  );
  
};
export default HotelBookingForm;
