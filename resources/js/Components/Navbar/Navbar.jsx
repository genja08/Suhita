import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search query:', searchQuery); // Logika pencarian
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-left">
          <img src="/img/logo.png" alt="Suhita Logo" className="logo" />
          <div className={`nav-elements ${menuOpen ? 'active' : ''}`}>
            <ul className="nav-menu">
              <li><a href="/" className={activeLink === '/' ? 'active' : ''}>BERANDA</a></li>
              <li><a href="/tentang" className={activeLink === '/tentang' ? 'active' : ''}>TENTANG KAMI</a></li>
              <li><a href="/produk" className={activeLink === '/produk' ? 'active' : ''}>PRODUK</a></li>
              <li><a href="/kontak" className={activeLink === '/kontak' ? 'active' : ''}>KONTAK</a></li>
            </ul>
            <div className="search-bar">
              <form onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  placeholder="Cari..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </form>
            </div>
          </div>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;