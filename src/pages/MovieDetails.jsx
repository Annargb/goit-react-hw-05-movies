import { Suspense, useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { fetchMovieById } from 'services/api';
import { Loader } from 'components/Loader-component/Loader';

const MovieDetails = () => {
  const [fullMovieDescription, setFullMovieDEscription] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const { movieId } = useParams();

  const location = useLocation();
  const backLickLocation = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const getMoviesById = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const movieDetails = await fetchMovieById(movieId);
        setFullMovieDEscription(movieDetails);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getMoviesById();
  }, [movieId]);

  // const { title, overview, poster_path,  } = fullMovieDescription;
  // console.log(fullMovieDescription.genres);
  const imageStart = 'https://image.tmdb.org/t/p/w500';

  return (
    <div>
      <div>Movie Details page</div>
      {isLoading && !error && <Loader />}
      {fullMovieDescription && !isLoading && (
        <>
          <Link to={backLickLocation.current}>Return Back</Link>
          <h2>{fullMovieDescription.title}</h2>
          <img
            src={imageStart + fullMovieDescription.poster_path}
            alt={fullMovieDescription.title}
            width="350"
          />
          <p>
            Vote average: {fullMovieDescription.vote_average} (vote count:{' '}
            {fullMovieDescription.vote_count}).
          </p>
          <p>Release date: {fullMovieDescription.release_date}.</p>
          <p>Genres:</p>
          <ul>
            {fullMovieDescription.genres.map(({ name }) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
          <p>Duration: {fullMovieDescription.runtime} min.</p>
          <p>Overview: {fullMovieDescription.overview}</p>
        </>
      )}
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
