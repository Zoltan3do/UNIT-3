import fantasy from "../data/fantasy.json";
import { Container, Row, Col, Form, FormControl } from "react-bootstrap";
import { Component } from "react";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

class BookList extends Component {
    state = {
        search: "",
        allBooks: [...fantasy],
        selectedBook: null // Stato per il libro selezionato
    };

    handleSearch = (event) => {
        this.setState({ search: event.target.value });
    }

    handleBookSelection = (book) => {
        this.setState({ selectedBook: book }); // Aggiorna lo stato con il libro selezionato
    }

    filteredBooks = () => {
        return this.state.allBooks.filter((book) =>
            book.title.toLowerCase().includes(this.state.search.toLowerCase())
        );
    }

    render() {
        return (
            <Container>
                <Form className="fattiVedere">
                    <FormControl
                        type="text"
                        placeholder="Cerca per titolo"
                        value={this.state.search}
                        onChange={this.handleSearch}
                    />
                </Form>
                <Row className="my-4">
                    <Col md={8}>
                        <Row className="justify-content-center">
                            {this.filteredBooks().map((b) => (
                                <SingleBook 
                                    key={b.asin} 
                                    book={b} 
                                    onBookSelect={this.handleBookSelection} 
                                    isSelected={this.state.selectedBook === b} // Passa la selezione
                                />
                            ))}
                        </Row>
                    </Col>
                    <Col md={4}>
                        {/* CommentArea ora dipende dalla selezione del libro */}
                        {this.state.selectedBook ? (
                            <CommentArea bookId={this.state.selectedBook.asin} />
                        ) : (
                            <p>Seleziona un libro per vedere i commenti</p>
                        )}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default BookList;
