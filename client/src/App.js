import { Routes,Route } from 'react-router-dom';
import './App.css';
import ChiTiet from './pages/ChiTiet/ChiTiet';
import DangKyDangNhap from './pages/DangKyDangNhap/DangKyDangNhap';
import DangNhap from './pages/DangNhap/DangNhap';
import GioHang from './pages/GioHang/GioHang';
import TheLoai from './pages/TheLoai/TheLoai';
import TrangCaNhan from './pages/TrangCaNhan/TrangCaNhan';
import TrangChu from './pages/TrangChu/TrangChu';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<TrangChu/>} />
        <Route path="/chitiet" element={<ChiTiet />} />
        <Route path="/theloai" element={<TheLoai />} />
        <Route path="/giohang" element={<GioHang />} />
        <Route path="/dangky" element={<DangKyDangNhap />} />
        <Route path="/dangnhap" element={<DangNhap />} />
        <Route path="/trangcanhan" element={<TrangCaNhan />} />

        </Routes>
    </div>
  );
}

export default App;
