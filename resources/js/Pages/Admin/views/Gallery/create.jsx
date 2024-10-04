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

    });
    const [file, setFile] = useState(null);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleFileChange = (e) => {
        setFile(e.target.files); 
      };
      
      const handleSubmit = async (e) => {
        e.preventDefault();
      
        const data = new FormData();
        
        for (const key in formData) {
          data.append(key, formData[key]);
        }
      
        if (file) {
          for (let i = 0; i < file.length; i++) {
            data.append('gambar[]', file[i]); 
          }
        }
      
        try {
          const response = await axios.post("/admin/storegallery", data, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          console.log(response.data);
          alert(response.data.message); 
          window.location.href = '/admin/gallery';
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
                            <h2 className="text-white mt-4">Tambah Foto</h2>
                            <form onSubmit={handleSubmit}>
                              
                              <div className="form-group">
                                <label htmlFor="gambar" className="text-white">Gambar</label>
                                <br />
                                <input type="file" className="form-control" id="gambar" name="gambar[]" multiple onChange={handleFileChange} accept=".png" placeholder="Foto produk format .PNG" required />
                                <label htmlFor="gambar" className="btn btn-secondary mt-2">Pilih Gambar</label>
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