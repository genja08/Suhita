import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='contact'>
        <img 
          src="/img/logosuhita3.png" 
          alt="Suhita Logo" 
        />
        <div>
          <div>Ikuti Kami</div>
            <div className='socialIcons'>
              <a href="https://wa.me/6282279255702?text=I%20am%20interested%20in%20your%20product"><img src="/img/whatsapp.png" className="imageicon1" alt="WhatsApp" /></a>
              <a href="#"><img src="/img/facebook.png" className="imageicon2" alt="Facebook" /></a>
              <a href="#"><img src="/img/instagram.png" className="imageicon3" alt="Instagram" /></a>
            </div>

          </div>
        </div>
      <div className='links'>
        <a href="/">Beranda</a>
        <a href="/tentang">Tentang Kami</a>
        <a href="/produk">Produk</a>
        <a href="/kontak">Kontak</a>
      </div>
      <div className='certifications'>
        <div>Berizin dan Bersertifikat</div>
        <div className='certImages'>
          <img src="/img/serti1.png" alt="Certification 1" />
          <img src="/img/serti2.png" alt="Certification 2" />
          <img src="/img/serti3.png" alt="Certification 3" />
          <img src="/img/serti4.png" alt="Certification 4" />
        </div>
      </div>
      <div className='qrCode'>
        <img src="/img/qrcode.png" alt="QR Code" />
      </div>
    </footer>
  );
};

export default Footer;
