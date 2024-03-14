
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
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
import Content from './pages/Quanlyloaiphong/Content';
import LoginPage from './views/Pages/Loginadmin';
import HomePage from './views/Pages/Home';
import PageRegister from './views/Pages/Register';
import LoginAdmin from './views/Admin/Login';
function App() {

  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<PageRegister />} />
          
          <Route path="/loginad" element={<LoginAdmin />} >
          <Route path="/" element={<LoginAdmin />} >

            <Route path="rooms" element={<Rooms />} />
            <Route path="room-types" element={<RoomTypes />} />
            <Route path="thong-ke" element={<ThongKe />} />
            <Route path="accounts" element={<Accounts />} />
            <Route path="quanlyloaiphong" element={<Content />} />
          </Route>
          
          <Route path="/" element={<HomePage />} />
          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
