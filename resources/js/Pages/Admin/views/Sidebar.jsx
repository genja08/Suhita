// components/Sidebar.js
import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="bg-dark vh-100" style={{ width: '250px', position: 'fixed' }}>
      <Nav className="flex-column p-3">
        <h4 className="text-white">Menu</h4>
        <Nav.Item>
          <Nav.Link href="#" className="text-white">
            Dashboard
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" className="text-white">
            Users
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" className="text-white">
            Reports
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" className="text-white">
            Settings
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Sidebar;
