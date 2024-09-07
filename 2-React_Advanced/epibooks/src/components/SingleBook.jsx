import { Col, Card } from "react-bootstrap";

const SingleBook = ({ book, onBookSelect, isSelected }) => {
    return (
        <Col xs={12} md={6} lg={4} xl={3} xxl={2} className="my-2">
            <Card
                className={`w-100 h-100 d-flex flex-column ${isSelected ? 'transformationScale z-3' : ''} z-2 mt-5`}
                onClick={() => onBookSelect(book)} // Notifica BookList della selezione
                style={{ cursor: 'pointer' }} data-testid="single-book"
            >
                <Card.Img variant="top" src={book.img} />
                <Card.Body className="d-flex flex-column">
                    <div className="flex-grow-1">
                        <Card.Title>{book.title}</Card.Title>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default SingleBook;
