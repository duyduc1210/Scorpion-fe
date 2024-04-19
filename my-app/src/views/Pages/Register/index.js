import React from "react";
import { Link } from "react-router-dom";

const PageRegister = () => {

  return (
    <div className="containerr">
      <div className="logo">
      <Link to={"/dang-nhap"} className="link">
          <div class="logo1">ĐĂNG NHẬP </div>
      </Link>
      <Link to={"/register"} className="link">
          <div class="logo1">ĐĂNG KÝ</div>
      </Link>
      
        
      </div>
      <div className="form-content">
        <div className="title">Họ và tên</div>

        <div class="logout">
          <input type="text" />
        </div>
        <div className="title">Số Điện Thoại (Sử dụng để làm tên đăng nhập)</div>

        <div class="logout"> 
          <input type="text" />
        </div>
        <div className="title">Email</div>
        
        <div class="logout">
          <input type="text" />
        </div>
        <div className="tittle">Giới tính </div>
        <br/>

        <div >
          <input className="logout1" type="radio" name="gender" />
          Nam
          
          <input className="logout2" type="radio" name="gender"  /> 
          Nữ
        </div>
       
        <br/>
        <div className="title">Mật khẩu </div>
        <div class="logout">
          <input type="text" />
        </div>

        <div className="title">Xác nhận mật khẩu</div>
        <div class="logout">
          <input type="text" />
        </div>
        <div>

          <button type="submit">Tạo tài khoản </button>
        </div>
      </div>
    </div>
  );
};
export default PageRegister;
