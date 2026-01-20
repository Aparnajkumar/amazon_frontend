import { useCart } from '../CartContext';

function Cart() {
  const { cart, removeFromCart } = useCart(); 

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <Header />
      <Container className="my-5 pt-5">
        <h3 className="mb-4 fw-bold">Shopping Cart</h3>
        <Row>
          <Col md={8}>
            {cart.length === 0 ? (
              <div className="text-center p-5 border rounded bg-light">
                <h4>Your Amazon Cart is empty.</h4>
                <Button variant="warning" onClick={() => navigate('/')}>Shop now</Button>
              </div>
            ) : (
              <ListGroup variant="flush">
                {cart.map((item) => (
                  <ListGroup.Item key={item.id} className="p-3 border rounded mb-2 shadow-sm bg-white">
                    <Row className="align-items-center">
                      <Col xs={3} md={2}>
                        <img src={item.image} alt={item.title} className="img-fluid" />
                      </Col>
                      <Col xs={6} md={7}>
                        <h6 className="fw-bold">{item.title}</h6>
                        <p className="text-success small mb-1">In Stock</p>
                        <p className="mb-0">Qty: {item.quantity}</p>
                        <Button 
                          variant="link" 
                          className="p-0 text-danger text-decoration-none small"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Delete
                        </Button>
                      </Col>
                      <Col xs={3} md={3} className="text-end">
                        <p className="fw-bold fs-5">₹{item.price * item.quantity}</p>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </Col>
          <Col md={4}>
            <Card className="p-3 shadow-sm sticky-top" style={{ top: '100px' }}>
              <h5>Subtotal ({cart.length} items): <span className="fw-bold">₹{total}</span></h5>
              <Button variant="warning" className="w-100 mt-3 rounded-pill shadow-sm">
                Proceed to Buy
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}