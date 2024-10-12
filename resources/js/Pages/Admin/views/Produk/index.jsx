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


function IndexProduk({ products }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editFormData, setEditFormData] = useState({
    nama_produk: '',
    deskripsi: '',
    harga: '',
    ketersediaan: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false); // New state for modal visibility

  // Handle delete product
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await axios.delete(`/admin/deleteproduk/${id}`);
        alert('Product deleted successfully');
        window.location.reload(); // Refresh after deletion
      } catch (error) {
        console.error('Error deleting product:', error);
        alert('Failed to delete product');
      }
    }
  };

  // Open edit modal
  const openEditModal = (product) => {
    setSelectedProduct(product);
    setEditFormData({
      nama_produk: product.nama_produk,
      deskripsi: product.deskripsi,
      harga: product.harga,
      ketersediaan: product.ketersediaan,
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
      const response = await axios.post(`/admin/updateproduk/${selectedProduct.id}`, editFormData);
      alert(response.data.message);
      window.location.reload(); // Refresh after edit
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Failed to update product');
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
                        <CardTitle tag="h2">Produk</CardTitle>
                        <a href="/admin/tambahproduk" className="btn btn-sm btn-info mt-3">Tambah Produk</a>
                        <table className="table table-hover w-100 mt-3">
                            <thead className="text-white">
                                <th scope="col">#</th>
                                <th scope="col">Nama Produk</th>
                                <th scope="col">Harga</th>
                                <th scope="col">Gambar Produk</th>
                                <th scope="col">Deskripsi</th>
                                <th scope="col">Ketersediaan</th>
                                <th scope="col">Actions</th>
                            </thead>
                            <tbody>
                              {products.map((product, index) => (
                                <tr key={product.id}>
                                  <td>{index + 1}</td>
                                  <td>{product.nama_produk}</td>
                                  <td>{product.harga}</td>
                                  <td>
                                    <img src={`https://suhita.id${product.gambar_produk}`} alt={product.gambar_produk} width="100" height="100" />
                                  </td>
                                  <td>{product.deskripsi}</td>
                                  <td>
                                    {product.ketersediaan === 1 ? (
                                      <span className="badge badge-success text-dark">Tersedia</span>
                                    ) : (
                                      <span className="badge badge-danger text-dark">Habis</span>
                                    )}
                                  </td>
                                  <td>
                                    <button className="btn btn-sm btn-primary" onClick={() => openEditModal(product)}>Edit</button>
                                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(product.id)}>Delete</button>
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
                          {/* <a href="/admin/tambahproduk" className="btn btn-sm btn-info">Tambah Produk</a> */}
                          {/* <table className="table table-dark table-hover w-100">
                            <thead>
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nama Produk</th>
                                <th scope="col">Harga</th>
                                <th scope="col">Gambar Produk</th>
                                <th scope="col">Deskripsi</th>
                                <th scope="col">Ketersediaan</th>
                                <th scope="col">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {products.map((product, index) => (
                                <tr key={product.id}>
                                  <th scope="row" className="text-white">{index + 1}</th>
                                  <td>{product.nama_produk}</td>
                                  <td>{product.harga}</td>
                                  <td>
                                    <img src={`https://suhita.id${product.gambar_produk}`} alt={product.gambar_produk} width="100" height="100" />
                                  </td>
                                  <td>{product.deskripsi}</td>
                                  <td>
                                    {product.ketersediaan === 1 ? (
                                      <span className="badge badge-success text-dark">Tersedia</span>
                                    ) : (
                                      <span className="badge badge-danger text-dark">Habis</span>
                                    )}
                                  </td>
                                  <td>
                                    <button className="btn btn-sm btn-primary" onClick={() => openEditModal(product)}>Edit</button>
                                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(product.id)}>Delete</button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table> */}
                        </div>

                        {/* Edit Modal */}
                        <Modal isOpen={isModalOpen} toggle={closeModal}>
                          <ModalHeader toggle={closeModal}>
                              <CardTitle tag="h2">Edit Review</CardTitle>
                          </ModalHeader>
                          <ModalBody>
                              <form onSubmit={handleEditSubmit}>
                                <div className="form-group">
                                  <label htmlFor="nama_produk">Nama Produk</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="nama_produk"
                                    name="nama_produk"
                                    value={editFormData.nama_produk}
                                    onChange={(e) => setEditFormData({ ...editFormData, nama_produk: e.target.value })}
                                    required
                                  />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="harga">Harga</label>
                                  <input
                                    type="number"
                                    className="form-control"
                                    id="harga"
                                    name="harga"
                                    value={editFormData.harga}
                                    onChange={(e) => setEditFormData({ ...editFormData, harga: e.target.value })}
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


                                <div className="form-group">
                                  <label htmlFor="ketersediaan">Ketersediaan</label>
                                  <select
                                    className="form-control"
                                    id="ketersediaan"
                                    name="ketersediaan"
                                    value={editFormData.ketersediaan}
                                    onChange={(e) => setEditFormData({ ...editFormData, ketersediaan: e.target.value })}
                                    required
                                  >
                                    <option value="1">Tersedia</option>
                                    <option value="0">Habis</option>
                                  </select>
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

export default IndexProduk;
