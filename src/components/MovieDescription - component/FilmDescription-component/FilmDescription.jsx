import {
  TitleOfFilm,
  FilmWrapper,
  ImageWrapper,
  GenresList,
} from './Filmdescription.styled';

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
  },
}) => {
  const imageStart = 'https://image.tmdb.org/t/p/w500';
  const date = release_date.slice(0, -6);
  const voteAverage = vote_average.toFixed(1);

  return (
    <>
      <TitleOfFilm>
        {title} ({date})
      </TitleOfFilm>
      <FilmWrapper>
        <ImageWrapper>
          <img src={imageStart + poster_path} alt={title} />
        </ImageWrapper>
        <div>
          <p>
            Vote average: {voteAverage} (vote count: {vote_count}).
          </p>
          <GenresList>
            <h3>Genres:</h3>
            {genres.map(({ name }) => (
              <li key={name}>{name}</li>
            ))}
          </GenresList>
          <p>Duration: {runtime} min.</p>
          <p>Overview: {overview}</p>
        </div>
      </FilmWrapper>
    </>
  );
};
