import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const LoginAdmin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    navigate("/admin");
  };
  const checkAcc = () => {
    if (email === "admin" && password === "123456") {
      handleLogin();
    } else {
      alert("Tài khoản hoặc mật khẩu không đúng");
    }
  };
  return (
    <div className="container1">
      <div className="logo2">
        
        <div class="logo2">SIGN IN ADMIN </div>
      </div>
      <div className="form-content">
        <div className="title">
          <i class="fa-regular fa-user"></i>
          Tên Đăng Nhập
        </div>
        <div class="logout">
          <input
            type="text"
            placeholder="Nhập tài khoản"
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
        <div className="footer-a">Quên mật khẩu?</div>
      </div>
    </div>
  );
};
export default LoginAdmin;
