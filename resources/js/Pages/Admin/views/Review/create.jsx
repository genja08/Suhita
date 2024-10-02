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

function Dashboard({ products = [] }) {  
    const [formData, setFormData] = useState({
      id_produk: "",
      kualitas: "",
      rasa: "",
      ulasan: "",
      rating: ""
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
        const response = await axios.post("/admin/storereview", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(response.data);
        alert(response.data.message); 
        window.location.href = '/admin/review';
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
                          <CardTitle tag="h2">Review</CardTitle>
                        </Col>
                      </Row>
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col lg="12">
                          <div className="container">
                            <h2 className="text-white mt-4">Tambah Review</h2>
                            <form onSubmit={handleSubmit}>
                              <div className="form-group">
                                <label htmlFor="id_produk" className="text-white">Nama Produk</label>
                                <select name="id_produk" id="id_produk" className="form-control" onChange={handleInputChange} value={formData.id_produk} required>
                                    <option value="">Pilih</option>
                                  {products.length > 0 ? (
                                    products.map((product, index) => (
                                      <option key={index} value={product.id}>{product.nama_produk}</option>
                                    ))
                                  ) : (
                                    <option value="">No products available</option>
                                  )}
                                </select>
                              </div>
  
                              <div className="form-group">
                                <label htmlFor="kualitas" className="text-white">Kualitas</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="kualitas"
                                  name="kualitas"
                                  value={formData.kualitas}
                                  onChange={handleInputChange}
                                  placeholder="Kualitas produk"
                                  required
                                />
                              </div>
                              
                              <div className="form-group">
                                <label htmlFor="rasa" className="text-white">Rasa</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="rasa"
                                  name="rasa"
                                  value={formData.rasa}
                                  onChange={handleInputChange}
                                  placeholder="Rasa produk"
                                  required
                                />
                              </div>

                              <div className="form-group mt-3">
                                <label htmlFor="ulasan" className="text-white">Ulasan</label>
                                <textarea
                                  name="ulasan"
                                  id="ulasan"
                                  className="form-control"
                                  value={formData.ulasan}
                                  onChange={handleInputChange}
                                  placeholder="Ulasan"
                                  required
                                ></textarea>
                              </div>

                              <div className="form-group">
                                <label htmlFor="rating" className="text-white">Rating</label>
                                <br />
                                <input
                                    type="range"
                                    className="form-range"
                                    id="rating"
                                    name="rating"
                                    min="0"
                                    max="5"
                                    step="1"
                                    value={formData.rating}
                                    onChange={handleInputChange}
                                    placeholder="rating produk"
                                    required
                                />
                                <span className="text-white ml-2">Bintang: {formData.rating}</span>
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
  