import React from "react";
import { Outlet, Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Layout = () => {
  return (
    <div>
      {/* Navbar section */}
      <Navbar
        style={{
          backgroundColor: "white", // Changed background color to whitesmoke
          padding: "10px 20px", // Adjust padding for resizing
          height: "80px", // Adjust height to resize the navbar
        }}
        expand="lg"
      >
        <Container>
          <Navbar.Brand
            href="/"
            className="mx-auto text-center"
            style={{ color: "black" }}
          >
            My Website
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Left-aligned navigation links */}
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/" className="text-center text-black">
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/Contact"
                className="text-center text-black"
              >
                Contact
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/Login"
                className="text-center text-black"
              >
                Login
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/Product"
                className="text-center text-black"
              >
                Product
              </Nav.Link>
            </Nav>

            {/* Right-aligned search bar and icons */}
            <Nav className="ml-auto d-flex align-items-center">
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-dark">
                  <FaSearch /> {/* Use the FaSearch icon in the button */}
                </Button>
              </Form>
              <Nav.Link as={Link} to="/Cart" className="text-black mx-3">
                <FaShoppingCart />
              </Nav.Link>
              <Nav.Link as={Link} to="/User" className="text-black">
                <FaUser />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main content where routes will be rendered */}
      <Container style={{ paddingTop: "20px" }}>
        <Outlet />
      </Container>
    </div>
  );
};

export default Layout;
