// components/Footer.js
import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3" style={{ marginTop: 'auto' }}>
      <Container>
        <p>© 2024 Admin Dashboard. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;
