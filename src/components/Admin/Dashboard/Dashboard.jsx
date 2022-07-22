import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <>
        <section className="my-5">
          <Container>
            <Row>
              <Col md={3} className="shadow dash-menu">
                <ul className="list-group pt-4">
                  <li className="list-group-item">
                    <Link to="" href="#">
                      Dashboard
                    </Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/dashboard/category" href="#">
                      Categroy
                    </Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="" href="#">
                      Tag
                    </Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/dashboard/all-product">Product</Link>
                  </li>
                </ul>
              </Col>
              <Col md={9}>
                <h1 className="text-center">Dashboard</h1>
                <hr />
                <Outlet></Outlet>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}
export default Dashboard;
