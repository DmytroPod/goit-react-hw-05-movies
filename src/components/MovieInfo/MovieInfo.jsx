import { NavLink, Outlet } from 'react-router-dom';

const MovieInfo = ({
  movie: { poster_path, title, release_date, vote_average },
}) => {
  const posterUrl = `https://image.tmdb.org/t/p/w300${poster_path}`;
  return (
    <>
      <div>
        <img src={posterUrl} alt="" />
        <h2>{title}</h2>
        <p>release: {release_date}</p>
        <p>imod: {vote_average}</p>
      </div>
      <ul>
        <NavLink to="cast">cast</NavLink>

        <NavLink to="reviews">reviews</NavLink>
        <Outlet />
      </ul>
    </>
  );
};
export default MovieInfo;
