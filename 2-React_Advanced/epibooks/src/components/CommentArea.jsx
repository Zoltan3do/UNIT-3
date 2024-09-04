
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { useState, useEffect } from "react"

function CommentArea() {

    const [comments, setComments] = useState([]);

    // state = {
    //     comments: []
    // }

    function fetchComments() {
        setComments([]);
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
                setComments(data)
            })
            .catch((e) => {
                console.error(e);
            });
    }

    useEffect(() => {
        fetchComments()
    }, [this.props.bookId])

    // componentDidMount() {
    //     fetchComments();
    // }

    // componentDidUpdate(prevProps) {
    //     // Se il bookId cambia, fetch dei nuovi commenti
    //     if (prevProps.bookId !== this.props.bookId) {
    //         this.fetchComments();
    //     }
    // }

    return (
        <div>
            <CommentList comments={comments} />
            <AddComment asin={this.props.bookId} />
        </div>
    );
}

export default CommentArea;
