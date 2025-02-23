import { useParams } from 'react-router-dom';
import {fetchMovieReviews} from '../../Services/moviesAPI';
import { useEffect, useState } from 'react';

const Reviews = () => {
    const {movieId} = useParams();
    const [reviews, setReviews] = useState([]);

useEffect(() => {
    const getReviews = async () => {
    const data = await fetchMovieReviews(movieId);
    setReviews(data.results);
};
    getReviews();
}, [movieId]);

return (
    <ul>
        {reviews.length > 0
        ? reviews.map((review) => (
           <li key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
            </li>
        ))
        : <p>No reviews found.</p>}
    </ul>
);
};

export default Reviews;
