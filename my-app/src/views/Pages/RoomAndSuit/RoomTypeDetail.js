import React, { useState, useEffect } from "react";

const RoomTypeDetail = (props) => {

  const {data} = props;

  console.log(data)

  return (
    <>
        <p>{data.param.dienTich}</p>
        <p>{data.param.giaTien}</p>
        <p>{data.param.huongNhin}</p>
        <p>{data.param.moTa}</p>
        <p>{data.param.trangThai}</p>
    </>
  );
};

export default RoomTypeDetail;
