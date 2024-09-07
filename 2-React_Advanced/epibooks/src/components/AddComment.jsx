import { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

class AddComment extends Component {

    state = {
        review: {
            comment: "",
            rate: "1",
            elementId: this.props.asin
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch("https://striveschool-api.herokuapp.com/api/comments/", {
            method: "POST",
            body: JSON.stringify(this.state.review),
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNGViNmYyNjBjYzAwMTVjYzBkY2QiLCJpYXQiOjE3MjU2NDQ4NzAsImV4cCI6MTcyNjg1NDQ3MH0.e0_OTv1d4lkiPGRMkSk8wZIuwie6zJ5RDAL00fgz37I",
                "Content-type": "application/json"
            },
        })
            .then((response) => {
                if (response.ok) {
                    this.setState({
                        review: {
                            elementId: this.state.review.elementId,
                            rate: "1",
                            comment: ""
                        }
                    })
                } else {
                    throw new Error("errore nella chiamata")
                }
            })
            .catch((e) => {
                console.error(e);
            })
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Select value={this.state.review.rate} onChange={e => {
                    this.setState({
                        review: {
                            ...this.state.review,
                            rate: e.target.value,
                        }
                    })
                }}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    < option value="4">4</option>
                    <option value="5">5</option>
                </Form.Select>
                <FormControl placeholder="Scrivi la review..." value={this.state.review.comment} onChange={e => {
                    this.setState({
                        review: {
                            ...this.state.review,
                            comment: e.target.value,
                        }
                    })
                }}>
                </FormControl>
                <Button variant="success" type="submit">INVIA</Button>
            </Form>
        )
    }
}

export default AddComment;