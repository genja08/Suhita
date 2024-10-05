import React from 'react';
import { Head } from '@inertiajs/react';
import './Kontak.css';
import Navbar from '@/Components/Navbar/Navbar';
import Footer from '@/Components/Footer/Footer';

export default function Kontak() {
  return (
    <>
      <Head title="Kontak" />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="kontak">
          <h1>Hubungi Kami</h1>
          <p>
            Untuk pertanyaan umum, pengembalian pesanan, umpan balik & pertanyaan data
            pribadi, jangan ragu untuk menghubungi kami dengan menulis email atau
            menelepon kami pada rincian yang diberikan dibawah.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <a href="https://wa.me/6282279255702?text=I%20am%20interested%20in%20your%20product">
                <img src="/img/whatsapp.png" className="imageicon1" alt="WhatsApp" />
                082279255702
              </a>
            </div>
            <div className="contact-item">
              <a href="#">
                <img src="/img/instagram.png" className="imageicon2" alt="Instagram" />
                madu_suhita
              </a>
            </div>
            <div className="contact-item">
              <a href="#">
                <img src="/img/E-mail.png" className="imageicon3" alt="email" />
                pt.suhitalebahindonesia@gmail.com
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
