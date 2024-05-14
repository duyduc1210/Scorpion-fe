import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import registerApi from "../../../shared/api/registerApi";
import { message } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

const PageRegister = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, setError,clearErrors, formState: { errors } } = useForm();

  const [messageApi, contextHolder] = message.useMessage();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  }
  const buttonStyle = {
    padding: "4px",
    color: "#fff",
    cursor: "pointer",
    borderRadius: "4px"
  };

  const onHandleRegister = async (data) => {
    let sex = null;

    if(data.gioiTinh === "1"){
      sex = true;
    }else{
      sex = false;
    }

    let newData = {
      ...data,
      gioiTinh: sex
    }

    try {
      await registerApi.registerGuest(newData) 
      messageApi.open({
        type: "success",
        content: 'Tạo tài khoản thành công, bạn sẽ được chuyển hướng đến trang đăng nhập sau 3 giây',
      });
      setTimeout(() => {
        navigate('/dang-nhap')
      }, 3000); 

    } catch (error) {
      messageApi.open({
        type: "warning",
        content: error.response.data,
      });
    }

  }
  
  const validatorForm = {
    hoTen: {
      ...register('hoTen', 
        { required: true}
      )
    },

    sdt: {
      ...register('sdt', 
        { required: true , pattern: {
          value: /^\d{10}$/,
          message: "Phải là 10 số"
        }}
      )
    },

    email: {
      ...register('email', 
        { required: true}
      )
    }, 

    gioiTinh: {
      ...register('gioiTinh', 
        { required: true}
      )
    },

    matKhau: {
      ...register('matKhau', 
        { required: true}
      )
    },
    reMatKhau: {
      ...register('reMatKhau', 
        { 
          required: "Không để trống",
          validate: (value) => value === password || "Mật khẩu không trùng khớp"
        },
      )
    },
  }



  useEffect(() => {
    
  },[])


  return (

    <div className="containerr">
      {contextHolder}
      <div className="logo">
      <Link to={"/dang-nhap"} className="link">
          <div class="logo1">ĐĂNG NHẬP </div>
      </Link>
      <Link to={"/register"} className="link">
          <div class="logo1">ĐĂNG KÝ</div>
      </Link>
        
      </div>
      <form onSubmit={handleSubmit(onHandleRegister)} className="form-content">

        <div className="title">Họ và tên</div>
        <div class="logout">
          <input type="text" {...validatorForm.hoTen} /> <br/>
          {errors.hoTen && <span className="required">Không để trống</span>}
        </div>

        <div className="title">Số Điện Thoại (Sử dụng để làm tên đăng nhập)</div>
        <div class="logout"> 
          <input type="text"  {...validatorForm.sdt} /> <br/>
          {errors.sdt && errors.sdt.type === "required" && (<span className="required">Không để trống</span>)}
          {errors.sdt && errors.sdt.type === "pattern" && (<span className="required">{errors.sdt.message}</span>)}

        </div>

        <div className="title">Email</div>
        <div class="logout">
          <input type="text" {...validatorForm.email} /> <br/>
          {errors.email && <span className="required">Không để trống</span>}
        </div>

        <div className="tittle">Giới tính </div>
        <br/>
        <div >
          <input className="logout1" type="radio" value={1} name="gender" {...validatorForm.gioiTinh}  />
          Nam
          
          <input className="logout2" type="radio" value={0} name="gender" {...validatorForm.gioiTinh} /> 
          Nữ
        </div>
        {errors.gioiTinh && <span className="required">Không để trống</span>}
       
        <br/>

        <div className="title">Mật khẩu</div>
      <div className="logout">
        <input
        {...validatorForm.matKhau}
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span style={buttonStyle} onClick={toggleShowPassword}>{ showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}</span>
        
       <br/>{errors.matKhau && errors.matKhau.type === "required" && (<span className="required">Không để trống</span>)}
          
       </div>

        <div className="title">Xác nhận mật khẩu</div>
        <div class="logout">
          <input type={showPassword ? "text" : "password"} {...validatorForm.reMatKhau}/>
          <br/>
          <br/>

          {errors.reMatKhau && <span className="required">{errors.reMatKhau.message}</span>}
        </div>
        <div>

          <button type="submit" >Tạo tài khoản </button>
      <br/>
        
        </div>
      </form>
     
    </div>
  );
};
export default PageRegister;
