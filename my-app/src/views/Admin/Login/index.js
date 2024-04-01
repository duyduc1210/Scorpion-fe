import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useMutation, } from '@tanstack/react-query';

// import * as UserService from "../../../services/UserService"
import axios from "axios";


const LoginAdmin = () => {

  // const mutation = useMutation({
  //   mutationFn: data => UserService.loginUser(data)
  // })

  // console.log(mutation);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    // mutation.mutate({
    //   email,
    //   password
    // })
    navigate("/admin");
  };
  const checkAcc = async () => {
    const body = {
      soDienThoai: email,
      password
    }
    try {
      const response = await axios.post("http://localhost:8080/admin/login", body)
      if (response.status === 200) {
        // push vào màn home
        handleLogin();

        // luu response vào localstorage

        // nếu localstorage có tenTaiKhoan && idQuyenHan thì mới được vào màn trong
        // không thì push sang màn login
        
      }
      // console.log("response", response);
    } catch (error) {
      console.log("error", error);
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
