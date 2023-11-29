import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { FilmDescription } from './FilmDescription-component/FilmDescription';
import {
  AdditionInfoLink,
  AdditionInfoTitle,
  ReturnBackButton,
  ReturnBackIcon,
  ButtonText,
} from './MovieDescriprion.styled';

export const MovieDescription = ({ description }) => {
  const location = useLocation();
  const backLickLocation = useRef(location.state?.from ?? '/');

  return (
    <>
      <ReturnBackButton to={backLickLocation.current}>
        <ReturnBackIcon />
        <ButtonText>Return Back</ButtonText>
      </ReturnBackButton>
      <FilmDescription description={description} />
      <AdditionInfoTitle>Additional information</AdditionInfoTitle>
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
