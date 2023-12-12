import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { getCast } from 'Servise/API';

import imgActor from '..//../img/poster_cast.png';
const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchgetCast = async () => {
      try {
        const castRes = await getCast(movieId);
        setCast(castRes.cast);
        return castRes.cast;
      } catch (err) {
        console.log(err);
      }
    };
    fetchgetCast();
  }, [movieId]);

  const getProfileImage = profile_path =>
    `https://image.tmdb.org/t/p/w200${profile_path}`;

  return (
    <ul>
      {cast.map(({ id, name, profile_path }) => (
        <li key={id}>
          <div>
            <img
              width={200}
              src={profile_path ? getProfileImage(profile_path) : imgActor}
              alt={name}
            />
          </div>
          <h4>{name}</h4>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
