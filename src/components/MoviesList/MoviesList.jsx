import { Link } from 'react-router-dom';

import imgFilm from '../../img/poster_film.jpg';
import css from './MoviesList.module.css';
const MoviesList = ({ movies, location }) => {
  const getFilmImage = poster_path =>
    `https://image.tmdb.org/t/p/w200/${poster_path}`;

  return (
    <div className={css.wrapp}>
      <ul className={css.list}>
        {movies.map(({ poster_path, id, title }) => (
          <li key={id} className={css.item} state={{ from: location }}>
            <Link to={`/movies/${id}`} className={css.link}>
              <img
                className={css.img}
                src={poster_path ? getFilmImage(poster_path) : imgFilm}
                alt={title}
              />
              <h2 className={css.title}>{title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MoviesList;
