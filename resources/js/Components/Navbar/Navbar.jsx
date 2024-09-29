import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      {/* <img 
        src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-n5uger90w7XGpnsAqn8yAHV5.png" 
        alt="Suhita Logo" 
        className='logo'
      /> */}
      <div className='nav'>
        {/* <Link to="/">BERANDA</Link>
        <Link to="/">TENTANG KAMI</Link>
        <Link to="/">PRODUK</Link>
        <Link to="/">KONTAK</Link> */}

        <a href="/">BERANDA</a>
        <a href="/tentang">TENTANG KAMI</a>
        <a href="/produk">PRODUK</a>
        <a href="/kontak">KONTAK</a>
      </div>
      <div className='searchBar'>
        <input type="text" placeholder="Search ..." />
        <i className="fas fa-search"></i>
      </div>
    </nav>
  );
};

export default Navbar;
