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
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <img src="/img/logo.png" alt="Suhita Logo" className="logo" />
      <div className={`nav ${menuOpen ? 'open' : ''}`}>
        <a href="/" className={activeLink === '/' ? 'active' : ''}>BERANDA</a>
        <a href="/tentang" className={activeLink === '/tentang' ? 'active' : ''}>TENTANG KAMI</a>
        <a href="/produk" className={activeLink === '/produk' ? 'active' : ''}>PRODUK</a>
        <a href="/kontak" className={activeLink === '/kontak' ? 'active' : ''}>KONTAK</a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </div>
    </nav>
  );
};

export default Navbar;
