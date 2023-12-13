import { Suspense, useEffect, useState } from 'react';

import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import { getMovieById } from '../Servise/API';

import MovieInfo from 'components/MovieInfo/MovieInfo';
import GoBackBtn from 'components/GoBackBtn/GoBackBtn';

import css from '../pages.css/MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const location = useLocation();

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

  return (
    <div>
      <GoBackBtn path={location.state?.from || '/'} />

      {movieInfo && <MovieInfo movie={movieInfo} />}
      <div>
        <ul className={css.ul}>
          <li>
            <Link to="cast" className={css.link}>
              cast
            </Link>
          </li>
          <li>
            <Link to="reviews" className={css.link}>
              reviews
            </Link>
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
