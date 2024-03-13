
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/Login';
import HomePage from './pages/Home'
import RegisterPage from './pages/Register';
import AdminPage from './pages/Admin';
import QuanlyloaiphongPage from  "./pages/Quanlyloaiphong";
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
       <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/quanlyloaiphong" element={<QuanlyloaiphongPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
