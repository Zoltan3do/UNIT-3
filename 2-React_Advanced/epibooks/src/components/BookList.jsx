import fantasy from "../data/fantasy.json";
import { Container, Row, Col, Form, FormControl } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";
import { useState } from "react"

function BookList() {

    const [search, setSearch] = useState("");
    const [allBooks, setAllBooks] = useState([...fantasy]);
    const [selectedBook, setSelectedBook] = useState(null);

    // state = {
    //     search: "",
    //     allBooks: [...fantasy],
    //     selectedBook: null // Stato per il libro selezionato
    // };

    function handleSearch(event) {
        setSearch(event.target.value);
    }

    function handleBookSelection(book) {
        setSelectedBook(book); // Aggiorna lo stato con il libro selezionato
    }

    function filteredBooks() {
        return allBooks.filter((book) =>
            book.title.toLowerCase().includes(search.toLowerCase())
        );
    }

    return (
        <Container>
            <Form className="fattiVedere">
                <FormControl
                    type="text"
                    placeholder="Cerca per titolo"
                    value={search}
                    onChange={handleSearch}
                />
            </Form>
            <Row className="my-4">
                <Col md={8}>
                    <Row className="justify-content-center">
                        {filteredBooks().map((b) => (
                            <SingleBook
                            key={b.asin}
                            book={b}
                            onBookSelect={handleBookSelection}
                            isSelected={selectedBook === b}
                            />
                        ))}
                    </Row>
                </Col>
                <Col md={4}>
                    {/* CommentArea ora dipende dalla selezione del libro */}
                    {selectedBook ? (
                        <CommentArea bookId={selectedBook.asin} data-testid="areacommenti"/>
                    ) : (
                        <p>Seleziona un libro per vedere i commenti</p>
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default BookList;
