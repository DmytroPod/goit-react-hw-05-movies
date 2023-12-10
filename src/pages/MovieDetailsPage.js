import { Suspense, useEffect, useState } from 'react';

import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';

import { getMovieById } from '../Servise/API';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import GoBackBtn from 'components/GoBackBtn/GoBackBtn';

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

  const goBackPath = location?.state?.from ?? '/';

  return (
    <div>
      <GoBackBtn path={goBackPath} />

      {movieInfo && <MovieInfo movie={movieInfo} />}

      <NavLink to="cast">cast</NavLink>
      <NavLink to="reviews">reviews</NavLink>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
