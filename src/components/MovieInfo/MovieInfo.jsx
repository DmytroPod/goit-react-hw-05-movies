import imgFilm from '../../img/poster_film.jpg';
import css from './MovieInfo.module.css';
const MovieInfo = ({
  movie: { poster_path, title, release_date, vote_average },
}) => {
  const getFilmImage = poster_path =>
    `https://image.tmdb.org/t/p/w300/${poster_path}`;

  return (
    <>
      <div className={css.movie_container}>
        <div className={css.image_container}>
          <img
            className={css.movie_image}
            src={poster_path ? getFilmImage(poster_path) : imgFilm}
            alt={title}
          />
        </div>
        <div className={css.info_container}>
          <h2 className={css.movie_title}>{title}</h2>
          <p className={css.release_date}>Release: {release_date}</p>
          <p className={css.vote_average}>Rating: {vote_average}</p>
        </div>
      </div>
    </>
  );
};
export default MovieInfo;
