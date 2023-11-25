import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FilmDescription } from './FilmDescription-component/FilmDescription';
import { AdditionInfoLink } from './MovieDescriprion.styled';

export const MovieDescription = ({ description }) => {
  const location = useLocation();
  const backLickLocation = useRef(location.state?.from ?? '/');

  return (
    <>
      <Link to={backLickLocation.current}>Return Back</Link>
      <FilmDescription description={description} />
      <h2>Additional information</h2>
      <ul>
        <li>
          <AdditionInfoLink to="cast">Cast</AdditionInfoLink>
        </li>
        <li>
          <AdditionInfoLink to="reviews">Reviews</AdditionInfoLink>
        </li>
      </ul>
    </>
  );
};
