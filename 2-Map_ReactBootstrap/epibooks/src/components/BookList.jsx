import fantasy from "../data/fantasy.json";
// import history from "../data/history.json";
// import horror from "../data/horror.json";
// import romance from "../data/romance.json";
// import scifi from "../data/scifi.json";


import { Container, Row } from "react-bootstrap";
import { Component } from "react";
import SingleBook from "./SingleBook";

class BookList extends Component {

    render() {
        const allBooks = [...fantasy];
        return (
            <Container>
                <Row className="justify-content-center my-4">
                    {allBooks.map((b) => {
                        return (
                            <SingleBook book={b} />
                        )
                    })}
                </Row>
            </Container>
        )
    }
}
export default BookList;