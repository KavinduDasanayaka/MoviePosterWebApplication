import { useEffect, useRef,useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col,Button } from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';
import axios from 'axios';
import './Reviews.css';

const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {
    const revText = useRef();
    let params = useParams();
    const [hoverIndex, setHoverIndex] = useState(null);
    const movieId = params.movieId;

    useEffect(() => {
        if (!movie) {
            getMovieData(movieId);
        }
    }, [movieId, movie, getMovieData]);

    const addReview = async (e) => {
        e.preventDefault();

        const rev = revText.current;

        try {
            await axios.post("/api/v1/reviews", {
                reviewBody: rev.value,
                imdbId: movieId,
            });

            rev.value = "";

            // Re-fetch movie data to include new review
            getMovieData(movieId);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="reviews-container">
            <Container>
                <Row>
                    <Col><h3>Reviews</h3></Col>
                </Row>
                <Row className="mt-2">
                    <Col>
                        <img src={movie?.poster} alt={movie?.title || 'Movie poster'} />
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <ReviewForm handleSubmit={addReview} revText={revText} labelText="Write a Review?" />
                            </Col>
                        </Row>
                        <Row>
                            <Col><hr /></Col>
                        </Row>
                        {(movie?.reviewIds || reviews)?.map((review, index) => (
                            <div key={index}>
                                <Row>
                                    <Col>{review.review || review.body}</Col>
                                    <Col><Button style={{backgroundColor: hoverIndex == index ? 'Red' : 'black'}}
                                    onMouseEnter={() => setHoverIndex(index)}
                                    onMouseLeave={() => setHoverIndex(null)}
                                    >
                                        Delete</Button></Col>
                                </Row>
                                <Row>
                                    <Col><hr /></Col>
                                </Row>
                            </div>
                        ))}
                    </Col>
                </Row>
                <Row>
                    <Col><hr /></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Reviews;
