import React, { useState } from "react";
import '../../assets/css/black-dashboard-react.css';
import '../../assets/css/black-dashboard-react.min.css';
import '../../assets/css/nucleo-icons.css';
import AdminNavbar from "../AdminNavbar";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import { Container, Row, Col } from 'react-bootstrap';
import '../dashboardadmin.css';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Modal, ModalHeader, ModalBody, ModalFooter
} from "reactstrap";

import { Head } from '@inertiajs/react';


function IndexAbout({ abouts }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editFormData, setEditFormData] = useState({
    judul: '',
    deskripsi: ''
  });
  const [isModalOpen, setIsModalOpen] = useState(false); // New state for modal visibility

  // Handle delete product
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this data?')) {
      try {
        await axios.delete(`/admin/deleteabout/${id}`);
        alert('Data deleted successfully');
        window.location.reload(); // Refresh after deletion
      } catch (error) {
        console.error('Error deleting product:', error);
        alert('Failed to delete product');
      }
    }
  };

  // Open edit modal
  const openEditModal = (about) => {
    setSelectedProduct(about);
    setEditFormData({
      judul: about.judul,
      deskripsi: about.deskripsi
    });
    setIsModalOpen(true); // Open modal
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false); // Close modal
  };

  // Handle edit form submission
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/admin/updateabout/${selectedProduct.id}`, editFormData);
      alert(response.data.message);
      window.location.reload(); // Refresh after edit
    } catch (error) {
      console.error('Error updating data:', error);
      alert('Failed to update data');
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
                      <Col className="text-left" sm="12">
                        <CardTitle tag="h2">Tentang</CardTitle>
                        <a href="/admin/tambahabout" className="btn btn-sm btn-info mt-3">Tambah Data</a>
                          <table className="table table-hover w-100 text-white mt-3">
                            <thead>
                                <th scope="col">#</th>
                                <th scope="col">Judul</th>
                                <th scope="col">Deskripsi</th>
                                <th scope="col">Gambar</th>
                                <th scope="col">Actions</th>
                            </thead>
                            <tbody>
                              {abouts.map((about, index) => (
                                <tr key={about.id}>
                                  <td>{index + 1}</td>
                                  <td>{about.judul}</td>
                                  <td>{about.deskripsi}</td>
                                  <td>
                                    <img src={`http://127.0.0.1:8000${about.gambar}`} alt={about.gambar} width="100" height="100" />
                                  </td>
                                  <td>
                                    <button className="btn btn-sm btn-primary" onClick={() => openEditModal(about)}>Edit</button>
                                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(about.id)}>Delete</button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col lg="12">
                        <div className="container">
                          {/* <a href="/admin/tambahabout" className="btn btn-sm btn-info">Tambah Data</a>
                          <table className="table table-dark table-hover w-100">
                            <thead>
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">Judul</th>
                                <th scope="col">Deskripsi</th>
                                <th scope="col">Gambar</th>
                                <th scope="col">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {abouts.map((about, index) => (
                                <tr key={about.id}>
                                  <th scope="row" className="text-white">{index + 1}</th>
                                  <td>{about.judul}</td>
                                  <td>{about.deskripsi}</td>
                                  <td>
                                    <img src={`http://127.0.0.1:8000${about.gambar}`} alt={about.gambar} width="100" height="100" />
                                  </td>
                                  <td>
                                    <button className="btn btn-sm btn-primary" onClick={() => openEditModal(about)}>Edit</button>
                                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(about.id)}>Delete</button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table> */}
                        </div>

                        {/* Edit Modal
                        {isModalOpen && (
                          <div className="modal d-block" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
                            <div className="modal-content">
                              <span className="close" onClick={closeModal}>&times;</span>
                              <form onSubmit={handleEditSubmit}>
                                <div className="form-group">
                                  <label htmlFor="judul">Judul</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="judul"
                                    name="judul"
                                    value={editFormData.judul}
                                    onChange={(e) => setEditFormData({ ...editFormData, judul: e.target.value })}
                                    required
                                  />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="deskripsi">Deskripsi</label>
                                  <textarea
                                    className="form-control"
                                    id="deskripsi"
                                    name="deskripsi"
                                    value={editFormData.deskripsi}
                                    onChange={(e) => setEditFormData({ ...editFormData, deskripsi: e.target.value })}
                                    required
                                  />
                                </div>
                                
                                <button type="submit" className="btn btn-success">Update</button>
                              </form>
                            </div>
                          </div>
                        )} */}

                        {/* Edit Modal */}
                        <Modal isOpen={isModalOpen} toggle={closeModal}>
                          <ModalHeader toggle={closeModal}>
                              <CardTitle tag="h2">Edit Review</CardTitle>
                          </ModalHeader>
                          <ModalBody>
                              <form onSubmit={handleEditSubmit}>
                                <div className="form-group">
                                  <label htmlFor="judul">Judul</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="judul"
                                    name="judul"
                                    value={editFormData.judul}
                                    onChange={(e) => setEditFormData({ ...editFormData, judul: e.target.value })}
                                    required
                                  />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="deskripsi">Deskripsi</label>
                                  <textarea
                                    className="form-control"
                                    id="deskripsi"
                                    name="deskripsi"
                                    value={editFormData.deskripsi}
                                    onChange={(e) => setEditFormData({ ...editFormData, deskripsi: e.target.value })}
                                    required
                                  />
                                </div>
                                
                                <button type="submit" className="btn btn-success">Update</button>
                              </form>
                          </ModalBody>
                          <ModalFooter>
                            <Button color="secondary" onClick={closeModal}>Close</Button>
                          </ModalFooter>
                        </Modal>
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

export default IndexAbout;
