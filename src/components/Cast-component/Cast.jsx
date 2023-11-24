import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';
import { CastList } from './Cast.styled';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        const cast = await fetchMovieCast(movieId);
        setMovieCast(cast);
        console.log(cast);
      } catch (error) {
        console.log(error);
      }
    };

    getMovieCast();
  });

  const imageStart = 'https://image.tmdb.org/t/p/w500';

  return (
    <div>
      <h3>Cast:</h3>
      <CastList>
        {movieCast.map(({ id, name, profile_path }) => (
          <li key={id}>
            {profile_path ? (
              <img src={imageStart + profile_path} alt={name} width="350" />
            ) : (
              <img
                src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png"
                alt={name}
                width="350"
              />
            )}
            {/* <img src={imageStart + profile_path} alt={name} width="300" /> */}
            <h5>{name}</h5>
          </li>
        ))}
      </CastList>
    </div>
  );
};

export default Cast;
