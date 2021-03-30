import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function MovieCard({ el }) {
    return (
        <div>
            <Card className="movieCard" style={{ width: "18rem" }}>
                <Card.Img
                    variant="top"
                    src={el.posterUrl}
                    style={{ width: "286px", height: "381px" }}
                />
                <Card.Body style={{ textAlign: "center" }}>
                    <Card.Title>{el.title}</Card.Title>
                    <Card.Text
                        className="description"
                        style={{ height: "30px" }}
                    ></Card.Text>
                    <h1>{"⭐".repeat(el.rate)}</h1>
                </Card.Body>
                <Card.Footer
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <Button
                        variant="primary"
                        style={{
                            backgroundColor: "	#32CD32",
                            border: "none",
                        }}
                    >
                        Download
                    </Button>
                    <Button
                        variant="primary"
                        style={{
                            backgroundColor: "	#32CD32",
                            border: "none",
                        }}
                    >
                        <Link to={`/details/${el.id}`}>View details</Link>
                    </Button>
                </Card.Footer>
            </Card>
        </div>
    );
}

export default MovieCard;
