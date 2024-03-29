export const dataRoom = [
  {
    id: 1,
    name: "Phòng 111",
    type: "Phòng thường",
    prices: "200000",
    bad: "01 giường đơn",
    limitedPer: "2 người lớn, 1 trẻ em",
    s: "25m²",
    huong: " Nhìn ra vườn",
    baoGom: "Bữa sáng+ dịch vụ",
    image:
      "https://media.vneconomy.vn/w800/images/upload/2022/07/27/khach-san-5-sao-da-nang.jpg",
  },
  {
    id: 1,
    name: "Phòng 111",
    prices: "200000",
    bad: 1,
    limitedPer: "2 người lớn, 1 trẻ em",
    s: "35m²",
    huong: " nhìn ra thành phố",
    baoGom: "Bữa sáng+ dịch vụ",
    image:
      "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1627034532/blog/ulhhahezsa1zahjtpmdm.webp",
  },
];

export const roomTypes = [
  {
    id: 1,
    ten_loai_phong: "Standard Room",
    huong_nhin: "Hướng lung tung",
    dien_tich: "60m2",
    image: "https://res.cloudinary.com/start-ng/image/upload/v1591638448/Rectangle_42_nastdj.png",
    gia_tien: 400000,
    so_luong_nguoi_o: 2,
    mo_ta: "Đầy đủ các tiện nghi giúp cho chuyến nghỉ dưỡng của bạn thêm sự thoải mái",
    trang_thai: true
  },
  {
    id: 2,
    ten_loai_phong: "Deluxe",
    huong_nhin: "Hướng View biển",
    dien_tich: "50m2",
    image: "https://res.cloudinary.com/start-ng/image/upload/v1591638449/Rectangle_43_d9eepu.png",
    gia_tien: 600000,
    so_luong_nguoi_o: 4,
    mo_ta: "Đầy đủ các tiện nghi giúp cho chuyến nghỉ dưỡng của bạn thêm sự thoải mái",
    trang_thai: true
  },
  {
    id: 3,
    ten_loai_phong: "Family",
    huong_nhin: "Hướng view thành phố",
    dien_tich: "60m2",
    image: "https://res.cloudinary.com/start-ng/image/upload/v1591638448/Rectangle_44_anerdv.png",
    gia_tien: 800000,
    so_luong_nguoi_o: 2,
    mo_ta: "Đầy đủ các tiện nghi giúp cho chuyến nghỉ dưỡng của bạn thêm sự thoải mái",
    trang_thai: true
  },
  {
    id: 4,
    ten_loai_phong: "President",
    huong_nhin: "Hướng biển + thành phố",
    dien_tich: "60m2",
    image: "https://res.cloudinary.com/start-ng/image/upload/v1591638449/Rectangle_45_mtl458.png",
    gia_tien: 1000000,
    so_luong_nguoi_o: 4,
    mo_ta: "Đầy đủ các tiện nghi giúp cho chuyến nghỉ dưỡng của bạn thêm sự thoải mái",
    trang_thai: true
  },
];


export const uuDais = [
  {
    id: 1,
    title: "Ưu đãi đặc biệt",
    description: "Được giảm giá 10% cho phòng tiêu chuẩn nhìn ra thành phố. Ưu đãi có hiệu lực đến ngày 31 tháng 6 năm 2024",
    attribute: [
      { service: "Dịch vụ wifi miễn phí" },
      { service: "Đảm bảo giá tốt" },
      { service: "Truy cập DSTV miễn phí" },
    ],
    price: 400000,
    number_stay: '2-4 người',
    detail: "Đầy đủ các tiện nghi giúp cho chuyến nghỉ dưỡng của bạn thêm sự thoải mái",
    status: true
  },

];
