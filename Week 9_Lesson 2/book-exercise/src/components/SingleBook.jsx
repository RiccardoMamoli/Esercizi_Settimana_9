import { Component } from 'react';
import { Card, Col, Button } from 'react-bootstrap';

// function SingleBook({ book }) {
//     return (
//         <>
//                     <Col sm={12} lg={3} xl={2}>
//                         <Card>
//                             <div className='img-box'>
//                                 <img src={book.img} alt="book-cover" className='img-fluid' />
//                             </div>
//                             <Card.Body>
//                                 <Card.Title> {book.title} </Card.Title>
//                                 <Card.Text>
//                                     {book.price}
//                                 </Card.Text>
//                                 <Button variant="primary"> Add To Cart</Button>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//         </>
//     )
// }

// export default SingleBook




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
        const {selected} = this.state;
        const borderClass = selected ? 'border-red' : '';

        return (
            <>
                <Col sm={12} lg={3} xl={2}>
                    <Card onClick={this.handleClick} className={`${borderClass}`}>
                        <div className='img-box'>
                            <img src={this.props.book.img} alt="book-cover" className='img-fluid'/>
                        </div>
                        <Card.Body>
                            <Card.Title>{this.props.book.title} </Card.Title>
                            <Card.Text>
                                {this.props.book.price}
                            </Card.Text>
                            <Button variant="primary"> Add To Cart</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </>
        )
    }
}

export default SingleBook


