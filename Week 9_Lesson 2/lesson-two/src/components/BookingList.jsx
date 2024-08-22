// Recupera le prenotazioni del form e ce le fa vedere (ipoteticamente in una pagina admin)
// lavoreremo con un componente a classe avendo bisogno dello state

import { Component } from "react";
import { Container, Row, Col, ListGroup, Spinner, Alert } from 'react-bootstrap'

class BookingList extends Component {

    state = {

        reservations: [], // siccome recupereremo un array di prenotazioni, lo inizializziamo come un array vuoto
        isLoading: true,
        isError: false

    }

    componentDidMount = () => {
        // è un metodo che viene eseguito immediamente dopo il primo render (tipo un init). E' un metodo presistente di React e viene lanciato UNA volta sola
        this.fetchReservations()
    }

    fetchReservations = () => {
        fetch('https://striveschool-api.herokuapp.com/api/reservation')
            .then((response) => {
                if (response.ok) {
                    console.log('Chiamata andata a buon fine!')
                    return response.json()

                } else {
                    throw new Error('La chiamata NON è andata a buon fine!')
                }
            })
            .then((arrayOfReservations) => {
                console.log('PRENOTAZIONE RECUPERATE DAL SERVER', arrayOfReservations)
                this.setState({
                    reservations: arrayOfReservations,
                    isLoading: false

                    //DOPO OGNI CAMBIO DI STATO O CAMBIO DI PROPS RENDER VIENE REINVOCATO 
                })
            })
            .catch((err) => {
                console.log('Errore recupero dati', err)

                this.setState({
                    isLoading: false,
                    isError: true
                })
            })
    }

    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col md={6}>
                            <h2> Prenotazioni Esistenti!</h2>
                            <div className="d-flex justify-content-center mb-3">

                                {
                                    this.state.isLoading && <Spinner animation="border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </Spinner>

                                }

                                {
                                    this.state.isError && <Alert className="bg-danger text-light"> Something went wrong!</Alert>

                                }


                            </div>
                            <ListGroup>
                                {
                                    this.state.reservations.map((res) => {
                                        return (
                                            <ListGroup.Item key={res._id}>
                                                {res.name} per {res.numberOfPeople}
                                            </ListGroup.Item>
                                        )
                                    })
                                }
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default BookingList;