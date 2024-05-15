import { usePayPalScriptReducer, PayPalButtons } from "@paypal/react-paypal-js";
import React, { useState } from "react";
import { useEffect } from "react";
import BookingApi from "../../../shared/api/BookingApi";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

export const ButtonCheckOut = () => {
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const [currency, setCurrency] = useState(options.currency);

  const [gioHangPayPal, setGioHangPayPal] = useState();
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();



  // useEffect(() => {
  //   getGioHangPayPal();
  //   console.log(gioHangPayPal)
  // }, []);

  const getGioHangPayPal = () => {
    let container = localStorage.getItem("gioHangThanhToan");
    let data = JSON.parse(container);

    return data;
    
  };

  const onCurrencyChange = ({ target: { value } }) => {
    setCurrency(value);
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: value,
      },
    });
  };

  const onCreateOrder = (data, actions) => {
    const exchangeRate = 0.0000393;
    const vnd = getGioHangPayPal().tongTien;
     // Chuyển đổi mệnh giá từ VND sang USD
    const usd = vnd * exchangeRate;

    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: usd.toString(),
          },
        },
      ],
    });
  };

  const onApproveOrder  = async (data, actions) => {
    try  {
      debugger;
      await BookingApi.add(getGioHangPayPal());
      localStorage.removeItem("gioHang");
      localStorage.removeItem("newGioHang");
      localStorage.removeItem("gioHangThanhToan");
      localStorage.removeItem("timeSearch");



      messageApi.open({
        type: 'success',
        content: 'Đặt phòng thành công',
      });

      setTimeout(() => {
        navigate('/');
      }, 3000);
    } catch (error) {
      console.log(error)
    }
  };


  return (
    
   <center>
     <div className="checkout">
      {isPending ? (
        <h4>LOADING...</h4>
      ) : (
        <>
        {contextHolder}
   
          <select value={currency} onChange={onCurrencyChange}>
            <option value="USD">💵 USD</option>
            <option value="EUR">💶 Euro</option>
          </select>
          <PayPalButtons
            style={{ layout: "vertical" }}
            createOrder={(data, actions) => onCreateOrder(data, actions)}
            onApprove={(data, actions) => onApproveOrder(data, actions)}
          />
        </>
      )}
    </div>
   </center>
  );
};
