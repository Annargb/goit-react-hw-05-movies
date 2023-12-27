import { Link, useLocation } from 'react-router-dom';
import {
  ListOfCommonMovies,
  MovieItem,
  MovieTitle,
  ImgWrapper,
} from './MovieList.styled';
import defaultImage from '../../img/360_F_36942622_9SUXpSuE5JlfxLFKB1jHu5Z07eVIWQ2W.jpg';

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
            <ImgWrapper
              style={{
                backgroundImage: ` url(${
                  poster_path ? imageStart + poster_path : defaultImage
                })`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundColor: '#fff',
              }}
            >
              {/* <img
                src={
                  poster_path
                    ? imageStart + poster_path
                    : 'https://diekos.by/public/images/nophoto.jpg?v=1.0.6'
                }
                alt={title}
                // width="300"
              /> */}
            </ImgWrapper>
            <MovieTitle>{title}</MovieTitle>
          </Link>
        </MovieItem>
      ))}
    </ListOfCommonMovies>
  );
};
