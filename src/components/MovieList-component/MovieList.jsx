import { Link, useLocation } from 'react-router-dom';
import { ListOfCommonMovies, MovieItem } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  const imageStart = 'https://image.tmdb.org/t/p/w500';

  return (
    <ListOfCommonMovies>
      {movies.map(({ id, poster_path, title }) => (
        <MovieItem key={id}>
          <Link
            to={location.pathname === '/' ? `movies/${id}` : `${id}`}
            state={{ from: location }}
          >
            <img
              src={
                poster_path
                  ? imageStart + poster_path
                  : 'https://diekos.by/public/images/nophoto.jpg?v=1.0.6'
              }
              alt={title}
              width="350"
            />
            <h3>{title}</h3>
          </Link>
        </MovieItem>
      ))}
    </ListOfCommonMovies>
  );
};
