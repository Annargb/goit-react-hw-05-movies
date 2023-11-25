import { ListOfCast } from './CastList.styled';

export const CastList = ({ cast }) => {
  const imageStart = 'https://image.tmdb.org/t/p/w500';

  return (
    <ListOfCast>
      {cast.map(({ id, name, profile_path }) => (
        <li key={id}>
          <img
            src={
              profile_path
                ? imageStart + profile_path
                : 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png'
            }
            alt={name}
            width="300"
          />
          <h5>{name}</h5>
        </li>
      ))}
    </ListOfCast>
  );
};
