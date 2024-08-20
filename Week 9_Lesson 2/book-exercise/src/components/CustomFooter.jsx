import { Container, Row, Col } from "react-bootstrap";

function CustomFooter () {
    return (
        <>
        <Container fluid bg="dark" data-bs-theme="dark" className="fixed-bottom bg-dark text-light">
            <Row>
                <Col className="d-flex justify-content-center align-items-center">
                <p className="p-0 py-3 m-0"> Footer Di Prova</p>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default CustomFooter;