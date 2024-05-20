import React, { Fragment } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import cardsData from "./cardsData";
import Badge from "@mui/material/Badge"
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
console.log(cardsData);
function Home() {
  const handleAddToCart = (id) => {
    console.log(id);
  };
  return (
    <Fragment>
      <header>
        <Navbar expand="lg" className="" bg="dark" style={{height:"70px"}}>
          <Container>
            <Navbar.Brand className="text-white" href="#">
              Navbar scroll
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link className="text-white" href="#action1">
                  Home
                </Nav.Link>
                <Nav.Link className="text-white" href="#action2">
                  Link
                </Nav.Link>
                <Nav.Link className="text-white" href="#">
                  About
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Badge color="secondary" badgeContent={1} max={10}>
                    <ShoppingCartIcon className="ShoppingCartIcon" />
                </Badge>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <Container className="my-5">
        <Row className="g-3">
          <Col sm="12">
            <h1>List Of Products</h1>
          </Col>
          {cardsData.map((product, index) => (
            <Col md="4" key={index}>
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={product.img}
                  style={{ height: "300px" }}
                />
                <Card.Body>
                  <Card.Title>{product.itemName}</Card.Title>
                  <Card.Text>{product.titl}</Card.Text>
                  <div className="d-flex justify-content-between align-items-center py-2">
                    <span>RS:{product.newPrice}</span>
                    <span className="text-decoration-line-through">
                      RS:{product.oldPrice}
                    </span>
                  </div>
                </Card.Body>
                <Card.Footer>
                  <Button
                    variant="success"
                    onClick={() => handleAddToCart(product.id)}
                  >
                    Add To Cart
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Fragment>
  );
}

export default Home;
