import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-light mt-5">
      <div className="bg-secondary text-center py-3">
        Back to top
      </div>

      <Container className="py-4">
        <Row>
          <Col md={3}>
            <h6>Get to Know Us</h6>
            <p>About Amazon</p>
            <p>Careers</p>
            <p>Press Releases</p>
          </Col>

          <Col md={3}>
            <h6>Connect with Us</h6>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </Col>

          <Col md={3}>
            <h6>Make Money with Us</h6>
            <p>Sell on Amazon</p>
            <p>Affiliate Program</p>
            <p>Advertise Your Products</p>
          </Col>

          <Col md={3}>
            <h6>Let Us Help You</h6>
            <p>Your Account</p>
            <p>Returns Centre</p>
            <p>Help</p>
          </Col>
        </Row>

        <hr />

        <p className="text-center small">
          © 2026 Amazon Clone – Built by Aparna
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
