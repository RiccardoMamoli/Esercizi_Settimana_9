import { Component } from "react";
import { Form, Button } from 'react-bootstrap'

class AddComment extends Component {
    state = {
        review: {
            comment: '',
            rate: 1,
            elementID: this.props.asin
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('https://striveschool-api.herokuapp.com/api/comments/', {
            method: 'POST',
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNmEyY2YyNjBjYzAwMTVjYzBlMGIiLCJpYXQiOjE3MjQzMzUwMTcsImV4cCI6MTcyNTU0NDYxN30.h7KNYUqKjaAgf-TwgBihaqgCLDamwaIk2EaMrD5b5I8",
                "Content-Type": 'application/json',
            },
            body: JSON.stringify
        })

    }

    render() {
        return (
            <>
                <Form onSubmit={this.handleSubmit()}>
                    <Form.Select
                        value={this.state.review.rate}
                        onChange={(e) => {
                            this.setState({
                                ...this.setState.review.rate,
                                rate: e.target.value
                            })
                        }}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Select>
                    <Form.Group>
                        <Form.Control
                            placeholder="Scrivi la tua recensione"
                            value={this.state.review.comment}
                            onChange={(e) => {
                                this.setState({
                                    ...this.state.review.comment,
                                    comment: e.target.value
                                })
                            }} />
                    </Form.Group>
                    <Button variant='success' type="submit">
                        Invia!
                    </Button>
                </Form>
            </>
        )
    }
}

export default AddComment;