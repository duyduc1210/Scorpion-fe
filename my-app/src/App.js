import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import LoginPage from './pages/Login';
// import HomePage from './pages/Home'
// import RegisterPage from './pages/Register';
// import AdminPage from './pages/Admin';
// import QuanlyloaiphongPage from  "./pages/Quanlyloaiphong";
import LayoutAdmin from './components/Admin/LayoutAdmin';
import Rooms from './views/Admin/Rooms';
import RoomTypes from './views/Admin/RoomTypes';
import ThongKe from './views/Admin/ThongKe';
import Accounts from './views/Admin/Accounts';
import Createtransaction from './views/Admin/TaoGiaoDich';
import Reservationlist from './views/Admin/Reservationlist'
// import Content from './pages/Quanlyloaiphong/Content';
import LoginPage from './views/Pages/Login';
import HomePage from './views/Pages/Home';
import PageRegister from './views/Pages/Register';
import LoginAdmin from './views/Admin/Login';
import RoomDiagram from "./views/Admin/RoomDiagram";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<PageRegister />} />

          <Route path="/loginAdmin" element={<LoginAdmin />} />

          <Route path="/admin" element={<LayoutAdmin/>}>
            <Route path="rooms" element={<Rooms />} />
            <Route path="room-types" element={<RoomTypes />} />
            <Route path="thong-ke" element={<ThongKe />} />
            <Route path="accounts" element={<Accounts />} />
            <Route path="create-transaction" element={<Createtransaction />} />
            <Route path="reservation-list" element={<Reservationlist/>} />
            {/* <Route path="quanlyloaiphong" element={<Content />} /> */}
            <Route path="room-diagram" element={<RoomDiagram/>}/>
          </Route>

          <Route path="/" element={<HomePage />} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
