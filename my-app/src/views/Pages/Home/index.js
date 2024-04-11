import React from "react";
import { dataRoom } from "../../../shared/db/dataRoom";
import HeaderPage from "../../../components/Pages/HeaderPage";
import FooterPage from "../../../components/Pages/FooterPage";
import { Link } from "react-router-dom";


const HomePage = () => {
 
  const [bookingMessage, setBookingMessage] = React.useState("");
  
  const handleBooking = () => {
    setBookingMessage("Bạn đã đặt phòng thành công!");
  };

  return (
    <>
      <HeaderPage />

      <div className="jumbotron-container">
        <div className="jumbotron-left">
          <h2 className="jumbotron-header">
          Khám phá sự cân bằng hoàn hảo<br /> Khách sạn, sang trọng và{" "}
            <br />
           sự thoải mái.
          </h2>
          <p>
          Chúng tôi tập trung vào việc cung cấp cho khách hàng mức độ cao nhất
            <br />
           với sự thoải mái và giá cả phải chăng tuyệt vời
          </p>
          <Link  className="btn btn-fill btn-large" to={"/room-and-suit"}>
            Đặt ngay
            </Link>
          
        </div>
      
      </div>

     
   
      <div className="enjoy-container">
        <div className="enjoy-header">
          <h2 className="enjoy-heading">
            Tận hưởng kì nghỉ của bạn <br />
            tại khách sạn của chúng tôi
          </h2>
          <hr className="horizontal" />
          <p>
            Chúng tôi còn hơn cả một khách sạn bởi vì chúng tôi có thể
            <br /> kết hợp tiêu chuẩn chất lượng của một khách sạn
            <br /> với ưu điểm của một căn hộ.
          </p>
        </div>
        <div className="enjoy-services">
          <div className="first-col">
            <div className="upper">
              <span>
                <img
                  src="./assets/img/clock.svg"
                  alt="clock icon"
                  className="enjoy__clock-icon"
                />
              </span>
              <h3>Dịch vụ phòng 24/24</h3>
              <p>
                Bạn có thể sử dụng dịch vụ phòng 24 giờ một ngày tại khách sạn của chúng tôi.
              </p>
            </div>
            <div className="lower">
              <span>
                <img
                  src="./assets/img/database.svg"
                  alt="fitness icon"
                  className="enjoy__fitness-icon"
                />
              </span>
              <h3>Thể hình và Spa</h3>
              <p>
              Sử dụng phòng tập thể dục và Spa là một phần trong gói khách sạn của chúng tôi khi bạn
                 thực hiện đặt vé.
              </p>
            </div>
          </div>
          <div className="sec-col">
            <div className="upper">
              <span>
                <img
                  src="./assets/img/coffee.svg"
                  alt="coffee icon"
                  className="enjoy__coffee-icon"
                />
              </span>
              <h3>Nhà hàng và quán bar</h3>
              <p>
              Bạn có quyền truy cập vào các nhà hàng và quán bar hiện đại nhất thế giới
                 tại khách sạn của chúng tôi
              </p>
            </div>
            <div className="lower">
              <span>
                <img
                  src="./assets/img/wifi.svg"
                  alt="wifi icon"
                  className="enjoy__wifi-icon"
                />
              </span>
              <h3>Truy cập Wifi miễn phí</h3>
              <p>
              Bạn có thể truy cập các dịch vụ Wi-Fi miễn phí 24 giờ bất kể đâu và
                 bất cứ phòng nào.
              </p>
            </div>
          </div>
          <div className="third-col cont">
            <img
              src="./assets/img/ant-design_play-circle-filled.svg"
              alt="video play icon"
              className="enjoy__play-icon"
            />
            <img
              src="./assets/img/video link.webp"
              alt="women in swimming pool"
              className="third-col-video"
            />
          </div>
        </div>
      </div>

      <section className="special-offers">
        <div className="page-header-container">
          <h2 className="page-header">
          Đơn giản là<br />
          khẩu hiệu tối thượng
          </h2>
        </div>
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
              className="small-image img-hide"
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
            <p className="offers-sub-title">
            Thực tế là chúng tôi được điều hành bởi các chuyên gia khách sạn
              <br />
              và được trang bị những nhà thiết kế nội thất giỏi nhất thế giới<br />đó là lý do tại sao các phòng và dãy phòng của chúng tôi không ai sánh kịp trong <br />
              khu này
            </p>
            <ul className="offers-list">
              <li>
                <div>
                  <img
                    src="assets/img/check-square.svg"
                    alt="tick"
                    className="list-icon"
                  />
                  <p className="list-text">Phòng Thường</p>
                </div>
              </li>
              <li>
                <div>
                  <img
                    src="assets/img/check-square.svg"
                    alt="tick"
                    className="list-icon"
                  />
                  <p className="list-text">Phòng Đôi</p>
                </div>
              </li>
              <li>
                <div>
                  <img
                    src="assets/img/check-square.svg"
                    alt="tick"
                    className="list-icon"
                  />
                  <p className="list-text">Phòng Deluxe</p>
                </div>
              </li>
              <li>
                <div>
                  <img
                    src="assets/img/check-square.svg"
                    alt="tick"
                    className="list-icon"
                  />
                  <p className="list-text">Phòng Gia Đình</p>
                </div>
              </li>
            </ul>
            <Link  className="btn btn-fill btn-large centered" to={"/room-and-suit"}>
            Đặt ngay
            </Link>
          
          </div>
        </div>
      </section>

      <div className="review-container">
        <div className="review-header">
          <h2 className="review-title">Đánh giá của khách hàng</h2>
          <hr className="horizontal" />
          <p className="">
          Chúng tôi rất tự hào về các dịch vụ chúng tôi cung cấp cho khách hàng.
            <br />
            Đọc những lời từ những khách hàng đã trải nghiệm khách sạn của chúng tôi.
          </p>
        </div>
        <div className="cards-container">
          <div className="card">
            <img
              src="./assets/img/customer1.webp"
              alt=""
              className="card-avi"
            />
            <h2 className="card-title">Mark Essien</h2>
            <h3 className="card-subtitle">Lagos, Nigeria.</h3>
            <p className="card-desc">
              Đây là khách sạn tuyệt vời nhất từ trước đến nay. Tôi đã đi 15 nước và ở hơn 50 khách sạn khác nhau nhưng ở đây cho tôi trải nghiệm tuyệt vời nhất
            </p>
          </div>
          <div className="card">
            <img
              src="./assets/img/customer2.webp"
              alt=""
              className="card-avi"
            />
            <h2 className="card-title">Seyi Onifade</h2>
            <h3 className="card-subtitle">ShangHai, China.</h3>
            <p className="card-desc">
              Khách sạn Scorpion cho bạn các phòng với chất lượng tuyệt vời nhất và cho tôi có cảm giác thoải mái như ở nhà.
            </p>
          </div>
          <div className="card">
            <img
              src="./assets/img/customer3.webp"
              alt=""
              className="card-avi"
            />
            <h2 className="card-title">Fayemi Alexa</h2>
            <h3 className="card-subtitle">BangKok, ThaiLand.</h3>
            <p className="card-desc">
              Gia đình tôi và tôi rất vui và thoải mái tại khách sạn này.
              Chắc chắn chúng tôi sẽ trở lại vào lần tới.
            </p>
          </div>
        </div>
      </div>

      <FooterPage />
    </>
  );
};

export default HomePage;
