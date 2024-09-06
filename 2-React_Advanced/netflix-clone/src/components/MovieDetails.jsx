import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap"

function MovieDetails() {

    const [data1, setData1] = useState({});
    const [data2, setData2] = useState({});

    const { movieId } = useParams();

    function fetchFilms() {
        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=e8c1f24e&s/imdbID/${movieId}`)
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
            </Card.Body>
        </Card>

    )

}
export default MovieDetails;