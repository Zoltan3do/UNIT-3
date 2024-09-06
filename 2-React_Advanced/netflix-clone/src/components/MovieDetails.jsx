import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap"

function MovieDetails() {

    const [data1, setData1] = useState({});
    const [data2, setData2] = useState([]);

    const commentoCustomizzato = {
        "comment": "Zoltan",
        rate: "5",
        elementId: "tt2395427"
    }

    const { movieId } = useParams();

    function fetchFilms() {
        fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=8b390101`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Errore nella chiamata");
                }
            })
            .then(data => {
                setData1(data);
            })
            .catch(e => {
                console.error(e);
            });
    };

    function postComment() {
        fetch(`https://striveschool-api.herokuapp.com/api/comments`, {
            method: "POST",
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNGViNmYyNjBjYzAwMTVjYzBkY2QiLCJpYXQiOjE3MjU2NDQ4NzAsImV4cCI6MTcyNjg1NDQ3MH0.e0_OTv1d4lkiPGRMkSk8wZIuwie6zJ5RDAL00fgz37I",
                "Content-type": "application/json"
            },
            body: JSON.stringify(commentoCustomizzato)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Errore nella chiamata");
                }
            })
            .then(data => {
                setData2([...data2], data);
            })
            .catch(e => {
                console.error(e);
            });


    }

    function fetchComments() {
        fetch(`https://striveschool-api.herokuapp.com/api/comments/${movieId}`, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNGViNmYyNjBjYzAwMTVjYzBkY2QiLCJpYXQiOjE3MjU2NDQ4NzAsImV4cCI6MTcyNjg1NDQ3MH0.e0_OTv1d4lkiPGRMkSk8wZIuwie6zJ5RDAL00fgz37I",
                "Content-type": "application/json"
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Errore nella chiamata");
                }
            })
            .then(data => {
                setData2(data);
            })
            .catch(e => {
                console.error(e);
            });

    }

    useEffect(() => {
        fetchFilms();
        postComment();
        fetchComments()
        console.log(data2)
    }, [movieId])


    return (

        <Card style={{ width: '18rem' }} className="d-flex flex-column align-items-center">
            <Card.Img variant="top" src={data1.Poster} />
            <Card.Body>
                <Card.Title>{data1.Title}</Card.Title>
                <Card.Text>
                    {data1.Awards}
                </Card.Text>
                <h2 className="text-center">Commenti</h2>
                {data2.map((c, i) => {
                    return (
                        <p key={i}>
                            {c.comment} - {c.rate}
                        </p>
                    )
                })}
            </Card.Body>
        </Card>
    )

}
export default MovieDetails;