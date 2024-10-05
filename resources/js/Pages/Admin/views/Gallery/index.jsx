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

function IndexGallery({ galleries }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editFormData, setEditFormData] = useState({
    gambar: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await axios.delete(`/admin/deletegallery/${id}`);
        alert('Product deleted successfully');
        window.location.reload();
      } catch (error) {
        console.error('Error deleting product:', error);
        alert('Failed to delete product');
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
                      <Col className="text-left" sm="12">
                        <CardTitle tag="h2">Gallery</CardTitle>
                        <a href="/admin/tambahgallery" className="btn btn-sm btn-info mt-3">Tambah Foto</a>
                          <table className="table table-hover w-100 mt-3 text-white">
                            <thead>
                                <th scope="col">#</th>
                                <th scope="col">Gambar</th>
                                <th scope="col">Actions</th>
                            </thead>
                            <tbody>
                                {galleries.map((gallery, index) => (
                                    <tr key={gallery.id}>
                                      <td>{index + 1}</td>
                                      <td>
                                          <img src={`http://127.0.0.1:8000${gallery.gambar}`} alt={gallery.gambar} width="100" height="100" /> 
                                      </td>
                                      <td>
                                          <button className="btn btn-sm btn-danger" onClick={() => handleDelete(gallery.id)}>Delete</button>
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
                          {/* <a href="/admin/tambahgallery" className="btn btn-sm btn-info">Tambah Foto</a>
                          <table className="table table-dark table-hover w-100">
                            <thead>
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">Gambar</th>
                                <th scope="col">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                                {galleries.map((gallery, index) => (
                                    <tr key={gallery.id}>
                                    <th scope="row" className="text-white">{index + 1}</th>
                                    <td>
                                        <img src={`http://127.0.0.1:8000${gallery.gambar}`} alt={gallery.gambar} width="100" height="100" /> 
                                    </td>
                                    <td>
                                        <button className="btn btn-sm btn-danger" onClick={() => handleDelete(gallery.id)}>Delete</button>
                                    </td>
                                    </tr>
                                ))}
                            </tbody>
                          </table> */}
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

export default IndexGallery;
