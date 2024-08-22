import { Component } from 'react';
import { Card, Col } from 'react-bootstrap';
import CommentArea from './CommentArea';
import AddComment from './AddComment';


class SingleBook extends Component {

    state = {
        selected: false
    }

    handleClick = () => {
        this.setState(prevState => ({
            selected: !prevState.selected

        }));
    }


    render() {
        const { selected } = this.state;
        const borderClass = selected ? 'border-red' : '';

        return (
            <>
                <Col sm={12} lg={3} xl={3}>
                    <Card onClick={this.handleClick} className={`${borderClass} overflow-hidden`}>
                        <div className='img-box'>
                            <img src={this.props.book.img} alt="book-cover" className='img-fluid' />
                        </div>
                        <Card.Body>
                            <Card.Title>{this.props.book.title} </Card.Title>
                            <Card.Text>
                                <div>
                                    {this.props.book.price}
                                </div>
                                <div>
                                    {this.props.book.asin}
                                </div>
                            </Card.Text>
                        </Card.Body>
                        {
                            this.state.selected && <div className='overflow-auto commentArea'>
                                <CommentArea asin={this.props.book.asin} />
                                <AddComment asin={this.props.book.asin} />
                            </div>
                        }
                    </Card>
                </Col>
            </>
        )
    }
}

export default SingleBook


