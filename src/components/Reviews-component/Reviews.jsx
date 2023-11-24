import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsOnMovie } from 'services/api';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviewsOnMovie = async () => {
      try {
        const reviews = await fetchReviewsOnMovie(movieId);
        setMovieReviews(reviews);
        console.log(reviews);
      } catch (error) {
        console.log(error);
      }
    };

    getReviewsOnMovie();
  });
  return (
    <div>
      <h3>Reviews:</h3>
      {movieReviews.length ? (
        <ul>
          {movieReviews.map(({ author, content }) => (
            <li key={author}>
              <h4>{author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </div>
  );
};

export default Reviews;
