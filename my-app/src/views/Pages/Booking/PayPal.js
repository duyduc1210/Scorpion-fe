import React from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { ButtonCheckOut } from "./ButtonCheckOut";

const PayPal = () => {
  const initialOptions = {
    clientId:
      "ATVZWAEvlvSaCxLo7XhKOOnTLejvBSNOPAX3L5jfoScf3hbcxm8v28xKL0sAfsBz8nVTbje00nBweI53",
    currency: "USD",
    intent: "capture",
  };

  return (
    <div className="btn-paypal"> 
       
     
    
       <h2 className="btn-paypalh2">Thanh toán PayPal</h2>

     <center>
     <PayPalScriptProvider options={initialOptions}>
        <ButtonCheckOut />
      </PayPalScriptProvider>
     </center>
    </div>
  );
};

export default PayPal;
