import axios from  'axios';
import { useState,useEffect } from "react";

export const loginUser = async(data) =>{
    const res = await axios.post(`http://localhost:8080/admin/login`, data)
    return  res.data;
}