import { ListOfCast, CastItem, ImgWrapper, ActorName } from './CastList.styled';
import unknown from '../../../img/un.jpg';

export const CastList = ({ cast }) => {
  const imageStart = 'https://image.tmdb.org/t/p/w500';

  return (
    <ListOfCast>
      {cast.map(({ id, name, profile_path, gender }) => (
        <CastItem key={id}>
          <ImgWrapper>
            <img
              src={profile_path ? imageStart + profile_path : unknown}
              alt={name}
              width="300"
            />
          </ImgWrapper>

          <ActorName>{name}</ActorName>
        </CastItem>
      ))}
    </ListOfCast>
  );
};
