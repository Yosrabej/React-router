import React from "react";
import { Card, Button } from "react-bootstrap";

function MovieCard({ el }) {
    return (
        <div>
            <Card className="movieCard" style={{ width: "18rem" }}>
                <Card.Img
                    variant="top"
                    src={el.posterUrl}
                    style={{ width: "286px", height: "381px" }}
                />
                <Card.Body>
                    <Card.Title>{el.title}</Card.Title>
                    <Card.Text
                        className="description"
                        style={{ height: "280px" }}
                    >
                        {el.description}
                    </Card.Text>
                    <h1>{"⭐".repeat(el.rate)}</h1>
                </Card.Body>
                <Card.Footer>
                    <Button
                        variant="primary"
                        style={{
                            marginLeft: "30%",
                            backgroundColor: "	#32CD32",
                            border: "none",
                        }}
                    >
                        Download
                    </Button>
                </Card.Footer>
            </Card>
        </div>
    );
}

export default MovieCard;
