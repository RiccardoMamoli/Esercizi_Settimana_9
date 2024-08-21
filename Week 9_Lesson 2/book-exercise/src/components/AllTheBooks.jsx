import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import fantasy from '../data/fantasy.json'



function AllTheBooks() {
    return (
        <>
            <Container fluid>
                <Row>
                    {
                        fantasy.map(book => {
                            return (
                                <>
                                    <Col sm={12} lg={3} xl={2}>
                                        <Card>
                                            <div className='img-box'>
                                                <img src={book.img} alt="book-cover" className='img-fluid' />
                                            </div>
                                            <Card.Body>
                                                <Card.Title> {book.title} </Card.Title>
                                                <Card.Text>
                                                    {book.price}
                                                </Card.Text>
                                                <Button variant="primary"> Add To Cart</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </>
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    )
}

export default AllTheBooks;