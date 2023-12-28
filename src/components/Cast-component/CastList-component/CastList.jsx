import { ListOfCast, CastItem, ImgWrapper, ActorName } from './CastList.styled';
import unknown from '../../../img/un.jpg';

export const CastList = ({ cast }) => {
  // 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png'
  const imageStart = 'https://image.tmdb.org/t/p/w500';

  console.log(cast);

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
