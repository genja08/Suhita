import React from 'react';
import { Head } from '@inertiajs/react';
import './Kontak.css';
import Navbar from '@/Components/Navbar/Navbar';
import Footer from '@/Components/Footer/Footer';

export default function Beranda() {
  return (
    <>
      <Head title="Beranda" />
      <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="Kontak">
      <h1>Hubungi Kami</h1>
      <p>
        Untuk pertanyaan umum, pengembalian pesanan, umpan balik & pertanyaan data
        pribadi, jangan ragu untuk menghubungi kami dengan menulis email atau
        menelepon kami pada rincian yang diberikan di bawah ini.
      </p>
      <div className="contact-info">
        <div>
          <i className="fab fa-whatsapp"></i> 082279255702
        </div>
        <div>
          <i className="fab fa-instagram"></i> madu_suhita
        </div>
        <div>
          <i className="fas fa-envelope"></i> pt.suhitalebahindonesia@gmail.com
        </div>
      </div>
      </div>
        <Footer />
      </div>
    </>
  );
};