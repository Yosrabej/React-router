import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from "react-router-dom";
import "./App.css";
import MyNavBar from "./Components/MyNavBar/MyNavBar";
import MovieList from "./Components/MovieList/MovieList";
import AddButton from "./Components/AddButton/AddButton";
import { moviesData } from "./Components/Details/DetailPage";
import Details from "./Components/Details/Details";

function App() {
    const [search, setSearch] = useState("");
    const getSearch = (x) => {
        setSearch(x);
    };
    const [rating, setRating] = useState(0);
    const getRating = (x) => {
        setRating(x);
    };
    const [movies, SetMovies] = useState(moviesData);
    const getMovies = (movies) => {
        SetMovies([...moviesData, movies]);
    };
    return (
        <div>
            <MyNavBar getSearch={getSearch} getRating={getRating} />

            <Route exact path="/">
                <div className="AddButton">
                    <AddButton getMovies={getMovies} />
                </div>
                <MovieList movies={movies} rating={rating} search={search} />
            </Route>
            <Route path="/details/:movieId" component={Details} />
        </div>
    );
}

export default App;
