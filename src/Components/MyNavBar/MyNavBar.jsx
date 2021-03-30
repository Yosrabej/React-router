import React from "react";
import ReactStars from "react-rating-stars-component";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function MyNavBar({ getRating, getSearch }) {
    const ratingChanged = (newRating) => {
        getRating(newRating);
    };

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Movies App</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link to="/" style={{ marginTop: "8px" }}>
                        Movies
                    </Link>

                    <Nav.Link href="#pricing">Log in / Register</Nav.Link>
                </Nav>
                <Form inline>
                    <div>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            activeColor="#ffd700"
                        />
                    </div>
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                        onChange={(e) => getSearch(e.target.value)}
                        style={{ marginLeft: "20px" }}
                    />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </div>
    );
}

export default MyNavBar;
