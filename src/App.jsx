import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Beranda from './Components/Beranda/Beranda';
import Footer from './Components/Footer/Footer';
import Kontak from './pages/Kontak/Kontak';
import Produk from './pages/Produk/Produk';
import Tentang from './pages/Tentang/Tentang';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/beranda" element={<Beranda />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/produk" element={<Produk />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="*" element={<Navigate to="/beranda" />} /> {/* Redirect unknown paths to Beranda */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
