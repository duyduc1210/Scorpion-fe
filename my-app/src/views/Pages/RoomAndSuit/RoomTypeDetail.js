import React, { useState, useEffect } from "react";

const RoomTypeDetail = (props) => {

  const {data} = props;

  console.log(data)

  return (
    <>
        <p>{data.param.dien_tich}</p>
        <p>{data.param.gia_tien}</p>
        <p>{data.param.huong_nhin}</p>
        <p>{data.param.mo_ta}</p>
        <p>{data.param.trang_thai}</p>
    </>
  );
};

export default RoomTypeDetail;
