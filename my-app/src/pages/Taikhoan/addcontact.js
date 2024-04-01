import React, { useState, } from "react";
export const Content3 = () => {
    return (
        <div style={{display:"flex"}}>
            <div style={{}}>
                <div>
                    <p>Tên tài khoản</p>
                    <input type="text" />
                </div>
                <div>
                    <p>Mật khẩu</p>
                    <input type="text" />
                </div>
                <div>
                    <p>CCCD</p>
                    <input type="text" />
                </div>
            </div>
            <div style={{marginLeft:"100px"}}>
                <div>
                    <p>Họ và tên</p>
                    <input type="text" />
                    
                </div>
                <div>
                    <p>Số Điện Thoại</p>
                    <input type="text" />
                </div>
                <div>
                    <p>Email</p>
                    <input type="text" />
                </div>
            </div>
        </div>
    )
}
export default Content3