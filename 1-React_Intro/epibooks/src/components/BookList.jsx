import fantasy from "../data/fantasy.json";
// import history from "../data/history.json";
// import horror from "../data/horror.json";
// import romance from "../data/romance.json";
// import scifi from "../data/scifi.json";


import { Container, Row, Form, FormControl } from "react-bootstrap";
import { Component } from "react";
import SingleBook from "./SingleBook";

class BookList extends Component {
    state = {
        search: "",
        allBooks: [...fantasy]
    };

    handleSearch = (event) => {
        this.setState({ search: event.target.value });
    }

    filteredBooks = () => {
        return this.state.allBooks.filter((book) =>
            book.title.toLowerCase().includes(this.state.search.toLowerCase()))
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
                <Row className="justify-content-center my-4">
                    {this.filteredBooks().map((b) => {
                        return (
                            <SingleBook key={b.asin} book={b} />
                        )
                    })}
                </Row>
            </Container>
        )
    }
}
export default BookList;