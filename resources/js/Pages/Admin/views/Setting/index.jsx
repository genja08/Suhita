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




function IndexSetting({ settings }) {
  const [selectedReview, setSelectedReview] = useState(null); // Use selectedReview to store current review
  const [editFormData, setEditFormData] = useState({
    youtube: '',
    desc_tentang: '',
    desc_beranda: '',
    wa: '',
    ig: '',
    email: ''
  });
  const [isModalOpen, setIsModalOpen] = useState(false); // New state for modal visibility

  // Handle delete product
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this data?')) {
      try {
        await axios.delete(`/admin/deletesetting/${id}`);
        alert('Data deleted successfully');
        window.location.reload(); // Refresh after deletion
      } catch (error) {
        console.error('Error deleting review:', error);
        alert('Failed to delete review');
      }
    }
  };

  // Open edit modal
  const openEditModal = (setting) => {
    setSelectedReview(setting);
    setEditFormData({
      youtube: setting.youtube,
      desc_tentang: setting.desc_tentang,
      desc_beranda: setting.desc_beranda,
      wa: setting.wa,
      ig: setting.ig,
      email: setting.email
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
      const response = await axios.post(`/admin/updatesetting/${selectedReview.id}`, editFormData);
      alert(response.data.message);
      window.location.reload(); // Refresh after edit
    } catch (error) {
      console.error('Error updating review:', error);
      alert('Failed to update review');
    }
  };

  // Handle input changes in modal
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
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
                        <CardTitle tag="h2">Setting</CardTitle>
                          {/* <a href="/admin/tambahsetting" className="btn btn-sm btn-info mt-3">Tambah Data</a> */}
                          <table className="table table-hover w-100 mt-3 text-white">
                            <thead>
                                <th scope="col">#</th>
                                <th scope="col">Link Youtube</th>
                                <th scope="col">Aksi</th>
                                {/* <th scope="col">Deksripsi Tentang Kami</th> */}
                                {/* <th scope="col">Deskripsi Beranda</th> */}
                                {/* <th scope="col">Whatsapp</th> */}
                                {/* <th scope="col">Instagram</th> */}
                                {/* <th scope="col">Email</th> */}
                            </thead>
                            <tbody>
                            {settings ? (
                                <tr>
                                <td>1</td> {/* Since it's a single setting, the index is fixed */}
                                <td>{settings.youtube}</td>
                                {/* <td>{settings.desc_tentang}</td> */}
                                {/* <td>{settings.desc_beranda}</td> */}
                                {/* <td>{settings.wa}</td> */}
                                {/* <td>{settings.ig}</td> */}
                                {/* <td>{settings.email}</td> */}
                                <td>
                                    <button className="btn btn-sm btn-primary" onClick={() => openEditModal(settings)}>Edit</button>
                                    {/* <button className="btn btn-sm btn-danger" onClick={() => handleDelete(settings.id)}>Delete</button> */}
                                </td>
                                </tr>
                            ) : (
                                <tr>
                                <td colSpan="8">No settings found</td>
                                </tr>
                            )}
                            </tbody>
                          </table>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col lg="12">

                        {/* Edit Modal */}
                        <Modal isOpen={isModalOpen} toggle={closeModal}>
                          <ModalHeader toggle={closeModal}>
                              <CardTitle tag="h2">Edit Setting</CardTitle>
                          </ModalHeader>
                          <ModalBody>
                            <form onSubmit={handleEditSubmit}>
                              
                              
                              
                              <div className="form-group">
                                <label htmlFor="youtube">Link Youtube</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="youtube"
                                  name="youtube"
                                  value={editFormData.youtube}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>

                              {/* <div className="form-group">
                                <label htmlFor="desc_tentang">Deskripsi Tentang</label>
                                <textarea
                                  className="form-control"
                                  id="desc_tentang"
                                  name="desc_tentang"
                                  value={editFormData.desc_tentang}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>
                              
                              <div className="form-group">
                                <label htmlFor="desc_beranda">Deskripsi Beranda</label>
                                <textarea
                                  className="form-control"
                                  id="desc_beranda"
                                  name="desc_beranda"
                                  value={editFormData.desc_beranda}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>

                              <div className="form-group">
                                <label htmlFor="wa">Nomor WA</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="wa"
                                  name="wa"
                                  value={editFormData.wa}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>
                              
                              <div className="form-group">
                                <label htmlFor="ig">Akun IG</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="ig"
                                  name="ig"
                                  value={editFormData.ig}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>
                              
                              <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="email"
                                  name="email"
                                  value={editFormData.email}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div> */}

                              
                              
                              <button type="submit" className="btn btn-info">Update</button>
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

export default IndexSetting;