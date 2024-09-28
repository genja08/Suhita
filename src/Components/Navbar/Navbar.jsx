import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img 
        src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-n5uger90w7XGpnsAqn8yAHV5.png" 
        alt="Suhita Logo" 
        className='logo'
      />
      <div className='nav'>
        <Link to="/beranda">BERANDA</Link>
        <Link to="/tentang">TENTANG KAMI</Link>
        <Link to="/produk">PRODUK</Link>
        <Link to="/kontak">KONTAK</Link>

        {/* <a href={Beranda}>BERANDA</a>
        <a href={Tentang}>TENTANG KAMI</a>
        <a href="#">PRODUK</a>
        <a href={Kontak}>KONTAK</a> */}
      </div>
      <div className='searchBar'>
        <input type="text" placeholder="Search ..." />
        <i className="fas fa-search"></i>
      </div>
    </nav>
  );
};

export default Navbar;
