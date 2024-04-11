import axios from  'axios';
import { useState,useEffect } from "react";

export const getRoom = async() => {
    const res = await axios.get('http://localhost:8080/admin/phong/hien-thi');
    return res;
}

export const createRoom = async(data) => {
    const res = await axios.post('http://localhost:8080/admin/phong/add', data);
    return res;
}

export const getListRoom = async() => {
    const res = await axios.get('http://localhost:8080/admin/loai-phong/list');
    return res;
}

export const updateRoom = async(id) => {
const res = await axios.put(`http://localhost:8080/admin/phong/sua/${id}`);
    return res;
}


export const deleteRoom = async(id) => {
    const res = await axios.delete(`http://localhost:8080/admin/phong/xoa/${id}`);
    return res;
}


export const searchPriceRoom = async(price) => {
    const res = await axios.get(`http://localhost:8080/admin/loai-phong/tim-kiem-theo-gia/${price}`);
    return res;
}

export const searchDateCt = async(params) => {
    const res = await axios.get(`http://localhost:8080/admin/loai-phong/search`,{ params: params });
    return res;
}

export const datHang = async(body) => {
    const res = await axios.post(`http://localhost:8080/admin/loai-phong/all`, body);
    return res;
}

export const getDetailRoom = async(id) => {
    const res = await axios.get(`http://localhost:8080/admin/loai-phong/detail/${id}`);
    return res;
}