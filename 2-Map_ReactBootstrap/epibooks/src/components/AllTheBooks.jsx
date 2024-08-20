import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";


import { Container, Row, Col, Card, Button } from "react-bootstrap";

import { Component } from "react";

class AllTheBooks extends Component {

    render() {
        return (
            <Container>
                <Row className="justify-content-center my-4">
                    {fantasy.map((b) => {
                        return (
                            <Col xs={12} md={6} lg={4} xl={3} xxl={2}>
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={b.img} />
                                    <Card.Body>
                                        <Card.Title>{b.title}</Card.Title>
                                        <Card.Text>
                                            {b.price} €
                                        </Card.Text>
                                        <Button variant="primary">Scopri di più</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                    {history.map((b) => {
                        return (
                            <Col xs={12} md={6} lg={4} xl={3} xxl={2}>
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={b.img} />
                                    <Card.Body>
                                        <Card.Title>{b.title}</Card.Title>
                                        <Card.Text>
                                            {b.price} €
                                        </Card.Text>
                                        <Button variant="primary">Scopri di più</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                    {horror.map((b) => {
                        return (
                            <Col xs={12} md={6} lg={4} xl={3} xxl={2}>
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={b.img} />
                                    <Card.Body>
                                        <Card.Title>{b.title}</Card.Title>
                                        <Card.Text>
                                            {b.price} €
                                        </Card.Text>
                                        <Button variant="primary">Scopri di più</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                    {romance.map((b) => {
                        return (
                            <Col xs={12} md={6} lg={4} xl={3} xxl={2}>
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={b.img} />
                                    <Card.Body>
                                        <Card.Title>{b.title}</Card.Title>
                                        <Card.Text>
                                            {b.price} €
                                        </Card.Text>
                                        <Button variant="primary">Scopri di più</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                     {scifi.map((b) => {
                        return (
                            <Col xs={12} md={6} lg={4} xl={3} xxl={2}>
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={b.img} />
                                    <Card.Body>
                                        <Card.Title>{b.title}</Card.Title>
                                        <Card.Text>
                                            {b.price} €
                                        </Card.Text>
                                        <Button variant="primary">Scopri di più</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        )
    }

}
export default AllTheBooks;