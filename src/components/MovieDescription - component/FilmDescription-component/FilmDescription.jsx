import {
  Container,
  TitleOfFilm,
  FilmWrapper,
  ImageWrapper,
  // DescriptionList,
  AccentList,
  DescriptionItem,
  GenresList,
  ContainerDescription,
  DescriptionText,
  AccentText,
} from './Filmdescription.styled';
import { formatDatefromApi, calculateVotes } from 'services/formatData';

export const FilmDescription = ({
  description: {
    title,
    vote_average,
    vote_count,
    genres,
    runtime,
    overview,
    release_date,
    poster_path,
    backdrop_path,
  },
}) => {
  const imageStart = 'https://image.tmdb.org/t/p/w500';
  const date = release_date.slice(0, -6);
  const formatedDate = formatDatefromApi(release_date);

  return (
    <Container
      style={{
        backgroundImage: `linear-gradient(to right, rgb(44, 38, 65, 0.8) calc((50vw - 170px) - 340px), rgb(47, 73, 34, 0.66) 50%, rgb(65, 25, 60, 0.9) 100%), url(${
          imageStart + backdrop_path
        })`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <TitleOfFilm>
        {title} ({date})
      </TitleOfFilm>
      <FilmWrapper>
        <ImageWrapper>
          <img
            src={
              poster_path
                ? imageStart + poster_path
                : 'https://diekos.by/public/images/nophoto.jpg?v=1.0.6'
            }
            alt={title}
          />
        </ImageWrapper>
        <ContainerDescription>
          <AccentList>
            <AccentText>Vote average:</AccentText>
            <AccentText>Release date:</AccentText>
            <AccentText>Genres:</AccentText>
            <AccentText>Duration:</AccentText>
            <AccentText>Overview:</AccentText>
          </AccentList>

          <ul>
            <DescriptionItem>
              <DescriptionText>
                {' '}
                {calculateVotes(vote_average)} ({vote_count}{' '}
                {vote_count === 1 ? 'vote' : 'votes'}).
              </DescriptionText>
            </DescriptionItem>
            <DescriptionItem>
              <DescriptionText>{formatedDate}.</DescriptionText>
            </DescriptionItem>
            <DescriptionItem>
              {' '}
              <GenresList>
                {genres.map(({ name }) => (
                  <li key={name}>
                    <DescriptionText>{name}</DescriptionText>
                  </li>
                ))}
              </GenresList>
            </DescriptionItem>
            <DescriptionItem>
              <DescriptionText>{runtime} min.</DescriptionText>
            </DescriptionItem>
            <DescriptionItem>
              <DescriptionText>{overview}</DescriptionText>
            </DescriptionItem>
          </ul>
        </ContainerDescription>
        {/* <ul>
          <DescriptionList>
            <AccentText>Vote average:</AccentText>
            <DescriptionText>
              {' '}
              {calculateVotes(vote_average)} ({vote_count}{' '}
              {vote_count === 1 ? 'vote' : 'votes'}).
            </DescriptionText>
          </DescriptionList>
          <DescriptionList>
            <AccentText>Release date:</AccentText>
            <DescriptionText>{formatedDate}.</DescriptionText>
          </DescriptionList>
          <DescriptionList>
            <GenresList>
              <AccentText>Genres:</AccentText>
              {genres.map(({ name }) => (
                <li key={name}>
                  <DescriptionText>{name}</DescriptionText>
                </li>
              ))}
            </GenresList>
          </DescriptionList>
          <DescriptionList>
            <AccentText>Duration:</AccentText>
            <DescriptionText>{runtime} min.</DescriptionText>
          </DescriptionList>
          <DescriptionList>
            <AccentText>Overview:</AccentText>
            <DescriptionText>{overview}</DescriptionText>
          </DescriptionList>
        </ul> */}
      </FilmWrapper>
    </Container>
  );
};
