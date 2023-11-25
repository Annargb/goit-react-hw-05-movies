import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchMovieByRequest } from 'services/api';
import { Loader } from 'components/Loader-component/Loader';
import toast, { Toaster } from 'react-hot-toast';

const Movies = () => {
  const [listOfFilms, setListOfFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const location = useLocation();

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
      toast.error('Enter data in the field to search for movies', {
        duration: 2500,
        position: 'top-right',
      });
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
        setIsLoading(true);
        setError(false);
        const movie = await fetchMovieByRequest(query);
        setListOfFilms(movie);
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
      {isLoading && <Loader />}
      {!isLoading && !error && (
        <ul>
          {listOfFilms.map(({ title, id }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <Toaster />
    </div>
  );
};

export default Movies;
