import { Link } from 'react-router-dom';
import { MovieList, MovieItem } from './TrendingMovies.styled';

export const TrendingMoviesList = ({ movies }) => {
  const imageStart = 'https://image.tmdb.org/t/p/w500';
  return (
    <MovieList>
      {movies.map(({ id, poster_path, title }) => (
        <MovieItem key={id}>
          <Link to={`movies/${id}`}>
            <img src={imageStart + poster_path} alt={title} width="350" />
            <h3>{title}</h3>
          </Link>
        </MovieItem>
      ))}
    </MovieList>
  );
};
