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

import { Head } from '@inertiajs/react';


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

function Dashboard() {  
    const [formData, setFormData] = useState({
      youtube: "",
      desc_tentang: "",
      desc_beranda: "",
      wa: "",
      ig: "",
      email: ""
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
      
      try {
        const response = await axios.post("/admin/storesetting", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(response.data);
        alert(response.data.message); 
        window.location.href = '/admin/setting';
      } catch (error) {
        console.error("Error submitting form:", error);
        if (error.response && error.response.data.message) {
          alert(error.response.data.message); 
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
                          <CardTitle tag="h2">Setting</CardTitle>
                        </Col>
                      </Row>
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col lg="12">
                          <div className="container">
                            <h2 className="text-white mt-4">Tambah Setting</h2>
                            <form onSubmit={handleSubmit}>

                              <div className="form-group">
                                <label htmlFor="youtube" className="text-white">Link Youtube</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="youtube"
                                  name="youtube"
                                  value={formData.youtube}
                                  onChange={handleInputChange}
                                  placeholder="Link Youtube"
                                  required
                                />
                              </div>

                              {/* <div className="form-group mt-3">
                                <label htmlFor="desc_tentang" className="text-white">Deskripsi Tentang</label>
                                <textarea
                                  name="desc_tentang"
                                  id="desc_tentang"
                                  className="form-control"
                                  value={formData.desc_tentang}
                                  onChange={handleInputChange}
                                  placeholder="desc_tentang"
                                  required
                                ></textarea>
                              </div>
                              
                              <div className="form-group mt-3">
                                <label htmlFor="desc_beranda" className="text-white">Deskripsi Beranda</label>
                                <textarea
                                  name="desc_beranda"
                                  id="desc_beranda"
                                  className="form-control"
                                  value={formData.desc_beranda}
                                  onChange={handleInputChange}
                                  placeholder="desc_beranda"
                                  required
                                ></textarea>
                              </div>
                              
                              <div className="form-group">
                                <label htmlFor="wa" className="text-white">Nomor Whatsapp</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="wa"
                                  name="wa"
                                  value={formData.wa}
                                  onChange={handleInputChange}
                                  placeholder="Nomor Whatsapp"
                                  required
                                />
                              </div>
                              
                              <div className="form-group">
                                <label htmlFor="ig" className="text-white">Akun Instagram</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="ig"
                                  name="ig"
                                  value={formData.ig}
                                  onChange={handleInputChange}
                                  placeholder="Akun Instagram"
                                  required
                                />
                              </div>
                              
                              <div className="form-group">
                                <label htmlFor="email" className="text-white">Email</label>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleInputChange}
                                  placeholder="Email"
                                  required
                                />
                              </div> */}

                              

  
                              
  
  
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
  