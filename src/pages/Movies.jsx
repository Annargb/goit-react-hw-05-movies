import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByRequest } from 'services/api';
import { Loader } from 'components/Loader-component/Loader';
import toast, { Toaster } from 'react-hot-toast';
import { MovieList } from 'components/MovieList-component/MovieList';
import { MovieForm } from 'components/Form-component/Form';

const Movies = () => {
  const [listOfFilms, setListOfFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

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
      toast.error('Enter data in the field to search for movies!', {
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
        if (movie.length === 0) {
          setError(true);
          toast.error("We didn't find any movies matching your request!", {
            duration: 3500,
            position: 'top-right',
          });
        } else {
          setListOfFilms(movie);
        }
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
      <MovieForm
        onSubmit={onFormSubmit}
        query={query}
        change={updateQueryString}
      />
      {isLoading && <Loader />}
      {!isLoading && !error && <MovieList movies={listOfFilms} />}
      <Toaster />
    </div>
  );
};

export default Movies;
