import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ProductDetails({ products }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <div className="text-center mt-5">Product Not Found</div>;

  const handleAddToCart = () => {
    addToCart(product); 
    alert("Added to cart!");
  };

  return (
    <>
      <Header />
      <Container className="my-5 pt-5">
        <Row>
          <Col md={6} className="text-center">
            <img src={product.image} alt={product.title} className="img-fluid rounded shadow-sm" style={{ maxHeight: '450px' }} />
          </Col>
          <Col md={6}>
            <h2 className="fw-bold">{product.title}</h2>
            <p className="text-success fw-bold fs-4">₹{product.price}</p>
            <hr />
            <h5>About this item:</h5>
            <ul>
              <li>High-quality materials and durable design.</li>
              <li>1-year brand warranty.</li>
              <li>Free delivery on eligible orders.</li>
            </ul>
            <div className="d-grid gap-2 mt-4">
              <Button onClick={handleAddToCart} variant="warning" size="lg">Add to Cart</Button>
              <Button variant="outline-dark" size="lg">Buy Now</Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default ProductDetails;