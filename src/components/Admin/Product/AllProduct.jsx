import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Table } from "react-bootstrap";

class AllProduct extends Component {
  render() {
    return (
      <>
        <Link
          to="/dashboard/add-product"
          className="btn btn-info btn-sm mb-2"
          variant="info"
        >
          Add Product
        </Link>
        <Card>
          <Card.Header>
            <h4 className="text-center">All Product</h4>
          </Card.Header>
          <Card.Body className="student-table shadow">
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>SPrice</th>
                  <th>Category</th>
                  <th>Tag</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <Link
                      to=""
                      className="btn btn-info btn-sm"
                      variant="primary"
                    >
                      view
                    </Link>
                    <Link
                      to=""
                      className="btn btn-warning btn-sm"
                      variant="warning"
                    >
                      Edit
                    </Link>
                    <Button className="btn-sm" variant="danger">
                      Delete
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </>
    );
  }
}
export default AllProduct;
