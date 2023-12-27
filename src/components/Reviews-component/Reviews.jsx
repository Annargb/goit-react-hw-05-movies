import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { fetchReviewsOnMovie } from 'services/api';
import { ReviewsList } from './ReviewsList-component/ReviewsList';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviewsOnMovie = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const reviews = await fetchReviewsOnMovie(movieId);
        setMovieReviews(reviews);
      } catch (error) {
        setError(true);
        toast.error('Oops, Something went wrong! Try reloading the page!', {
          duration: 3500,
          position: 'top-right',
        });
      } finally {
        setIsLoading(false);
      }
    };

    getReviewsOnMovie();
  }, [movieId]);

  return (
    <div>
      {movieReviews.length > 0 && !isLoading && !error && (
        <ReviewsList reviews={movieReviews} />
      )}
      {!movieReviews.length && <p>We don't have any reviews for this movie.</p>}
      <Toaster />
    </div>
  );
};

export default Reviews;
