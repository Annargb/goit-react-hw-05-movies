import { MovieList } from 'components/MovieList-component/MovieList';
import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { fetchTrendingMovies } from 'services/api';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true);
        setError(false);
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies);
      } catch (error) {
        setError(true);
        toast.error('Oops, Something went wrong! Try reloading the page!', {
          duration: 3500,
          position: 'top-right',
        });
      } finally {
        setIsLoading(false);
      }
    }

    getMovies();
  }, []);

  return (
    <div>
      <h2>Trending Movies Today</h2>
      {!isLoading && !error && trendingMovies.length > 0 && (
        <MovieList movies={trendingMovies} />
      )}
      <Toaster />
    </div>
  );
};

export default Home;
