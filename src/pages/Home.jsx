import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/api';
import { TrendingMoviesList } from 'components/TrendingMovies-component/TrendingMoviesList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies);
      } catch (error) {
        console.log(error);
      }
    }

    getMovies();
  }, []);
  return (
    <div>
      <h2>Trending Movies Today</h2>
      <TrendingMoviesList movies={trendingMovies} />
    </div>
  );
};

export default Home;
