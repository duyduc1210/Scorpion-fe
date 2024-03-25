import FooterPage from "../../../components/Pages/FooterPage";
import HeaderPage from "../../../components/Pages/HeaderPage";

const Facilities = () => {
  return (
    <>
      <HeaderPage />
      <main>
        <div className="container" />

        <div className="page-header-container">
          <h2 className="page-header">Cơ sở vật chất của khách sạn Scorpion</h2>
          <hr />
          <p className="page-sub-header">
            Tận dụng tối đa các cơ sở khách sạn của chúng tôi. Tận hưởng các
            <br /> tiện nghi hiện đại của chúng tôi
          </p>
        </div>

        <section className="upper-section">
          <div className="row center-lg">
            <div className="col image-col right-marg">
              <div className="large-image-container">
                <img
                  src="./assets/img/telephone.webp"
                  alt="room-image-large"
                  className="large-image"
                />
              </div>
            </div>

            <div className="col">
              <h3 className="right-title">
                Truy cập vào dịch vụ điện thoại <br /> kỹ thuật số 24/24
              </h3>
              <p>
                Với các dịch vụ điện thoại kỹ thuật số giàu tính năng của chúng
                tôi, bạn
                <br /> sẽ có sự linh hoạt mà bạn luôn mong muốn <br /> liên lạc
                bằng giọng nói từ nhà hoặc doanh nghiệp của bạn.
              </p>
              <br />
              <h3>Thêm chi tiết</h3>
              <ul className="facilities-list">
                <li>
                  <div>
                    <img
                      src="assets/img/check-square.svg"
                      alt="tick"
                      className="list-icon"
                    />
                    <p className="list-text">Khoảng cách không giới hạn</p>
                  </div>
                </li>
                <li>
                  <div>
                    <img
                      src="assets/img/check-square.svg"
                      alt="tick"
                      className="list-icon"
                    />
                    <p className="list-text">ID Người gọi</p>
                  </div>
                </li>
                <li>
                  <div>
                    <img
                      src="assets/img/check-square.svg"
                      alt="tick"
                      className="list-icon"
                    />
                    <p className="list-text">Cuộc gọi chờ</p>
                  </div>
                </li>
              </ul>
              <a href="#" className="btn btn-fill btn-large">
                Chi tiết
              </a>
            </div>
          </div>
        </section>

        <div className="up">
          <h2 className="page-header">Các cơ sở vật chất khác</h2>
          <hr />
        </div>

        <div className="container">
          <div className="containera">
            <div className="gallery">
              <div className="gallery-item">
                <img
                  className="gallery-image"
                  src="./assets/img/gymnasium.webp"
                  alt="gym"
                />
                <h4>PHÒNG GYM</h4>
                <p className="imggrid">
                  Chúng tôi có phòng tập thể dục được trang bị tốt nhất trong
                  nước với một người hướng dẫn luôn luôn sẵn sàng.
                </p>
              </div>

              <div className="gallery-item">
                <img
                  className="gallery-image"
                  src="./assets/img/helipad.webp"
                  alt="helipad"
                />
                <h4>BÃI ĐÁP TRỰC THĂNG</h4>
                <p className="imggrid">
                  Được tiếp cận sân bay trực thăng hiện đại cùng với các phi
                  công có trình độ trên mười năm kinh nghiệm.
                </p>
              </div>

              <div className="gallery-item">
                <img
                  className="gallery-image"
                  src="./assets/img/restaurants.webp"
                  alt="restaurants"
                />
                <h4>NHÀ HÀNG</h4>
                <p className="imggrid">
                  Chúng tôi có những món ăn địa phương và xuyên lục địa ngon
                  nhất mà bạn từng có nếm thử trước đây trong khách sạn của
                  chúng tôi.
                </p>
              </div>

              <div className="gallery-item">
                <img
                  className="gallery-image"
                  src="./assets/img/swimming_pool.webp"
                  alt="swim"
                />
                <h4>BỂ BƠI</h4>
                <p className="imggrid">
                  Chúng tôi có hồ bơi được trang bị tốt nhất trong cả nước với
                  người hướng dẫn đang chờ để hướng dẫn bạn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FooterPage />
    </>
  );
};

export default Facilities;
