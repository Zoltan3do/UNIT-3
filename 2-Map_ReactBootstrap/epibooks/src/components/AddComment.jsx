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

        fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.bookId}`, {
            method: "POST",
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM3NGRjYzQzYTU2ODAwMTU4ZWM0NGYiLCJpYXQiOjE3MjQzMzc2MTIsImV4cCI6MTcyNTU0NzIxMn0.dyWUC4Qa-VTrKQ-El1RR6v3anSy3He8ma8qpOFTha2Y",
                "Content-Type": "application-json"
            },
            body: JSON.stringify(this.state.review)
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
            .then((data) => {
                this.setState({ comments: data });
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