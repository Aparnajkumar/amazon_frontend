import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap'
import ProductCard from '../components/Products';

function Home() {
  const products = [
  {
    id: 1,
    title: "Boat Rockerz 450 Bluetooth Headphones",
    price: 1499,
    image:
      "https://m.media-amazon.com/images/I/61u1VALn6JL._SX522_.jpg",
  },
  {
    id: 2,
    title: "Noise ColorFit Pulse Smart Watch",
    price: 1799,
    image:
      "https://m.media-amazon.com/images/I/61epn29QG0L._SX522_.jpg",
  },
  {
    id: 3,
    title: "HP Wireless Keyboard & Mouse Combo",
    price: 1299,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-7YhL5zF9dGi1U9Jv-cGeePm6CPzUwj9_9w&s",
  },
  {
    id: 4,
    title: "AmazonBasics USB C Cable",
    price: 399,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC78PajCPQCOaJ3wv2X8xQun-eO6fqJNLoWw&s",
  },
];

  return (
    <>
    <Header/>
    

    <Carousel fade controls={false} indicators={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/WLA/18/GW/D374469778_IN_WLA_Janart26-GW_PC_3000x1200_1._CB773454086_.jpg"
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG25/Media/JanART/PCHero/Unrec/1._CB773545099_.jpg"
          alt="Second slide"
        />
        
      </Carousel.Item>
      
    </Carousel>


    <div  style={{backgroundColor: "#e3e6e6", marginTop: "-220px", position: "relative", zIndex: 2 }} className="py-4 -top-10">
      <Container fluid>
        <Row className="gx-3 px-3">

          {/* CARD 1 */}
          <Col md={3}>
            <Card className="p-3 h-100">
              <h6 className="fw-bold">
                Up to 70% off | Truly wireless earbuds
              </h6>

              <img
                src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT8aEXhy4KbYP6q6UqrxTdzSGooOONo8w05gxjYNB9sP_3xENK4Dwc-TLfdTvFeuruszvC28_WSURYt0dlI9HttT_thM4EpNja8wwDzt_XUj_ee82AzIzuV4kLoAuGY0OpgSBaYrQY&usqp=CAc"
                alt=""
                className="img-fluid my-2"
              />

              <a href="#" className="text-decoration-none">
                See all offers
              </a>
            </Card>
          </Col>

          {/* CARD 2 */}
          <Col md={3}>
            <Card className="p-3 h-100">
              <h6 className="fw-bold">
                Shop by brand | Deals on top smartphones
              </h6>

              <Row className="g-2 my-2">
                <Col xs={6}>
                  <img
                    src="https://m.media-amazon.com/images/I/71xb2xkN5qL._SX522_.jpg"
                    className="img-fluid"
                  />
                  <small>Samsung</small>
                </Col>

                <Col xs={6}>
                  <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Wireless/debaishx/MSOJanArt/D375129058_IN_WLD_MSO_Janart_2026_PC_QC_186x116_2._SY116_CB773082139_.jpg"
                    className="img-fluid"
                  />
                  <small>Apple</small>
                </Col>

                <Col xs={6}>
                  <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Wireless/debaishx/MSOJanArt/D375129058_IN_WLD_MSO_Janart_2026_PC_QC_186x116_3._SY116_CB773082139_.jpg"
                    className="img-fluid"
                  />
                  <small>OnePlus</small>
                </Col>

                <Col xs={6}>
                  <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Wireless/debaishx/MSOJanArt/D375129058_IN_WLD_MSO_Janart_2026_PC_QC_186x116_4._SY116_CB773082139_.jpg"
                    className="img-fluid"
                  />
                  <small>iQOO</small>
                </Col>
              </Row>

              <a href="#" className="text-decoration-none">
                See all offers
              </a>
            </Card>
          </Col>

          {/* CARD 3 */}
          <Col md={3}>
            <Card className="p-3 h-100">
              <h6 className="fw-bold">
                Up to 75% off | Electronics & Accessories
              </h6>

              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/headphones/Janart/mso/PC_CC_379x3080.5x._SY304_CB773159703_.jpg"
                className="img-fluid my-2"
              />

              <a href="#" className="text-decoration-none">
                See all offers
              </a>
            </Card>
          </Col>

          {/* CARD 4 */}
          <Col md={3}>
            <Card className="p-3 h-100">
              <h6 className="fw-bold">
                Bigger screens, Smarter choice
              </h6>

              <Row className="g-2 my-2">
                <Col xs={6}>
                  <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/TVsmovie2/B0G44MLJDB_TCL_55_PC_QC_186x116._SY116_CB773513560_.jpg"
                    className="img-fluid"
                  />
                  <small>TCL 55"</small>
                </Col>

                <Col xs={6}>
                  <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/TVsmovie2/B0F43DQN7H_Samsung_55_PC_QC_186x116._SY116_CB773513560_.jpg"
                    className="img-fluid"
                  />
                  <small>Samsung</small>
                </Col>

                <Col xs={6}>
                  <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/TVsmovie2/B0D3DW1CJF_Sony_55_PC_QC_186x116._SY116_CB773513560_.jpg"
                    className="img-fluid"
                  />
                  <small>Sony</small>
                </Col>

                <Col xs={6}>
                  <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/TVsmovie2/B0D3XD9M5D_Toshiba_43_PC_QC_186x116_2._SY116_CB773496446_.jpg"
                    className="img-fluid"
                  />
                  <small>Toshiba</small>
                </Col>
              </Row>

              <a href="#" className="text-decoration-none">
                Explore more
              </a>
            </Card>
          </Col>

        </Row>
      </Container>
    </div>



        <Container fluid className="mt-n5">
        <Row className="g-3 px-3">
          {products.map((item) => (
            <Col key={item.id} md={3}>
            <ProductCard product={item}/>  
            </Col>
          ))}
        </Row>
      </Container>




    <Footer/>
    </>
  )
}

export default Home