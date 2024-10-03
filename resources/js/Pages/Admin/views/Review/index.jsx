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



function IndexReview({ reviews, products }) {
  const [selectedReview, setSelectedReview] = useState(null); // Use selectedReview to store current review
  const [editFormData, setEditFormData] = useState({
    id_produk: '',
    kualitas: '',
    rasa: '',
    ulasan: '',
    rating: ''
  });
  const [isModalOpen, setIsModalOpen] = useState(false); // New state for modal visibility

  // Handle delete product
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this data?')) {
      try {
        await axios.delete(`/admin/deletereview/${id}`);
        alert('Data deleted successfully');
        window.location.reload(); // Refresh after deletion
      } catch (error) {
        console.error('Error deleting review:', error);
        alert('Failed to delete review');
      }
    }
  };

  // Open edit modal
  const openEditModal = (review) => {
    setSelectedReview(review);
    setEditFormData({
      id_produk: review.id_produk,
      kualitas: review.kualitas,
      rasa: review.rasa,
      ulasan: review.ulasan,
      rating: review.rating
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
      const response = await axios.post(`/admin/updatereview/${selectedReview.id}`, editFormData);
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
                          <a href="/admin/tambahreview" className="btn btn-sm btn-info">Tambah Data</a>
                          <table className="table table-dark table-hover w-100">
                            <thead>
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">ID Product</th>
                                <th scope="col">Kualitas</th>
                                <th scope="col">Rasa</th>
                                <th scope="col">Ulasan</th>
                                <th scope="col">Rating</th>
                                <th scope="col">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {reviews.map((review, index) => (
                                <tr key={review.id}>
                                  <th scope="row" className="text-white">{index + 1}</th>
                                  <td>{review.nama_produk}</td>
                                  <td>{review.kualitas}</td>
                                  <td>{review.rasa}</td>
                                  <td>{review.ulasan}</td>
                                  <td>{review.rating}</td>
                                  <td>
                                    <button className="btn btn-sm btn-primary" onClick={() => openEditModal(review)}>Edit</button>
                                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(review.id)}>Delete</button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        {/* Edit Modal */}
                        <Modal isOpen={isModalOpen} toggle={closeModal}>
                          <ModalHeader toggle={closeModal}>
                              <CardTitle tag="h2">Edit Review</CardTitle>
                          </ModalHeader>
                          <ModalBody>
                            <form onSubmit={handleEditSubmit}>
                              
                              <div className="form-group">
                                <label htmlFor="id_produk">Nama Produk</label>
                                <select
                                  name="id_produk"
                                  id="id_produk"
                                  className="form-control"
                                  onChange={handleInputChange}
                                  value={editFormData.id_produk}
                                  required
                                >
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
                                <label htmlFor="kualitas">Kualitas</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="kualitas"
                                  name="kualitas"
                                  value={editFormData.kualitas}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>
                              
                              <div className="form-group">
                                <label htmlFor="rasa">Rasa</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="rasa"
                                  name="rasa"
                                  value={editFormData.rasa}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>

                              <div className="form-group">
                                <label htmlFor="ulasan">Ulasan</label>
                                <textarea
                                  className="form-control"
                                  id="ulasan"
                                  name="ulasan"
                                  value={editFormData.ulasan}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>

                              <div className="form-group">
                                <label htmlFor="rating">Rating</label>
                                <br />
                                <input
                                  type="range"
                                  className="form-range"
                                  id="rating"
                                  name="rating"
                                  min="0"
                                  max="5"
                                  step="1"
                                  value={editFormData.rating}
                                  onChange={handleInputChange}
                                  required
                                />
                                <span className="text-white ml-2">Bintang: {editFormData.rating}</span>
                              </div>
                              
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

export default IndexReview;