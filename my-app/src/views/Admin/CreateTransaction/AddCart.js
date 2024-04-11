import React, { useState, } from "react";
import { DatePicker, Checkbox } from 'antd';
import { Input } from 'antd';

const { TextArea } = Input;
const onChange1 = (e) => {
    console.log(`checked = ${e.target.checked}`);
};
const onChange = (date, dateString) => {
    console.log(date, dateString);
};
export const AddCart = () => {
    return (
        <div style={{ display: "flex" }}>
            <div style={{}}>
                <div><Checkbox onChange={onChange1}>Thông tin</Checkbox></div>
                <div><Checkbox onChange={onChange1}>Chưa gán phòng</Checkbox></div>
            </div>
            <div style={{ marginLeft: "50px" }}>
                <p>Người đại diện đặt phòng</p>
                <div style={{ fontWeight: "bold" }}>Họ và Tên</div>
                <TextArea rows={2} style={{ width: 205, height: 30, marginleft: "20px" }} />
                <div style={{ fontWeight: "bold" }}>Địa chỉ</div>
                <TextArea rows={2} style={{ width: 205, height: 30, marginleft: "20px" }} />
                <div style={{ fontWeight: "bold" }}>Ngày sinh:</div>
                <DatePicker onChange={onChange} placeholder="" style={{ width: 205, height: 30, marginleft: "20px" }} />
                <div style={{ fontWeight: "bold" }}>Loại giấy tờ</div>
                <TextArea rows={2} style={{ width: 205, height: 30, marginleft: "20px" }} />
                <div style={{ fontWeight: "bold" }}>Số giấy tờ</div>
                <TextArea rows={2} style={{ width: 205, height: 30, marginleft: "20px" }} />
            </div>
            <div style={{ marginTop: "25px", marginLeft: "100px" }}>
                <div style={{ fontWeight: "bold" }}>Số Điện Thoại</div>
                <TextArea rows={2} style={{ width: 205, height: 30, marginleft: "20px" }} />
                <div style={{ fontWeight: "bold" }}>Email:</div>
                <TextArea rows={2} style={{ width: 205, height: 30, marginleft: "20px" }} />
                <div style={{ fontWeight: "bold" }}>Giới tính:</div>
                <div style={{ display: "flex" }}>
                    <div style={{ fontWeight: "bold" }}><input type="radio" />Nam</div>
                    <div style={{ fontWeight: "bold" }}><input type="radio" />Nữ</div>
                </div>
                <div style={{ fontWeight: "bold" }}>Quốc Tịch</div>
                <TextArea rows={2} style={{ width: 205, height: 30, marginleft: "20px" }} />
            </div>
        </div>
    )
}
export default AddCart