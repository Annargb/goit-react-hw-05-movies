import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { fetchMovieCast } from 'services/api';
import { CastList } from './CastList-component/CastList';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const cast = await fetchMovieCast(movieId);
        setMovieCast(cast);
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

    getMovieCast();
  }, [movieId]);

  return (
    <>
      {!isLoading && !error && <CastList cast={movieCast} />}
      <Toaster />
    </>
  );
};

export default Cast;
