import React, { useEffect, useState } from "react";
import "./BookingForm.css";
import { useForm } from "react-hook-form";
import { Table, message } from "antd";
import Column from "antd/es/table/Column";
import KhachApi from "../../../shared/api/KhachApi";
import RoomApi from "../../../shared/api/RoomApi";
import BookingApi from "../../../shared/api/BookingApi";
import STATUS from "../../../shared/store";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const [getCurrentUser, setCurrentUser] = useState({});
  const [getCurrentUserId, setCurrentUserId] = useState(null);
  const [messageApi, contextHolder] = message.useMessage();

  const [getRoomTypes, setRoomTypes] = useState([]);

  const navigate = useNavigate();
  const [getTotal, setTotal] = useState(0);

  useEffect(() => {
    const getGioHang = async () => {
      try {
        const result = await RoomApi.getAll();
        let dataRaw = result.data;
        let dataNew = [];
        let gioHang = [];
        let gioHangStore = localStorage.getItem("gioHang");
        if (gioHangStore) {
          gioHang = JSON.parse(gioHangStore);
        }

        let gioHangNew;
        let gioHangNewStore = localStorage.getItem("newGioHang");
        if (gioHangNewStore) {
          gioHangNew = JSON.parse(gioHangNewStore);
        }

        if (gioHangNew) {
          setValue("checkIn", gioHangNew.thoiGianVao);
          setValue("checkOut", gioHangNew.thoiGianRa);
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

        const totalPrices = dataNew.map((x, index) => {
          let fix;
          let gioData = gioHang.find((g) => g.id === x.id);
          if (gioData != null) {
            fix = x.giaTien * x.soluong;
          }
          return fix;
        });

        const totalPrice = totalPrices.reduce((acc, curr) => acc + curr, 0);
        setTotal(totalPrice);

        setRoomTypes(dataNew);
      } catch (error) {}
    };

    const guest_id = JSON.parse(localStorage.getItem("guest_id"));
    console.log(guest_id);
    setCurrentUserId(guest_id.idThongTinKhachDat);
    getGioHang();
  }, []);

  useEffect(() => {
    const getDataKhach = async () => {
      if (getCurrentUserId !== null) {
        try {
          const result = await KhachApi.get(getCurrentUserId);
          console.log(result.data);
          setCurrentUser(result.data);

          const { hoTen, email, soDienThoai } =
            result.data;

          setValue("customerName", hoTen);
          setValue("email", email);
          setValue("phoneNumber", soDienThoai);
        } catch (error) {}
      }
    };

    getDataKhach();
  }, [getCurrentUserId]);

  const formatNumber = (number) => {
    if (number !== undefined) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    return "";
  };

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? "0" + day : day}/${
      month < 10 ? "0" + month : month
    }/${year}`;
  };

  const calculatePrice = (checkInDate, checkOutDate, pricePerDay) => {
    const startDate = new Date(checkInDate);
    const endDate = new Date(checkOutDate);

    // Chuyển đổi ngày thành timestamp (milliseconds)
    const startTimestamp = startDate.getTime();
    const endTimestamp = endDate.getTime();

    // Số mili giây trong 1 ngày
    const oneDay = 1000 * 60 * 60 * 24;

    // Tính số ngày giữa hai ngày
    const numberOfDays = Math.round((endTimestamp - startTimestamp) / oneDay);

    // Tính tổng giá tiền
    const totalPrice = numberOfDays * pricePerDay;

    return totalPrice;
  };

  const convertDate = (dateString) => {
    const parts = dateString?.split("/");
    if (parts?.length === 3) {
      const [day, month, year] = parts;
      // Đảo ngược thứ tự và nối lại với dấu "-"
      return `${year}-${month}-${day}`;
    } else {
      return null; // Trả về null nếu định dạng không hợp lệ
    }
  };

  const convertDateString = (dateString) => {
    const parts = dateString.split("/"); // Tách chuỗi thành các phần tử dựa trên dấu "/"
    let day = parseInt(parts[0], 10); // Lấy ngày và chuyển đổi sang số nguyên
    let month = parseInt(parts[1], 10); // Lấy tháng và chuyển đổi sang số nguyên (0-indexed)
    let year = parseInt(parts[2], 10); // Lấy năm và chuyển đổi sang số nguyên

    if (month < 10) {
      month = "0" + month;
    }
    if (day < 10) {
      day = "0" + day;
    }

    const convertDate = `${year}-${month}-${day} 12:00:00`;

    return convertDate;
  };

  const onHandleBooking = async (data) => {
    let loaiPhongDat = getRoomTypes.map((x) => {
      return {
        loaiPhongIdLoaiPhong: { id: x.id },
        soLuong: x.soluong,
     
      };
    });
    let newData = {
      thongTinKhachDatIdKhachDat: {
        id: data.currentUserId,
      },
      hinhThucDatIdHinhThucDat: {
        id: data.hinhThucDat,
      },
      thoiGianVao: `${data.checkIn} 12:00:00`,
      thoiGianRa: `${data.checkOut} 11:00:00`,
      tongTien: data.total,
      trangThai: STATUS.success,
      loaiPhongDatDto: loaiPhongDat,
      ghiChu: data.ghiChu
    
  
    };

    localStorage.setItem("gioHangThanhToan", JSON.stringify(newData));
    navigate("/Paypal");
    console.log(newData)
  };

  setValue("totalPrice", 0);
  setValue("quantity", 0);
  setValue("hinhThucDat", 1);
  setValue("ghiChu");
  
  setValue("currentUserId", getCurrentUserId);
  setValue(
    "total",
    calculatePrice(
      convertDate(watch("checkIn")),
      convertDate(watch("checkOut")),
      getTotal
    )
  );

  return (
    <>
      {contextHolder}
      <center>
        <h2>Thông tin đặt phòng</h2>
        <hr />
        <h4>🏨 Chính sách đặt phòng 🏨</h4>
        <p className="list-text">
          - Khách hàng vui lòng thanh toán trước 100% số tiền để đặt phòng. Đây
          được coi là tiền cọc và là tiền thanh toán trước của khách hàng, số
          tiền này sẽ được trừ khi khách hàng trả phòng.
        </p>
        <br />
        <p className="list-text">
          - Khách hàng vui lòng đến nhận phòng tại khách sạn đúng giờ có thể đến
          sớm 20p hoặc nếu đến muộn vui lòng liên lạc thông báo trước với khách
          sạn.
        </p>
        <br />
        <br />

        <h4>🛎️ Chính sách hủy phòng 🛎️</h4>
        <p className="list-text">
          - Số tiền cọc sẽ được hoàn từ 2-7 ngày kể từ khi đơn của khách hàng
          được hủy thành công.
        </p>
        <br />
        <p className="list-text">
          - Nếu khách hàng muốn hủy phòng vui lòng liên hệ với phía khách sạn
          trước 1 ngày.
        </p>
        <br />
        <p className="list-text">
          - Với trường hợp hủy phòng không thông báo trước 1 ngày với khách sạn
          hay không đến nhận phòng sẽ không được hoàn lại tiền cọc.
        </p>
        <br />
        <br />
      </center>
      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ flex: "1", marginRight: "20px", marginLeft: "10px" }}>
          <form onSubmit={handleSubmit(onHandleBooking)}>
            <label>Tên khách hàng: </label>
            <input
              className="customerNameCss"
              type="text"
              {...register("customerName", { required: true })}
              disabled
            />

            <label>Email: </label>
            <input
              className="emailCss"
              type="email"
              {...register("email", { required: true })}
              disabled
            />

            <label>Số điện thoại: </label>
            <input
              type="text"
              name="phoneNumber"
              className="phoneNumberCss"
              {...register("phoneNumber", { required: true })}
              disabled
            />

            <label>Hình thức đặt:</label>
            <input
              type="text"
              name="hinhThucDat"
              className="hinhThucDatCss"
              value={"Online"}
              disabled
            />

            <label>Thời gian nhận phòng:</label>
            <input
              type="text"
              name="thoiGianVao"
              className="checkInCss"
              {...register("checkIn", { required: true })}
              disabled
            />

            <label>Thời gian trả phòng:</label>
            <input
              type="text"
              name="thoiGianRa"
              className="checkOutCss"
              {...register("checkOut", { required: true })}
              disabled
            />

            <label>Ghi chú:</label>
            <input
              type="text"
              name="ghiChu"
              className="checkOutCss"
              {...register("ghiChu", { required: false })}
              
            />

            <div />
          </form>
        </div>

        <div style={{ flex: "1" }}>
          <Table pagination={false} dataSource={getRoomTypes}>
            <Column
              title="Loại phòng"
              key="name"
              render={(roomType) => <>{roomType.tenLoaiPhong}</>}
            />

            <Column
              title="Số lượng "
              key="action"
              render={(roomType) => <>{roomType.soluong}</>}
            />
            <Column
              title="Tiền phòng / ngày"
              key="gia_tien"
              render={(roomType) => (
                <>
                  {formatNumber(roomType.giaTien * roomType.soluong)}{" "}
                  <span>VNĐ </span>
                </>
              )}
            />
          </Table>
        </div>

        <div />
      </div>
      <center>
        <label className="tongTien">
          Tổng tiền:{" "}
          {formatNumber(
            calculatePrice(
              convertDate(watch("checkIn")),
              convertDate(watch("checkOut")),
              getTotal
            )
          )}
          <span> VNĐ</span>
        </label>
        <br />
        <button
          className="buttonDatPhong"
          onClick={handleSubmit(onHandleBooking)}
        >
          Thanh Toán
        </button>
        <br />
      </center>
    </>
  );
};

export default CheckOut;
