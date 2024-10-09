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

import { Head } from '@inertiajs/react';


function Dashboard(props) {
    const [formData, setFormData] = useState({
      judul: "",
      deskripsi: ""
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
        data.append("gambar", file); // Ensure name matches 'gambar'
      }
    
      try {
        const response = await axios.post("/admin/storeabout", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(response.data);
        alert(response.data.message); // This will display the success message from the server
        window.location.href = '/admin/tentang';
      } catch (error) {
        console.error("Error submitting form:", error);
        if (error.response && error.response.data.message) {
          alert(error.response.data.message); // This will display the error message from the server
        } else {
          alert("An unexpected error occurred.");
        }
      }
    };
  
    return (
      <>
      <Head title="Produk">
        {/* Add favicon link here */}
        <link rel="icon" href="/img/favicon.ico" type="image/x-icon" />
    </Head>
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
                          <CardTitle tag="h2">Tentang Kami</CardTitle>
                        </Col>
                      </Row>
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col lg="12">
                          <div className="container">
                            <h2 className="text-white mt-4">Tambah Data Tentang Kami</h2>
                            <form onSubmit={handleSubmit}>
                              <div className="form-group">
                                <label htmlFor="judul" className="text-white">Judul</label>
                                <input type="text" className="form-control" id="judul" name="judul" value={formData.judul} onChange={handleInputChange} placeholder="Nama produk" required />
                              </div>
                              <div className="form-group mt-3">
                                <label htmlFor="deskripsi" className="text-white">Deskripsi</label>
                                <textarea name="deskripsi" id="deskripsi" className="form-control" value={formData.deskripsi} onChange={handleInputChange} placeholder="Deskripsi" required></textarea>
                              </div>
                              <div className="form-group">
                                <label htmlFor="gambar" className="text-white">Gambar</label>
                                <br />
                                <label htmlFor="gambar" className="btn btn-secondary mt-2">Pilih Gambar</label>
                                <input type="file" className="form-control" id="gambar" name="gambar" onChange={handleFileChange} accept=".png" placeholder="Foto produk format .PNG" required />
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