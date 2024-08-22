import { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap'


class CustomSearch extends Component {

    state = {
        
        search: '',

    }

    render() {


        return (
            <>
                <Form inline className='bg-dark'>
                    <Row>
                        <Col xs="auto">
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                className=" mr-sm-2"
                                value={this.state.search}
                                onChange={(e) => {
                                    this.setState({
                                        search: e.target.value
                                    })
                                }}
                            />
                        </Col>
                        <Col xs="auto">
                            <Button type="submit">Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </>
        )
    }
}

export default CustomSearch;