import { Link } from "react-router-dom";

const HeaderPage = () => {
  return (
    <>
      <div className="header-container">
        <nav className="header-nav-bar">
          <div className="header-nav-logo">
            <Link to="/">
              <img
                src="assets/images/c529f161-a050-4cd9-9904-d7508a610055.png"
                alt="scorpion hotels logo"
              />
            </Link>
          </div>
          <ul className="header-nav-lists">
            <li className="header-nav-list">
              <Link className="header-nav-link header-active" to="/">
                Trang chủ
              </Link>
            </li>
            <li className="header-nav-list">
              <Link className="header-nav-link" to="/room-and-suit">
                Phòng và dãy phòng
              </Link>
            </li>
            <li className="header-nav-list">
              <Link className="header-nav-link" to="/facilities">
                Cơ sở vật chất
              </Link>
            </li>
            <li className="header-nav-list">
              <Link className="header-nav-link" to="/contact">
                Liên hệ
              </Link>
            </li>
            <li className="header-nav-list">
              <Link className="header-btn header-btn-custom" to="/dang-nhap">
                Đăng Nhập
              </Link>
            </li>
            <li className="header-nav-list">
              <Link className="header-btn header-btn-custom" to="/register">
                Đăng Ký
              </Link>
            </li>
          </ul>

          <div className="header-hamburger-icon">
            <div className="header-hamburger-line-1"></div>
            <div className="header-hamburger-line-2"></div>
            <div className="header-hamburger-line-3"></div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default HeaderPage;
