import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const handleScroll = () => {
    const offset = window.scrollY;

    // Toggle scrolled state
    setScrolled(offset > 50);

    // Define sections to check visibility
    const sections = ['beranda', 'tentang', 'produk', 'kontak'];
    
    sections.forEach(section => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.clientHeight;

        if (offset >= sectionTop - sectionHeight / 2 && offset < sectionTop + sectionHeight / 2) {
          setActiveLink(section); // Set active link
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
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
        <a href="/" className={activeLink === '/beranda' ? 'active' : ''}>BERANDA</a>
        <a href="/tentang" className={activeLink === 'tentang' ? 'active' : ''}>TENTANG KAMI</a>
        <a href="/produk" className={activeLink === 'produk' ? 'active' : ''}>PRODUK</a>
        <a href="/kontak" className={activeLink === 'kontak' ? 'active' : ''}>KONTAK</a>
      </div>
      <div className='searchBar'>
        <input type="text" placeholder="Search ..." />
        <i className="fas fa-search"></i>
      </div>
    </nav>
  );
};

export default Navbar;
