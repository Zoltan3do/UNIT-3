import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TrendingNow = ({ term }) => {
    const [films, setFilms] = useState([]);

    const fetchFilms = () => {
        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=e8c1f24e&s=${term}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Errore nella chiamata");
                }
            })
            .then(data => {
                if (data.Search) {
                    const initialFilms = data.Search;
                    const filledFilms = [...initialFilms];
                    while (filledFilms.length % 6 !== 0) {
                        filledFilms.push(initialFilms[filledFilms.length % initialFilms.length]);
                    }
                    setFilms(filledFilms);
                }
            })
            .catch(e => {
                console.error(e);
            });
    };

    useEffect(() => {
        fetchFilms();
    }, [term]);

    const createCarouselItems = () => {
        const items = [];
        const numSlides = Math.ceil(films.length / 6);

        for (let i = 0; i < numSlides; i++) {
            items.push(
                <Carousel.Item key={i}>
                    <div className="row">
                        {films.slice(i * 6, i * 6 + 6).map((f, index) => (
                            <div key={index} className="col-4 col-lg-2 px-1">
                                <Link className='nav-link' to={`/movie-details/${f.imdbID}`}><img src={f.Poster} className="d-block w-100" alt={f.Title} /></Link>
                            </div>
                        ))}
                    </div>
                </Carousel.Item>
            );
        }
        return items;
    };

    return (
        <>
            <h2 className="text-light fs-5 mb-3 mt-5">{term}</h2>
            <Carousel className="d-flex justify-content-center w-100 my-0 mx-auto caroselloCentrato">
                {createCarouselItems()}
            </Carousel>
        </>
    );
};

export default TrendingNow;



