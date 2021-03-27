import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import MyNavBar from "./Components/MyNavBar/MyNavBar";
import MovieList from "./Components/MovieList/MovieList";
import AddButton from "./Components/AddButton/AddButton";
let moviesData = [
    {
        title: "There will be blood",
        description:
            "Ruthless silver miner, turned oil prospector, Daniel Plainview moves to oil-rich California. Using his son to project a trustworthy, family-man image, Plainview cons local landowners into selling him their valuable properties for a pittance. However, local preacher Eli Sunday suspects Plainview’s motives and intentions, starting a slow-burning feud that threatens both their lives.",
        posterUrl:
            "https://fr.web.img4.acsta.net/medias/nmedia/18/63/80/44/18887932.jpg",
        rate: 5,
    },
    {
        title: "No country for old man",
        description:
            "Llewelyn Moss stumbles upon dead bodies, $2 million and a hoard of heroin in a Texas desert, but methodical killer Anton Chigurh comes looking for it, with local sheriff Ed Tom Bell hot on his trail. The roles of prey and predator blur as the violent pursuit of money and justice collide.",
        posterUrl:
            "https://images-na.ssl-images-amazon.com/images/I/71OyIH442IL._AC_SL1500_.jpg",
        rate: 4,
    },
    {
        title: "The Dressmaker",
        description:
            "In 1950s Australia, beautiful, talented dressmaker Tilly returns to her tiny hometown to right wrongs from her past. As she tries to reconcile with her mother, she starts to fall in love while transforming the fashion of the town.",
        posterUrl:
            "https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/The_Dressmaker_film_poster.jpg/220px-The_Dressmaker_film_poster.jpg",
        rate: 1,
    },
    {
        title: " Birdman",
        description:
            "A fading actor best known for his portrayal of a popular superhero attempts to mount a comeback by appearing in a Broadway play. As opening night approaches, his attempts to become more altruistic, rebuild his career, and reconnect with friends and family prove more difficult than expected.",
        posterUrl:
            "https://cdn1.cinenode.com/movie_poster/84/full/birdman-84226.jpg",
        rate: 4,
    },

    {
        title: " Threat level midnight",
        description:
            "After secret agent Michael Scarn (played by Scott) is forced into retirement due to the death of his wife Catherine Zeta-Scarn, the President of the United States of America (played by Darryl Philbin) requests that he prevent Goldenface (played by Jim Halpert) from blowing up the NHL All-Star Game and killing several hostages.",
        posterUrl:
            "https://upload.wikimedia.org/wikipedia/en/thumb/a/af/Threat-Level-Midnight.jpg/250px-Threat-Level-Midnight.jpg",
        rate: 5,
    },
    {
        title: "The Rise of Genghis Khan",
        description:
            "The story recounts the early life of Genghis Khan, a slave who went on to conquer half the world in the 11th century.",
        posterUrl:
            "https://a.ltrbxd.com/resized/film-poster/4/4/6/6/5/44665-mongol-the-rise-of-genghis-kahn-0-230-0-345-crop.jpg?k=a84aa0be9c",
        rate: 3,
    },
    {
        title: "Himalaya",
        description:
            "As the denizens of a Tibetan village prepare for their arduous annual trek to exchange salt for grain, the community’s allegiances are split between aging chieftain Tinle (Thilen Lhondup) and rebellious young Karma (Gurgon Kyap). Tinle tries to maintain his clout and preserve obedience to ancient customs when Karma challenges the old man’s power.",
        posterUrl:
            "https://m.media-amazon.com/images/M/MV5BNTE4YWQxODUtNjE3Ni00MDExLTljZGEtYmU4N2U3MmU1OWZjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY1200_CR104,0,630,1200_AL_.jpg",
        rate: 4,
    },
    {
        title: "Loving",
        description:
            "The story of Richard and Mildred Loving, an interracial couple, whose challenge of their anti-miscegenation arrest for their marriage in Virginia led to a legal battle that would end at the US Supreme Court.",
        posterUrl:
            "https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Loving_%282016_film%29.jpg/220px-Loving_%282016_film%29.jpg",
        rate: 2,
    },
];

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
            <div className="AddButton">
                <AddButton getMovies={getMovies} />
            </div>
            <MovieList movies={movies} rating={rating} search={search} />
        </div>
    );
}

export default App;
