import React, { useEffect, useState } from "react";
import "./BookingForm.css";
import { useForm } from "react-hook-form";
import { Table, InputNumber} from "antd";
import Column from "antd/es/table/Column";
import HotelRoom from "../RoomAndSuit/HotelRoom";
import KhachApi from "../../../shared/api/KhachApi";

const CheckOut = () => {
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  const [bookingInfo, setBookingInfo] = useState({});
  const [getCurrentUser, setCurrentUser] = useState({});
  const [getRoomTypes, setRoomTypes] = useState([]);
  const [getData, setData] = useState({});

  const guest_id = JSON.parse(localStorage.getItem("guest_id") );

  const formatNumber = (number) => {
    if (number !== undefined) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    return "";
  };

  useEffect(() => {
    const getDataKhach = async () => {
      
      try {
        const result = await KhachApi.get(guest_id.idThongTinKhachDat);
        setCurrentUser(result.data);

        const { hoTen, soDienThoai, email } = getCurrentUser.thongTinKhachDatIdKhachDat;
        setValue("customerName", hoTen);
        setValue("email", email);
        setValue("phoneNumber", soDienThoai);

      } catch (error) {
        
      }
      
    };
    
    getDataKhach();
  }, [guest_id]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingInfo({
      ...bookingInfo,
      [name]: value,
    });
  };

  const onChange = (item, value) => {
    console.log("changed", value);
    item.soluong = value;
    console.log("getRoomTypes", getRoomTypes);

    //
    let gioHang = [];
    let gioHangStore = localStorage.getItem("gioHang");
    if (gioHangStore) {
      gioHang = JSON.parse(gioHangStore);
    }
    let ghdx = gioHang.find((g) => g.id === item.id);
    if (ghdx !== null) {
      ghdx.soluong = value;
    }
    localStorage.setItem("gioHang", JSON.stringify(gioHang));

    setData([...getRoomTypes]);
  };

  const onHandleBooking = async (data) => {
    console.log(data);
  };

  const validatorForm = {
    email: {
      ...register("email", { required: true }),
    },
    customerName: {
      ...register("customerName", { required: true }),
    },
    phoneNumber: {
      ...register("phoneNumber", { required: true }),
    },
    hinhThucDat: {
      ...register("hinhThucDat", { required: true }),
    },
    checkIn: {
      ...register("checkIn", { required: true }),
    },
    checkOut: {
      ...register("checkOut", { required: true }),
    },
    roomType: {
      ...register("roomType", { required: true }),
    },
    quantity: {
      ...register("quantity", { required: true }),
    },
    totalPrice: {
      ...register("totalPrice", { required: true }),
    },
  };

  setValue("totalPrice", 0);
  setValue("quantity", 0);

  return (
    <>
    <center><div className="datPhongBooking">Thông tin đặt phòng</div></center>
      <div style={{ display: "flex" ,gap: "20px"  }}>
        <div style={{ flex: "1", marginRight: "20px", marginLeft: "10px" }}>
          
          <form onSubmit={handleSubmit(onHandleBooking)}>
            <label>Tên khách hàng: </label>
            <input  className = "customerNameCss" type="text" {...validatorForm.customerName} />

            <label>Email: </label>
            <input className = "emailCss" type="email" {...validatorForm.email} />

            <label>Số điện thoại: </label>
            <input
              type="text"
              name="phoneNumber"
              className = "phoneNumberCss"
              {...validatorForm.phoneNumber}
            />

            <label>Hình thức đặt:</label>
            <input
              type="text"
              name="hinhThucDat"
              placeholder="Online"
              className = "hinhThucDatCss"
              readOnly
            />

            <label>Thời gian check in: </label>
            <input type="text" className = "checkInCss"  name="checkIn" {...validatorForm.checkIn} />

            <label>Thời gian check out: </label>
            <input type="text" name="checkOut"  className = "checkOutCss" {...validatorForm.checkOut} />
            <div />

            

         
          </form>
          
        </div>
        
        <div style={{ flex: "1" }}>

              <Table pagination={false} dataSource={getRoomTypes}>
                <Column
                  title="Loại phòng"
                  key="name"
                  render={(roomType) => (
                    <>
                      {roomType.tenLoaiPhong}

                      <HotelRoom roomType={roomType} />
                    </>
                  )}
                />

                <Column
                  title="Số lượng "
                  key="action"
                  render={(roomType) => (
                    <>
                      <InputNumber
                        min={0}
                        max={10}
                        value={roomType.soluong}
                        onChange={(event) => onChange(roomType, event)}
                      />
                    </>
                  )}
                />
                <Column
                  title="Giá tiền"
                  key="gia_tien"
                  render={(roomType) => (
                    <>
                      {formatNumber(roomType.giaTien)} <span>VNĐ / ngày</span>
                    </>
                  )}
                />
              </Table>
            </div>
            <div />
      </div>
      <center>
      <label className="tongTien">Tổng tiền: <span>VNĐ</span></label>
              <br />
              <button type="submit" className="buttonDatPhong">Đặt phòng</button>
              <br />
            </center>
    </>
  );
};

export default CheckOut;
