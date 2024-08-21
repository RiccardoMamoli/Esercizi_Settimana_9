import { Component } from "react";
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';


// decidiamo i campi, verrano forniti dal backender

// name --> string
// phone --> string/number
// numberOfPeople --> number
// smoking --> true/false
// dateTime --> string
// special requests --> string


class TableBooking extends Component {

    state = {

        reservation: {

            // definiamo lo state iniziale, quindi tecnicamente vuoto

            name: '',
            phone: '',
            numberOfPeople: 1,
            smoking: false,
            dateTime: ''
        }
    }

    // ipotesi con funzione

    handleChange = (e, property) => {
        this.setState({
            reservation: {
                ...this.state.reservation,
                [property]: e.target.value,
            },
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://www.striveschool-api.herokuapp.com/api/reservation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            if (response.ok) {
                console.log('ok')
            } else {
                throw new error
            }
        })
        .catch()
    }

    render() {
        return (
            <>
                <Container>
                    <Col xs={12} md={6}>
                        <h2 className="text-center"> Prenota il tuo tavolo ora!</h2>
                        <Row className="justify-content-center">
                            <Form onSubmit={this.handleSubmit}>

                                <Form.Group className="mb-3">
                                    <Form.Label> Nome </Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Inserisci il tuo nome"
                                        required
                                        onChange={(e) => {

                                            this.setState({
                                                reservation: {
                                                    ...this.state.reservation,
                                                    name: e.target.value,
                                                },
                                            })

                                        }}
                                        value={this.state.reservation.name}
                                    />
                                </Form.Group>

                                {this.state.reservation.name === 'Riccardo' && <Alert> Ciao! </Alert>}

                                <Form.Group className="mb-3">
                                    <Form.Label>N. Telefono</Form.Label>
                                    <Form.Control
                                        type="tel"
                                        placeholder="Inserisci un numero italiano"
                                        required
                                        onChange={(e) => {
                                            this.handleChange(e, 'phone')
                                        }}
                                        value={this.state.reservation.phone}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Numero di Persone</Form.Label>
                                    <Form.Select
                                        type="tel"
                                        placeholder="Inserisci un numero italiano"
                                        required
                                        onChange={(e) => {
                                            this.setState({
                                                reservation: {
                                                    ...this.state.reservation,
                                                    numberOfPeople: e.target.value
                                                }
                                            })
                                        }}
                                        value={this.state.reservation.numberOfPeople}
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Check
                                        type="checkbox"
                                        label="Tavolo Fumatori"
                                        onChange={(e) => {
                                            this.setState({
                                                reservation: {
                                                    ...this.state.reservation,
                                                    smoking: e.target.checked,
                                                }
                                            })
                                        }}
                                        checked={this.state.reservation.smoking}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Quando volete venire?</Form.Label>
                                    <Form.Control
                                        type="datetime-local"
                                        onChange={(e) => {
                                            this.setState({
                                                reservation: {
                                                    ...this.state.reservation,
                                                    dateTime: e.target.value,
                                                }
                                            })
                                        }}
                                    />
                                </Form.Group>


                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Row>
                    </Col>
                </Container >
            </>
        )
    }
}

export default TableBooking;