import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/api';
import { TrendingMoviesList } from 'components/TrendingMovies-component/TrendingMoviesList';
import { Loader } from 'components/Loader-component/Loader';

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
      } finally {
        setIsLoading(false);
      }
    }

    getMovies();
  }, []);

  return (
    <div>
      <h2>Trending Movies Today</h2>
      {isLoading && !error && <Loader />}
      {!isLoading && trendingMovies.length > 0 && (
        <TrendingMoviesList movies={trendingMovies} />
      )}
    </div>
  );
};

export default Home;
