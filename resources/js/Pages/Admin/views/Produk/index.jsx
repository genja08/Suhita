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
} from "reactstrap";

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
                          <a href="/admin/tambahproduk" className="btn btn-sm btn-info">Tambah Produk</a>
                          <table className="table table-dark table-hover w-100">
                            <thead>
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nama Produk</th>
                                <th scope="col">Harga</th>
                                <th scope="col">Gambar Produk</th>
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
                                  <td>{product.gambar_produk}</td>
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
                        </div>

                        {/* Edit Modal */}
                        {isModalOpen && (
                          <div className="modal d-block" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
                            <div className="modal-content">
                              <span className="close" onClick={closeModal}>&times;</span>
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
                            </div>
                          </div>
                        )}
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
