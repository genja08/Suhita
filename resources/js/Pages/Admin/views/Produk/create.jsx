// import React from "react";
// import { Container, Row, Col } from 'react-bootstrap';
// import { Card, CardHeader, CardBody, CardTitle } from "reactstrap";
// import AdminNavbar from "../AdminNavbar";
// import Sidebar from "../Sidebar";
// import Footer from "../Footer";

import React, { useState } from "react";
import classNames from "classnames";
import '../../assets/css/black-dashboard-react.css';
import '../../assets/css/black-dashboard-react.min.css';
import '../../assets/css/nucleo-icons.css';

import AdminNavbar from "../AdminNavbar";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

import { Container, Row, Col  } from 'react-bootstrap';
// import '../../../../Components/Bootstrap/css/bootstrap.min.css';
import '../dashboardadmin.css';
import axios from '../axiosConfig.js';

import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  
  UncontrolledTooltip,
} from "reactstrap";

function Dashboard(props) {
    const [formData, setFormData] = useState({
      name: "",
      deskripsi: "",
      harga: "",
      ketersediaan: "",
    });
    const [file, setFile] = useState(null);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      const data = new FormData();
      for (const key in formData) {
        data.append(key, formData[key]);
      }
      if (file) {
        data.append("gambar", file);
      }
  
      try {
        const response = await axios.post("/admin/storeproduk", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(response.data);
        alert('BERHASIL AJG');
        window.location.href = '/admin/produk';
        // Handle success (e.g., show a success message, redirect, etc.)
      } catch (error) {
        console.error("Error submitting form:", error);
        // Handle error (e.g., show error message)
      }
    };
  
    return (
      <>
        <AdminNavbar />
        <div className="d-flex">
          <Sidebar />
          <Container fluid className="main-content p-4" style={{ marginLeft: '250px' }}>
            <div className="content">
              <Row>
                <Col xs="12">
                  <Card className="card-chart">
                    <CardHeader>
                      <Row>
                        <Col className="text-left" sm="6">
                          <CardTitle tag="h2">Produk</CardTitle>
                        </Col>
                      </Row>
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col lg="12">
                          <div className="container">
                            <h2 className="text-white mt-4">Tambah Produk</h2>
                            <form onSubmit={handleSubmit}>
                              <div className="form-group">
                                <label htmlFor="name" className="text-white">Nama Produk</label>
                                <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Nama produk" required />
                              </div>
                              <div className="form-group mt-3">
                                <label htmlFor="deskripsi" className="text-white">Deskripsi</label>
                                <textarea name="deskripsi" id="deskripsi" className="form-control" value={formData.deskripsi} onChange={handleInputChange} placeholder="Deskripsi" required></textarea>
                              </div>
                              <div className="form-group">
                                <label htmlFor="harga" className="text-white">Harga</label>
                                <input type="number" className="form-control" id="harga" name="harga" value={formData.harga} onChange={handleInputChange} placeholder="Harga produk" required />
                              </div>
                              <div className="form-group">
                                <label htmlFor="gambar" className="text-white">Foto Produk</label>
                                <input type="file" className="form-control" id="gambar" name="gambar" onChange={handleFileChange} accept=".png" placeholder="Foto produk format .PNG" required />
                              </div>
                              <div className="form-group mt-3">
                                <label htmlFor="ketersediaan" className="text-white">Ketersediaan</label>
                                <select className="form-control" id="ketersediaan" name="ketersediaan" value={formData.ketersediaan} onChange={handleInputChange} required>
                                  <option value="">Pilih</option>
                                  <option value="tersedia">Tersedia</option>
                                  <option value="belum_tersedia">Belum Tersedia</option>
                                </select>
                              </div>
                              <button type="submit" className="btn btn-primary mt-3">Submit</button>
                            </form>
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <Footer />
      </>
    );
  }
  
  export default Dashboard;