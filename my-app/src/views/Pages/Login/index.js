import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    navigate("/");
  };
  const checkAcc = () => {
    if (email === "duc123" && password === "12345678") {
      handleLogin();
    } else {
      alert("Tài khoản hoặc mật khẩu không đúng");
    }
  };
  return (
    <div className="container1">
      <div className="logo">
      <Link to={"/dang-nhap"} className="link">
          <div class="logo1">ĐĂNG NHẬP </div>
      </Link>
      <Link to={"/register"} className="link">
          <div class="logo1">ĐĂNG KÝ</div>
      </Link>
     
        
          
       
        
      </div>
      <div className="form-content">
        <div className="title">
          <i class="fa-regular fa-user"></i>
          Tên Đăng Nhập
        </div>
        <div class="logout">
          <input
            type="text"
            placeholder="Số điện thoại"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="title">
          <i class="fa-solid fa-lock"></i>
          Mật Khẩu
        </div>
        <div class="logout">
          <input
            type="password"
            placeholder="Nhập mật khẩu"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
      </div>
      <div class="check">
        <input type="checkbox" />
        Nhớ mật khẩu
      </div>
      <div>
        <button onClick={checkAcc}>Đăng Nhập</button>
      </div>
      <div class="footer">
        <Link to={""} className="link">
        <div className="footer-a">Quên mật khẩu?</div>
        </Link>
      </div>
    </div>
  );
};
export default LoginPage;
