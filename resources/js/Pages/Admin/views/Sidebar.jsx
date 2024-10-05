// components/Sidebar.js
import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MdDashboard, MdPeople, MdDescription, MdSettings, MdOutlineStorefront, MdInsertPhoto, MdOutlineReviews, MdOutlineNewspaper   } from 'react-icons/md';

function Sidebar() {
  return (
    <div className="bg-dark vh-100" style={{ width: '250px', position: 'fixed' }}>
      <Nav className="flex-column p-3">

        <Nav.Item>
          <Nav.Link href="/dashboard" className="text-white menu-item">
            Dashboard <MdDashboard className="menu-item-icon" />
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/admin/produk" className="text-white menu-item">
            Produk <MdOutlineStorefront className="menu-item-icon" />
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/admin/tentang" className="text-white menu-item">
            Tentang Kami <MdOutlineNewspaper  className="menu-item-icon" />
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/admin/review" className="text-white menu-item">
            Reviews <MdOutlineReviews  className="menu-item-icon" />
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/admin/gallery" className="text-white menu-item">
            Gallery <MdInsertPhoto  className="menu-item-icon" />
          </Nav.Link>
        </Nav.Item>

        {/* <Nav.Item>
          <Nav.Link href="#" className="text-white menu-item">
            Reports <MdDescription className="menu-item-icon" />
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="#" className="text-white menu-item">
            Settings <MdSettings className="menu-item-icon" />
          </Nav.Link>
        </Nav.Item> */}

      </Nav>
    </div>
  );
}

export default Sidebar;