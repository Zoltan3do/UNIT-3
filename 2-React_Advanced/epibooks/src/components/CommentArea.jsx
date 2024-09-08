
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { useState, useEffect } from "react"

function CommentArea({bookId}) {

    const [comments, setComments] = useState([]);

    // state = {
    //     comments: []
    // }

    function fetchComments() {
        setComments([]);
        fetch(`https://striveschool-api.herokuapp.com/api/comments/${bookId}`, {

            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNGViNmYyNjBjYzAwMTVjYzBkY2QiLCJpYXQiOjE3MjU2NDQ4NzAsImV4cCI6MTcyNjg1NDQ3MH0.e0_OTv1d4lkiPGRMkSk8wZIuwie6zJ5RDAL00fgz37I",
                "Content-type": "application/json"
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
    }, [bookId])

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
        <div data-testid="areacommenti">
            <CommentList comments={comments} />
            <AddComment asin={bookId} />
        </div>
    );
}

export default CommentArea;
