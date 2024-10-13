import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

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

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <img 
          src="/img/logo.png" 
          alt="Suhita Logo" 
          className='logo'
        />
        <div className="nav-desktop">
          <a href="/" className={activeLink === '/' ? 'active' : ''}>BERANDA</a>
          <a href="/tentang" className={activeLink === '/tentang' ? 'active' : ''}>TENTANG KAMI</a>
          <a href="/produk" className={activeLink === '/produk' ? 'active' : ''}>PRODUK</a>
          <a href="/kontak" className={activeLink === '/kontak' ? 'active' : ''}>KONTAK</a>
        </div>
        <div className="nav-mobile">
          <button className="dropdown-toggle" onClick={toggleDropdown}>
            Menu
            <span className={`arrow ${dropdownOpen ? 'up' : 'down'}`}></span>
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <a href="/" onClick={closeDropdown}>BERANDA</a>
              <a href="/tentang" onClick={closeDropdown}>TENTANG KAMI</a>
              <a href="/produk" onClick={closeDropdown}>PRODUK</a>
              <a href="/kontak" onClick={closeDropdown}>KONTAK</a>
            </div>
          )}
        </div>
        <div className='searchBar'>
          {/* Search bar component if needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;