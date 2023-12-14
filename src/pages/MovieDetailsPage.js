import { Suspense, useEffect, useRef, useState } from 'react';

import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';

import { getMovieById } from '../Servise/API';

import MovieInfo from 'components/MovieInfo/MovieInfo';
import GoBackBtn from 'components/GoBackBtn/GoBackBtn';

import css from '../pages.css/MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const location = useLocation();

  const goBeckLink = useRef(location?.state?.from ?? '/');

  const [movieInfo, setMovieInfo] = useState();

  useEffect(() => {
    if (!movieId) return;
    const fetchGetMovieById = async () => {
      try {
        const movie = await getMovieById(movieId);
        setMovieInfo(movie);
      } catch (err) {
        console.log(err);
      }
    };
    fetchGetMovieById();
  }, [movieId]);

  const goBackPath = goBeckLink.current;

  return (
    <div>
      <GoBackBtn path={goBackPath} />

      {movieInfo && <MovieInfo movie={movieInfo} />}
      <div>
        <ul className={css.ul}>
          <li>
            <NavLink to="cast" className={css.link}>
              cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" className={css.link}>
              reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
