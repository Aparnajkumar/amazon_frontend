import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { FaShoppingCart, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      {/* TOP HEADER */}
      <Navbar bg="dark" variant="dark" className="py-1">
        <Container fluid>
          {/* Logo */}
          <Navbar.Brand className="fw-bold text-warning fs-4">
<img width={"100px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLxpqqVKlCrgb7TVB6hJB_MDIpDdqIC7I58g&s" alt="" />
          </Navbar.Brand>

          {/* Location */}
          <div className="text-light d-flex align-items-center mx-3">
            <FaMapMarkerAlt className="me-1" />
            <div style={{ fontSize: "12px" }}>
              <div>Hello</div>
              <strong>Select your address</strong>
            </div>
          </div>

          {/* Search */}
          <Form className="d-flex flex-grow-1 mx-3">
            <FormControl
              type="search"
              placeholder="Search Amazon"
              className="rounded-0"
            />
            <Button variant="warning" className="rounded-0">
              Search
            </Button>
          </Form>

          {/* Right Menu */}
          <Nav className="align-items-center">
              <Nav.Link>
                <Link to={"/auth"}><small>Hello, Sign in</small></Link>
                <div className="fw-bold">Account & Lists</div>
              </Nav.Link>

            <Nav.Link>
              <small>Returns</small>
              <div className="fw-bold">& Orders</div>
            </Nav.Link>

            <Nav.Link className="d-flex align-items-center">
<Link to={"/cart"}>
                <FaShoppingCart size={22} />
  
</Link>              <span className="fw-bold ms-1">Cart</span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* SECONDARY NAV */}
      <Navbar bg="secondary" variant="dark" className="py-1">
        <Container fluid>
          <Nav className="me-auto">
            <Nav.Link>All</Nav.Link>
            <Nav.Link>Today's Deals</Nav.Link>
            <Nav.Link>Customer Service</Nav.Link>
            <Nav.Link>Registry</Nav.Link>
            <Nav.Link>Gift Cards</Nav.Link>
            <Nav.Link>Sell</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
