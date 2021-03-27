import React from "react";
import "./MovieList.css";
import MovieCard from "../MovieCard/MovieCard";
function MovieList({ movies, rating, search }) {
    return (
        <div className="movieList">
            {movies
                .filter(
                    (element) =>
                        element.rate >= rating &&
                        element.title
                            .toLowerCase()
                            .includes(search.toLowerCase())
                )
                .map((el, i) => (
                    <MovieCard key={i} el={el} />
                ))}
        </div>
    );
}

export default MovieList;
