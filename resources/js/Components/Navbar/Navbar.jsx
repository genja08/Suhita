import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 50);
  };

  const updateActiveLink = () => {
    const currentPath = window.location.pathname;
    setActiveLink(currentPath); // Update the active link state with the current path
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Call the function to detect the current active link
    updateActiveLink();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <img 
        src="/img/logo.png" 
        alt="Suhita Logo" 
        className='logo'
      />
      <div className='nav'>
        <a href="/" className={activeLink === '/' ? 'active' : ''}>BERANDA</a>
        <a href="/tentang" className={activeLink === '/tentang' ? 'active' : ''}>TENTANG KAMI</a>
        <a href="/produk" className={activeLink === '/produk' ? 'active' : ''}>PRODUK</a>
        <a href="/kontak" className={activeLink === '/kontak' ? 'active' : ''}>KONTAK</a>
      </div>
      <div className='searchBar'>
        {/* Search bar component if needed */}
      </div>
    </nav>
  );
};

export default Navbar;
