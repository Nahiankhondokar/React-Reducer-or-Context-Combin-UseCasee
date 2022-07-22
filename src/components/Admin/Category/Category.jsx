import React, { useReducer } from "react";
import {
  Button, Card, Col, Container, Form, Row, Table
} from "react-bootstrap";
import { CategoryReducer, initialState } from "../../../reducers/CategoryReducer";

const Category = () => {

  // reducer
  const [categoryState, dispatch] = useReducer(CategoryReducer, initialState);

  return (
    <>
      <Button className="btn-sm mb-2" variant="info">
        Add Category
      </Button>
      <Card>
        <Card.Header>
          <h2 className="text-center">All Categories</h2>
        </Card.Header>
        <Card.Body className="student-table shadow">
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Slug</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <Button onClick="" className="btn-sm" variant="warning">
                    Edit
                  </Button>
                  <Button onClick="" className="btn-sm" variant="danger">
                    Delete
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Category Add Form */}

      <Container>
        <Row>
          <Col md={6} className="mt-3">
            <Card className="shadow p-3">
              <div className="addCat">
                <h2 className="mt-2 text-center">Add Category</h2>
                <hr />
                <Form onSubmit="" method="POST">
                  <Form.Group>
                    <Form.Label>Category Name</Form.Label>
                    <Form.Control
                      value={categoryState}
                      name="category"
                      onChange={ (e) => dispatch({ type : '', payload : e.target.value })}
                    ></Form.Control>
                  </Form.Group>
    <h2>{categoryState}</h2>
                  <Button
                    type="submit"
                    variant="info"
                    className="btn-sm mt-3 text-center"
                  >
                    Add Category
                  </Button>
                </Form>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Category Edit Form */}

      {/* {catEditForm && (
      <Container>
        <Row>
          <Col md={6} className="m-auto mt-3">
            <Card className="shadow p-3">
              <div className="addCat">
                <h2 className="mt-2 text-center">Edit Category</h2>
                <hr />
                <Form onSubmit={handleFormUpdate} method="POST">
                  <Form.Group>
                    <Form.Label>Category Name</Form.Label>
                    <Form.Control
                      value={editCat.name}
                      onChange={(e) =>
                        setEditCat({ ...editCat, name: e.target.value })
                      }
                    ></Form.Control>
                  </Form.Group>

                  <Button
                    type="submit"
                    variant="info"
                    className="btn-sm mt-3 text-center"
                  >
                    Update Category
                  </Button>
                </Form>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    )} */}
    </>
  );
};

export default Category;
