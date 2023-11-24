import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/api';

const MovieDetails = () => {
  const [fullMovieDescription, setFullMovieDEscription] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const getMoviesById = async () => {
      try {
        const movieDetails = await fetchMovieById(movieId);
        setFullMovieDEscription(movieDetails);
      } catch (error) {
        console.log(error);
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
      {fullMovieDescription && (
        <>
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
      <Outlet />
    </div>
  );
};

export default MovieDetails;
