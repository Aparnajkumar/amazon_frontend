import React from "react";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import { FaShoppingCart, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext"; // Added to show item count

function Header() {
  const { cart } = useCart(); // Get cart length for the icon

  return (
    <>
      {/* TOP HEADER */}
      <Navbar bg="dark" variant="dark" expand="lg" className="py-2 sticky-top">
        <Container fluid>
          {/* Logo */}
          <Link to="/" className="navbar-brand">
            <img 
              width="100px" 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLxpqqVKlCrgb7TVB6hJB_MDIpDdqIC7I58g&s" 
              alt="Amazon Logo" 
            />
          </Link>

          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">
            <div className="text-light d-none d-md-flex align-items-center mx-3">
              <FaMapMarkerAlt className="me-1" />
              <div style={{ fontSize: "12px" }}>
                <div>Hello</div>
                <strong className="d-block">Select your address</strong>
              </div>
            </div>

            <Form className="d-flex flex-grow-1 my-2 my-lg-0 mx-lg-3">
              <FormControl
                type="search"
                placeholder="Search Amazon"
                className="rounded-0 border-0"
              />
              <Button variant="warning" className="rounded-0 border-0 px-3">
                Search
              </Button>
            </Form>

            <Nav className="ms-auto align-items-lg-center">
              <Link to="/auth" className="nav-link text-light mx-2">
                <small className="d-block" style={{ fontSize: "12px" }}>Hello, Sign in</small>
                <span className="fw-bold">Account & Lists</span>
              </Link>

              <Link to="/orders" className="nav-link text-light mx-2">
                <small className="d-block" style={{ fontSize: "12px" }}>Returns</small>
                <span className="fw-bold">& Orders</span>
              </Link>

              <Link to="/cart" className="nav-link text-light d-flex align-items-end mx-2 position-relative">
                <div className="position-relative">
                  <FaShoppingCart size={28} />
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
                    {cart?.length || 0}
                  </span>
                </div>
                <span className="fw-bold ms-1">Cart</span>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar bg="secondary" variant="dark" className="py-0 overflow-auto text-nowrap">
        <Container fluid>
          <Nav className="flex-row">
            <Nav.Link className="px-3 text-white">All</Nav.Link>
            <Nav.Link className="px-3 text-white">Today's Deals</Nav.Link>
            <Nav.Link className="px-3 text-white">Customer Service</Nav.Link>
            <Nav.Link className="px-3 text-white">Registry</Nav.Link>
            <Nav.Link className="px-3 text-white">Gift Cards</Nav.Link>
            <Nav.Link className="px-3 text-white">Sell</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;