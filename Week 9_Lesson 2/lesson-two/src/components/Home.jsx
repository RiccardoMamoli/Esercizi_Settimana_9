import { Container, Row, Col, Carousel,  } from "react-bootstrap";

function Home() {
    return (
        <>
            <Container fluid>
                <Row className="justify-content-center">
                    <Col xs={12} md={6} lg={4} className="text-center">
                        <h2> Benvenuti a Epistaurant!</h2>
                        <h4>Risorante Italiano dal 1970!</h4>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <Carousel>
                            <Carousel.Item>
                                <img src="https://www.placedog.net/500" alt="dog pic"/>
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                            <img src="https://www.placedog.net/501" alt="dog pic"/>
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                            <img src="https://www.placedog.net/502" alt="dog pic"/>
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;