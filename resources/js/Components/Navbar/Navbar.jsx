// // Navbar.js
import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 50);
  };

  const updateActiveLink = () => {
    const currentPath = window.location.pathname;
    setActiveLink(currentPath);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    updateActiveLink();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-content">
        <img 
          src="/img/logo.png" 
          alt="Suhita Logo" 
          className='logo'
        />
        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`nav ${menuOpen ? 'show' : ''}`}>
          <a href="/" className={activeLink === '/' ? 'active' : ''}>BERANDA</a>
          <a href="/tentang" className={activeLink === '/tentang' ? 'active' : ''}>TENTANG KAMI</a>
          <a href="/produk" className={activeLink === '/produk' ? 'active' : ''}>PRODUK</a>
          <a href="/kontak" className={activeLink === '/kontak' ? 'active' : ''}>KONTAK</a>
        </div>
        <div className='searchBar'>
          {/* Search bar component if needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;