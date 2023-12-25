import {
  TitleOfFilm,
  FilmWrapper,
  ImageWrapper,
  GenresList,
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
    <div
      style={{
        backgroundImage: `linear-gradient(to right, rgb(44, 38, 65, 0.8) calc((50vw - 170px) - 340px), rgb(47, 73, 34, 0.66) 50%, rgb(65, 25, 60, 0.9) 100%), url(${
          imageStart + backdrop_path
        })`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
      // style={{
      //   backgroundImage: `linear-gradient(to right, rgba(31.5, 10.5, 10.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 10.5, 10.5, 0.84) 50%, rgba(31.5, 10.5, 10.5, 0.84) 100%), url(${
      //     imageStart + backdrop_path
      //   })`,
      //   backgroundSize: 'cover',
      //   backgroundRepeat: 'no-repeat',
      // }}
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
        <ul>
          <li>
            <p>Vote average:</p>
            <p>
              {' '}
              {calculateVotes(vote_average)} ({vote_count}{' '}
              {vote_count === 1 ? 'vote' : 'votes'}).
            </p>
          </li>
          <li>
            <p>Release date:</p>
            <p>{formatedDate}.</p>
          </li>
          <li>
            <GenresList>
              <p>Genres:</p>
              {genres.map(({ name }) => (
                <li key={name}>
                  <p>{name}</p>
                </li>
              ))}
            </GenresList>
          </li>
          <li>
            <p>Duration:</p>
            <p>{runtime} min.</p>
          </li>
          <li>
            <p>Overview:</p>
            <p>{overview}</p>
          </li>
        </ul>
      </FilmWrapper>
    </div>
  );
};
