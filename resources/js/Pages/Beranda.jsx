import React from 'react';
import { Head } from '@inertiajs/react';
import './Beranda.css';
import Navbar from '@/Components/Navbar/Navbar';
import Footer from '@/Components/Footer/Footer';

export default function Beranda() {
  return (
    <>
      <Head title="Beranda" />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-center beranda">
          <img src="/img/super3-black.png" alt="Gambar 1" className="quote-image" />
          <div className="quote">
            <p className="quote2">
              "MADU SUHITA, PELOPOR MADU MURNI DI INDONESIA BERIZIN KEMENTAN RI, DIPRODUKSI DENGAN RISET DAN TEKNOLOGI MUTAKHIR"
            </p>
            <br />
            <a href='/produk'>
              BELANJA SEKARANG
            </a>
          </div>
          <img src="/img/super4-black.png" alt="Gambar 2" className="quote-image" />
        </main>
        <Footer />
      </div>
    </>
  );
}
