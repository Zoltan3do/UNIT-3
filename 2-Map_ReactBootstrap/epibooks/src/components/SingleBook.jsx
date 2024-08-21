import { Col, Card } from "react-bootstrap";
import { Component } from "react";


class SingleBook extends Component {

    state = {
        selected: false,
    }

    render() {
        return (
            <Col xs={12} md={6} lg={4} xl={3} xxl={2} className="my-2 z-3">
                <Card style={{ width: '100%' }} className={`h-100 d-flex flex-column ${this.state.selected ? 'transformationScale' : ''} z-2 mt-5`}>
                    <Card.Img variant="top" src={this.props.book.img} onClick={() => this.setState({ selected: !this.state.selected })} />
                    <Card.Body className="d-flex flex-column">
                        <div className="flex-grow-1">
                            <Card.Title>{this.props.book.title}</Card.Title>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default SingleBook;