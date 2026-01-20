import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
      
  return (
<Link to={`/product/${product.id}`}>
      <Card className="h-100 shadow-sm">
        <Card.Img
          variant="top"
          src={product.image}
          style={{ height: "200px", objectFit: "contain" }}
        />
  
        <Card.Body>
          <Card.Title style={{ fontSize: "14px" }}>
            {product.title}
          </Card.Title>
  
          <Card.Text className="fw-bold">
            ₹ {product.price}
          </Card.Text>
  
          <Button variant="warning" size="sm">
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
</Link>
  );
}

export default ProductCard;
