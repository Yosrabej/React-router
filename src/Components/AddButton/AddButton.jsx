import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
function AddButton({ getMovies }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [newMoviesData, setNewMoviesData] = useState({});
    const handleSubmit = () => {
        getMovies(newMoviesData);
        handleClose();
    };

    return (
        <>
            <Button
                variant="primary"
                style={{
                    backgroundColor: "	#32CD32",
                    border: "none",
                }}
                onClick={handleShow}
            >
                Add new Movie
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Movie Title
                        <input
                            type="text"
                            placeholder="Enter Title"
                            onChange={(e) =>
                                setNewMoviesData({
                                    ...newMoviesData,
                                    title: e.target.value,
                                })
                            }
                            style={{ marginLeft: "30px" }}
                        />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Movie descrption
                    <input
                        type="text"
                        placeholder="Enter description"
                        style={{ marginLeft: "30px", marginBottom: "10px" }}
                        onChange={(e) =>
                            setNewMoviesData({
                                ...newMoviesData,
                                description: e.target.value,
                            })
                        }
                    />{" "}
                    <br />
                    Poster Url
                    <input
                        type="text"
                        placeholder="Enter poster Url"
                        style={{ marginLeft: "83px", marginBottom: "10px" }}
                        onChange={(e) =>
                            setNewMoviesData({
                                ...newMoviesData,
                                posterUrl: e.target.value,
                            })
                        }
                    />{" "}
                    <br />
                    Rating
                    <input
                        type="text"
                        style={{ marginLeft: "106px" }}
                        onChange={(e) =>
                            setNewMoviesData({
                                ...newMoviesData,
                                rate: e.target.value,
                            })
                        }
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Add the movie
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddButton;
