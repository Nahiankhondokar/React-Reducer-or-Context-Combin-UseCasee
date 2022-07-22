import React, { Component } from "react";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class ProductAdd extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col md={6} className="m-auto mt-3">
              <Card className="shadow p-3">
                <div className="addCat">
                  <h2 className="mt-2 text-center">Add Product</h2>
                  <hr />
                  <Form onSubmit="" method="POST">
                    <Form.Group>
                      <Form.Label>Category Name</Form.Label>
                      <Form.Control value=""></Form.Control>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Regular Price</Form.Label>
                      <Form.Control value=""></Form.Control>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>sale Price</Form.Label>
                      <Form.Control value=""></Form.Control>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Categroy</Form.Label>
                      <select className="form-control" name="" id=""></select>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Product Photo</Form.Label>
                      <Form.Control value=""></Form.Control>
                    </Form.Group>

                    <Button
                      type="submit"
                      variant="info"
                      className="btn-sm mt-3 text-center"
                    >
                      Add Product
                    </Button>
                  </Form>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default ProductAdd;
