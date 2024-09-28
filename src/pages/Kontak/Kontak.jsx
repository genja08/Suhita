import React from 'react';
import './Kontak.css';

const Kontak = () => {
  return (
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
  );
};

export default Kontak;
