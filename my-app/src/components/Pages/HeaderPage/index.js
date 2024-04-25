import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button, message, Space } from 'antd';
const HeaderPage = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  let btnAuth;

  const handleLogOut = async () => {
    await localStorage.clear();
    navigate("/")
  }
  const onClickDP = () =>{
    if (guest_id) {
      navigate("/booking")
      }
    else {
    messageApi.open({
      type: 'warning',
      content: 'Bạn phải đăng nhập để đặt phòng',
    });           
    }
  };

  const guest_id = localStorage.getItem('guest_id');
  if(guest_id){
    // eslint-disable-next-line react-hooks/exhaustive-deps
    btnAuth = (<>
     <li className="header-nav-list"> <NavLink className={({isActive}) => isActive ? 'header-nav-link header-active' : 'header-nav-link'} to="/booking" activeClassName="header-active" > Giỏ hàng</NavLink></li>
     <li className="header-nav-list"> <NavLink className={({isActive}) => isActive ? 'header-nav-link header-active' : 'header-nav-link'} to="/historyBook" activeClassName="header-active" >Lịch sử đặt</NavLink></li>

<li className="header-nav-list"><Link className="header-btn header-btn-custom" onClick={handleLogOut} >Đăng Xuất</Link></li>
    </>);
  }else{
    btnAuth = 
    (<><li className="header-nav-list"><Link className="header-btn header-btn-custom" to="/dang-nhap">Đăng Nhập</Link></li>
       <li className="header-nav-list"><Link className="header-btn header-btn-custom" to="/register">Đăng Ký</Link></li></>);
  }

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
                <NavLink className={({isActive}) => isActive ? 'header-nav-link header-active' : 'header-nav-link'} to="/" >
                  Trang chủ
                </NavLink>
            </li>
            <li className="header-nav-list">
              <NavLink className={({isActive}) => isActive ? 'header-nav-link header-active' : 'header-nav-link'} to="/room-and-suit" >
                Phòng và dãy phòng
              </NavLink>
            </li>
            <li className="header-nav-list">
              <NavLink className={({isActive}) => isActive ? 'header-nav-link header-active' : 'header-nav-link'} to="/facilities" >
                Cơ sở vật chất
              </NavLink>
            </li>
            <li className="header-nav-list">
              <NavLink className={({isActive}) => isActive ? 'header-nav-link header-active' : 'header-nav-link'} to="/contact" >
                Liên hệ
              </NavLink>
            </li>
          
            {btnAuth}
            
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
