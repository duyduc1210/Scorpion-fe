import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../../shared/api/loginApi";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, setError,clearErrors, formState: { errors } } = useForm();

  useEffect(() => {
    const guest_id = JSON.parse(localStorage.getItem('guest_id'));
    if(guest_id){
      navigate("/");
    }
  }, []);

  const onHandleLogin = async (data) =>{
    console.log(errors)
    try {
      const result = await apiRequest.loginGuest(data);
      if(result.data){
        localStorage.setItem('guest_id', JSON.stringify(result.data));
        navigate("/");
      } else{
        setError('isLogin', { message: "Sai tên đăng nhập hoặc mật khẩu" });
      }
    } catch (error) {
      
    }
  }

  const handleClearError = () => {
    // Xóa bỏ lỗi isLogin khi người dùng xóa dữ liệu trong form
    clearErrors('isLogin');
  };
  

  const validatorForm = {
    soDienThoai: {
      ...register('soDienThoai', 
        { required: true}
      )
    },
    password: {
      ...register('password', 
        { required: true}
      )
    }
  }

  return (
    <div className="container1">  

      <div className="logo">
        <div><Link className="logo1"  to="/dang-nhap">ĐĂNG NHẬP</Link></div> 
        <div><Link className="logo1"  to="/register">ĐĂNG KÝ</Link></div> 
      </div> 

      <div className="form-content">
        <form onSubmit={handleSubmit(onHandleLogin)}>
          <div className="title">
            <i  className="fa-regular fa-user"></i>
            Tên Đăng Nhập<span className="required">*</span>
          </div>

          <div className="logout">
            <input type="text" placeholder="Nhập số điện thoại..." {...validatorForm.soDienThoai} onChange={handleClearError} />
            {errors.soDienThoai && <span className="required">Không để trống</span>}
            {errors.isLogin && <span className="required">{errors.isLogin.message}</span>}
          </div>
          

          <div className="title">
            <i className="fa-solid fa-lock"></i>
            Mật Khẩu<span className="required">*</span>
          </div>

          <div className="logout">
            <input type="password" placeholder="Nhập mật khẩu" {...validatorForm.password} onChange={handleClearError} />
            {errors.password && <span className="required">Không để trống</span>}
            {errors.isLogin && <span className="required">{errors.isLogin.message}</span>}
          </div>
          
        </form>
      </div>

      <div className="check">
        <input type="checkbox" />
        Nhớ mật khẩu
      </div>

      <div >
        <button onClick={handleSubmit(onHandleLogin)} >Đăng Nhập</button>
      </div>

      <div className="footer">
        <div className="footer-a"><a href="#">Quên mật khẩu?</a></div>
      </div>

    </div>
);
};
export default LoginPage;
