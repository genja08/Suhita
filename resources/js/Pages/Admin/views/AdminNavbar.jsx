// components/AdminNavbar.js
import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import axios from 'axios';
import './AdminNavbar.css';

const handleLogout = async () => {
  try {
    await axios.post('/logout', {});
    window.location.href = '/';
  } catch (error) {
    console.error(error);
    alert('Error logging out. Please try again.');
  }
};

function AdminNavbar() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <img src="/img/logo.png" className="navbarlogo" alt="" />
      <Container fluid>
        <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Ihtiandiko Wicaksono</Nav.Link>
            <Button variant="danger" onClick={handleLogout}>Keluar</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AdminNavbar;