import { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { fetchMovieById } from 'services/api';
import { Loader } from 'components/Loader-component/Loader';
import { MovieDescription } from 'components/MovieDescription - component/MovieDescription';

const MovieDetails = () => {
  const [fullMovieDescription, setFullMovieDescription] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const getMoviesById = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const movieDetails = await fetchMovieById(movieId);
        setFullMovieDescription(movieDetails);
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

    getMoviesById();
  }, [movieId]);

  return (
    <div>
      {isLoading && !error && <Loader />}
      {fullMovieDescription && !isLoading && (
        <>
          <MovieDescription description={fullMovieDescription} />
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      )}

      <Toaster />
    </div>
  );
};

export default MovieDetails;
