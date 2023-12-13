import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { getCast } from 'Servise/API';

import imgActor from '..//../img/poster_cast.png';

import css from './Cast.module.css';

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
    <>
      {cast.length > 0 ? (
        <ul className={css.list}>
          {cast.map(({ id, name, profile_path }) => (
            <li key={id} className={css.item}>
              <div>
                <img
                  className={css.img}
                  width={200}
                  src={profile_path ? getProfileImage(profile_path) : imgActor}
                  alt={name}
                />
              </div>
              <h4>{name}</h4>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any cast for this movie</p>
      )}
    </>
  );
};

export default Cast;
