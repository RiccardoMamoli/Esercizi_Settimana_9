import { Component } from "react";
import { ListGroup } from 'react-bootstrap';

class CommentArea extends Component {

    state = {
        comments: []
    }

    fetchComment = () => {
        const url = 'https://striveschool-api.herokuapp.com/api/comments/' + this.props.asin;
        console.log(url)
        fetch(url, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNmEyY2YyNjBjYzAwMTVjYzBlMGIiLCJpYXQiOjE3MjQzMzUwMTcsImV4cCI6MTcyNTU0NDYxN30.h7KNYUqKjaAgf-TwgBihaqgCLDamwaIk2EaMrD5b5I8"
            }
        })
            .then((response) => {
                if (response.ok) {
                    console.log('tutto ok')
                    return response.json();
                } else {
                    throw new Error('Non va bene')
                }
            })
            .then((comments) => {
                console.log('sono arrivato qui')
                this.setState({
                    comments: comments
                })

            })
            .catch((err) => {
                console.log('Non va bene', err);
            })
    }

    componentDidMount = () => {
        this.fetchComment();
    }

    render() {
        return (
            <>
                <ListGroup>
                {this.state.comments.map((comments) => (
                    <ListGroup.Item>
                        <div>
                            <p> <strong> Commento: </strong> {comments.comment} </p>
                            <p> <strong> Rating: </strong> {comments.rate} </p>
                        </div>
                    </ListGroup.Item>
                ))}
                </ListGroup>
            </>
        )
    }
}


export default CommentArea;