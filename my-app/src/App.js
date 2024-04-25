import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import LayoutAdmin from "./components/Admin/LayoutAdmin";
import Rooms from "./views/Admin/Rooms";
import RoomTypes from "./views/Admin/RoomTypes";
import ThongKe from "./views/Admin/ThongKe";
import Accounts from "./views/Admin/Accounts";
import Transaction from "./components/Admin/Transaction";

import LoginPage from "./views/Pages/Login";
import HomePage from "./views/Pages/Home";
import PageRegister from "./views/Pages/Register";
import LoginAdmin from "./views/Admin/Login";
import RoomAndSuit from "./views/Pages/RoomAndSuit";

import Facilities from "./views/Pages/Facilities";
import Contact from "./views/Pages/Contact";
import Reservationlist from "./views/Admin/ReservationList";
import Createtransaction from "./views/Admin/CreateTransaction"
import Guestinformation from "./views/Admin/GuestInformation"
import RoomDiagram from "./views/Admin/RoomDiagram"
import { Content } from "antd/es/layout/layout";
import HotelBookingForm from "./views/Pages/Booking";
import UtilityService from "./views/Admin/UtilityService/UtilityService";
import CheckOut from "./views/Pages/Booking/CheckOut";

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
        <Routes>
          <Route path="/dang-nhap" element={<LoginPage />} />
          <Route path="/register" element={<PageRegister />} />

          <Route path="/loginAdmin" element={<LoginAdmin />} />

          <Route path="/admin" element={<LayoutAdmin/>}>
            <Route path="rooms" element={<Rooms />} />
            <Route path="room-types" element={<RoomTypes />} />
            <Route path="thong-ke" element={<ThongKe />} />
            <Route path="accounts" element={<Accounts />} />
            <Route path="create-transaction" element={<Createtransaction />} />
            <Route path="reservation-list" element={<Reservationlist/>} />
            <Route path="guest-information" element={<Guestinformation/>} />
            <Route path="quanlyloaiphong" element={<Content />} />
            <Route path="room-diagram" element={<RoomDiagram/>}/>
            <Route path="utility-service" element={<UtilityService/>}/>     
            
          </Route>

          <Route path="/" element={<HomePage />} />
          <Route path="transaction" element={<Transaction/>} />
          <Route path="room-and-suit" element={<RoomAndSuit />} />
          <Route path="booking" element={<HotelBookingForm />} />
          <Route path="check-out" element={<CheckOut/>}/>  
          <Route path="facilities" element={<Facilities />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
