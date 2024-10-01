import React from "react";
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


function IndexProduk(props) {
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
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
                    {/* <h1 className="card-category">Total</h1> */}
                    <CardTitle tag="h2">Produk</CardTitle>
                  </Col>
                  
                </Row>
              </CardHeader>
              <CardBody>
              <Row>
                  <Col lg="12">
                    <div className="container">
                        <a href="/admin/tambahproduk" class="btn btn-sm btn-info">Tambah Produk</a>
                        <table className="table table-dark table-hover w-100">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Role</th>
                                <th scope="col">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>John Doe</td>
                                <td>johndoe@example.com</td>
                                <td>Admin</td>
                                <td>
                                <button className="btn btn-sm btn-primary">Edit</button>
                                <button className="btn btn-sm btn-danger">Delete</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
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

export default IndexProduk;