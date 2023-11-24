import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchMovieByRequest } from 'services/api';

const Movies = () => {
  const [listOfFilms, setListOfFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const location = useLocation();
  console.log(location);

  const updateQueryString = event => {
    const request = event.target.value;

    if (request === '') {
      return setSearchParams({});
    }
  };

  const onFormSubmit = event => {
    event.preventDefault();
    const request = event.target.elements.searchFilms.value;

    if (request === '') {
      return setSearchParams({});
    }

    setSearchParams({ query: request });
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    const getMovieByRequest = async () => {
      try {
        const movie = await fetchMovieByRequest(query);
        setListOfFilms(movie);
        // console.log(movie);
      } catch (error) {
        console.log(error);
      }
    };

    getMovieByRequest();
  }, [query]);

  return (
    <div>
      <h3>Movies page</h3>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          name="searchFilms"
          defaultValue={query}
          onChange={updateQueryString}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {listOfFilms.map(({ title, id }) => (
          <li key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
