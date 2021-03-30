import React from "react";
import { moviesData } from "../Details/DetailPage";
function Details(props) {
    const movieId = props.match.params.movieId;
    const el = moviesData.find((el) => el.id === Number(movieId));
    console.log(el);
    return (
        <div>
            <p
                style={{
                    fontSize: "20px",
                    fontFamily: "cursive",
                    color: "#ECF0F1",
                    marginTop: "20px",
                }}
            >
                <h3>Movie description:</h3> {el.description}
            </p>
            <h3
                style={{
                    fontFamily: "cursive",
                    color: "#ECF0F1",
                    marginTop: "20px",
                }}
            >
                Trailer:
            </h3>
            <div style={{ textAlign: "center", marginTop: "10px" }}>
                {el.trailer}
            </div>
        </div>
    );
}

export default Details;
