import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='contact'>
        <img 
          src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-n5uger90w7XGpnsAqn8yAHV5.png" 
          alt="Suhita Logo" 
        />
        <div>
          <div>Hubungi Kami</div>
          <div className='socialIcons'>
            <a href="#"><i className="fab fa-whatsapp"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
      <div className='links'>
        <a href="#">Beranda</a>
        <a href="#">Tentang Kami</a>
        <a href="#">Produk</a>
        <a href="#">Kontak</a>
      </div>
      <div className='certifications'>
        <div>Berizin dan Bersertifikat</div>
        <div className='certImages'>
          <img src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-3qFYhkkFrMm7cL2xsQ7lJeYE.png" alt="Certification 1" />
          <img src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-Tr2GK3Z74gc7B3ucB9f86r7H.png" alt="Certification 2" />
          <img src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-AJfyhy7ooEgqGjIsfJXYhYOM.png" alt="Certification 3" />
          <img src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-35rajwYtg0vk1NjLeIcbm6Ud.png" alt="Certification 4" />
        </div>
      </div>
      <div className='qrCode'>
        <img src="https://example.com/qrcode.png" alt="QR Code" />
      </div>
    </footer>
  );
};

export default Footer;
