import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { FilmDescription } from './FilmDescription-component/FilmDescription';
import {
  AdditionInfoLink,
  AdditionInfoTitle,
  ReturnBackButton,
  ReturnBackIcon,
  ButtonText,
  AdditionalList,
  AdditionalListItem,
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
      <AdditionalList>
        <AdditionalListItem>
          <AdditionInfoLink to="cast">Cast</AdditionInfoLink>
        </AdditionalListItem>
        <AdditionalListItem>
          <AdditionInfoLink to="reviews">Reviews</AdditionInfoLink>
        </AdditionalListItem>
      </AdditionalList>
    </>
  );
};
