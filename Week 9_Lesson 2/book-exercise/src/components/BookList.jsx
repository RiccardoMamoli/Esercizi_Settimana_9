import { Accordion, Container, Row } from 'react-bootstrap'
import SingleBook from './SingleBook';

function BookList({ list }) {
    return (
        <Accordion defaultActiveKey="0" className='mt-5'>
            <Accordion.Item eventKey="0">
                <Accordion.Header> Book List</Accordion.Header>
                <Accordion.Body>
                    <Container>
                        <Row>

                            {
                                list.map((book) => {
                                    return (
                                        <>
                                            <SingleBook book={book} />
                                        </>
                                    )
                                })
                            }
                        </Row>

                    </Container>

                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default BookList;
