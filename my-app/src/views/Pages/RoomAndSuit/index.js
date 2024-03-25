
import HeaderPage from "../../../components/Pages/HeaderPage";
import FooterPage from "../../../components/Pages/FooterPage";

const RoomAndSuit = () => {
  return (
    <>
    <HeaderPage/>
      <main>
        <div className="container">
          <div className="page-header-container">
            <h2 className="page-header">Các phòng của khách sạn Scorpion </h2>
            <hr />
            <p className="page-sub-header">
            Tận dụng tối đa các ưu đãi đặc biệt của khách sạn chúng tôi. Tận hưởng sự hiện đại <br />
            sự thoải mái và tầm nhìn toàn cảnh
            </p>
          </div>

          <section className="special-offers">
            <div className="row center-lg">
              <div className="col image-col right-marg">
                <img
                  src="assets/img/hotel-1.webp"
                  alt="room-image"
                  className="small-image"
                />
                <img
                  src="assets/img/hotel-2.webp"
                  alt="room-image"
                  className="small-image"
                />
                <img
                  src="assets/img/hotel-3.webp"
                  alt="room-image"
                  className="small-image"
                />
                <div className="side-by-side-container">
                  <div className="large-image-container">
                    <img
                      src="assets/img/hotel-4-large.webp"
                      alt="room-image-large"
                      className="large-image"
                    />
                  </div>
                  <section className="stacked-image-container">
                    <div>
                      <img
                        src="assets/img/hotel-5.webp"
                        alt="room-image"
                        className="small-image"
                      />
                    </div>
                    <div>
                      <img
                        src="assets/img/hotel-6.webp"
                        alt="room-image"
                        className="small-image"
                      />
                    </div>
                  </section>
                </div>
              </div>
              <div className="col">
                <h3 className="offers-title">Ưu đãi đặc biệt</h3>
                <p className="offers-sub-title">
                Được giảm giá 10% cho phòng tiêu chuẩn nhìn ra thành phố. <br />{" "}
                Ưu đãi có hiệu lực đến ngày 31 tháng 6 năm 2024
                </p>
                <ul className="offers-list">
                  <li>
                    <div>
                      <img
                        src="assets/img/check-square.svg"
                        alt="tick"
                        className="list-icon"
                      />
                      <p className="list-text">Dịch vụ Wifi miễn phí</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <img
                        src="assets/img/check-square.svg"
                        alt="tick"
                        className="list-icon"
                      />
                      <p className="list-text">Đảm bảo giá tốt nhất</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <img
                        src="assets/img/check-square.svg"
                        alt="tick"
                        className="list-icon"
                      />
                      <p className="list-text">Truy cập DSTV miễn phí</p>
                    </div>
                  </li>
                </ul>
                <a href="#" className="btn btn-fill btn-large">
                Xem thêm
                </a>
              </div>
            </div>
          </section>

          <section className="rooms-section">
            
            <div className="row center-lg">
              <div className="rooms col col-2">
                <img
                  src="https://res.cloudinary.com/start-ng/image/upload/v1591638448/Rectangle_42_nastdj.png"
                  alt=""
                  className="rooms-img"
                />
                <h3 className="room-title">Phòng đôi</h3>
                <p className="room-text">
                Đầy đủ các tiện nghi giúp cho chuyến nghỉ dưỡng của bạn thêm<br /> sự thoải mái
                </p>
                <div>
                  <div className="details-container">
                    <img
                      src="assets/img/check-square.svg"
                      alt="tick"
                      className="list-icon"
                    />
                    <p className="list-text">2 người</p>
                  </div>
                  <div className="details-container">
                    <img
                      src="assets/img/bed.png"
                      alt="tick"
                      className="list-icon"
                    />
                    <p className="list-text">1 giường đôi lớn</p>
                  </div>
                </div>
                <p className="amount-text">400.000 VNĐ / ngày</p>
                <div className="buttons-container">
                  <a href="#" className="btn btn-ghost">
                    Xem thêm
                  </a>
                  <a
                    href="https://timbu.com/search?query=hotel"
                    className="btn btn-fill"
                  >
                    Đặt ngay
                  </a>
                </div>
              </div>
              <div className="rooms col col-2">
                <img
                  src="https://res.cloudinary.com/start-ng/image/upload/v1591638449/Rectangle_43_d9eepu.png"
                  alt=""
                  className="rooms-img"
                />
                <h3 className="room-title">Phòng Deluxe</h3>
                <p className="room-text">
                Phòng đôi với các tiện nghi cao cấp mang lại sự sang trọng <br /> và yên tĩnh
                </p>
                <div>
                  <div className="details-container">
                    <img
                      src="assets/img/check-square.svg"
                      alt="tick"
                      className="list-icon"
                    />
                    <p className="list-text">2 người </p>
                  </div>
                  <div className="details-container">
                    <img
                      src="assets/img/bed.png"
                      alt="tick"
                      className="list-icon"
                    />
                    <p className="list-text">1 giường đôi lớn</p>
                  </div>
                </div>
                <p className="amount-text">600.000 VNĐ / ngày</p>
                <div className="buttons-container">
                  <a href="#" className="btn btn-ghost">
                    Xem thêm
                  </a>
                  <a
                    href="https://timbu.com/search?query=hotel"
                    className="btn btn-fill"
                  >
                    Đặt ngay
                  </a>
                </div>
              </div>
              <div className="rooms col col-2">
                <img
                  src="https://res.cloudinary.com/start-ng/image/upload/v1591638448/Rectangle_44_anerdv.png"
                  alt=""
                  className="rooms-img"
                />
                <h3 className="room-title">Phòng gia đình</h3>
                <p className="room-text">
                Phòng được thiết kế cho gia đình với những tiện nghi cho cả cha mẹ<br /> và con cái
                </p>
                <div>
                  <div className="details-container">
                    <img
                      src="assets/img/check-square.svg"
                      alt="tick"
                      className="list-icon"
                    />
                    <p className="list-text">4 người</p>
                  </div>
                  <div className="details-container">
                    <img
                      src="assets/img/bed.png"
                      alt="tick"
                      className="list-icon"
                    />
                    <p className="list-text">2 giường đôi lớn</p>
                  </div>
                </div>
                <p className="amount-text">1.000.000 VNĐ / ngày</p>
                <div className="buttons-container">
                  <a href="#" className="btn btn-ghost">
                    Xem thêm
                  </a>
                  <a
                    href="https://timbu.com/search?query=hotel"
                    className="btn btn-fill"
                  >
                    Đặt ngay
                  </a>
                </div>
              </div>
              <div className="rooms col col-2">
                <img
                  src="https://res.cloudinary.com/start-ng/image/upload/v1591638449/Rectangle_45_mtl458.png"
                  alt=""
                  className="rooms-img"
                />
                <h3 className="room-title">Phòng tổng thống</h3>
                <p className="room-text">
                  Phòng được trang bị các tiện nghi hiện đại nhất với các dịch vụ<br /> tối thượng của khách sạn
                </p>
                <div>
                  <div className="details-container">
                    <img
                      src="assets/img/check-square.svg"
                      alt="tick"
                      className="list-icon"
                    />
                    <p className="list-text">4 người</p>
                  </div>
                  <div className="details-container">
                    <img
                      src="assets/img/bed.png"
                      alt="tick"
                      className="list-icon"
                    />
                    <p className="list-text">2 giường đôi</p>
                  </div>
                </div>
                <p className="amount-text">2.000.000 VNĐ / ngày</p>
                <div className="buttons-container">
                  <a href="#" className="btn btn-ghost">
                    Xem thêm
                  </a>
                  <a
                    href="https://timbu.com/search?query=hotel"
                    className="btn btn-fill"
                  >
                    Đặt ngay
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    <FooterPage/>
    </>
  );
};

export default RoomAndSuit;
