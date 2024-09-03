import React, { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
    state = {
        comments: []
    }

    fetchComments = () => {
        this.setState({ comments: [] });
        fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.bookId}`, {
            
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM3NGRjYzQzYTU2ODAwMTU4ZWM0NGYiLCJpYXQiOjE3MjQzMzc2MTIsImV4cCI6MTcyNTU0NzIxMn0.dyWUC4Qa-VTrKQ-El1RR6v3anSy3He8ma8qpOFTha2Y"
            }
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("errore nella chiamata");
                }
            })
            .then((data) => {
                this.setState({ comments: data });
            })
            .catch((e) => {
                console.error(e);
            });
    }

    componentDidMount() {
        this.fetchComments();
    }

    componentDidUpdate(prevProps) {
        // Se il bookId cambia, fetch dei nuovi commenti
        if (prevProps.bookId !== this.props.bookId) {
            this.fetchComments();
        }
    }

    render() {
        return (
            <div>
                <CommentList comments={this.state.comments} />
                <AddComment asin={this.props.bookId} />
            </div>
        );
    }
}

export default CommentArea;
