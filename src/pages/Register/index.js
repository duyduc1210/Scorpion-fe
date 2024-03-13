import React from 'react';
const RegisterPage = () => {
   return(
    <div className="containerr">  
        <div className="logo">
        <div class="logo1">SIGN UP </div> 
        <div class="logo1">SIGN IN </div> 
      </div> 
      <div className="form-content">
      <div className="title">
      Họ và tên</div>
      <div class="logout">
        <input type="text" />
        </div>
      <div className="title">
       Số Điện Thoại(Sử dụng để làm tên đăng nhập)</div>
      <div class="logout">
        <input type="text" />
        </div>
      <div className="title">
       Email</div>
      <div class="logout">
        <input type="text" />
        </div>
        <div className="tittle">
       Giới tính </div>
      <div class="logout">
        <input type="radio"/>Nam
        </div>
        <div class="logout">
        <input type="radio"/>Nữ
        </div>
        <div className="title">
       Mật khảu </div>
      <div class="logout">
        <input type="text" />
        </div>
        <div className="title">
       Xác nhậm mật khẩu</div>
      <div class="logout">
        <input type="text" />
        </div>
        <div >
        <button >Tạo tài khoản </button>
      </div>
        </div>
      </div>

)
}
export default RegisterPage;
