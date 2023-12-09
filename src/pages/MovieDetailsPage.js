import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// import GoBackBtn from '../components/GoBackBtn/GoBackBtn';
import { getMovieById } from '../Servise/API';
import MovieInfo from 'components/MovieInfo/MovieInfo';

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  // const location = useLocation();

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
  // const goBackPath = '/';

  return (
    <div>
      {/* <GoBackBtn path={goBackPath} /> */}
      {movieInfo && <MovieInfo movie={movieInfo} />}
      {/* <NavLink to="/cast"></NavLink>
      <NavLink to="/reviews" />

      <Outlet /> */}
    </div>
  );
};

export default MovieDetailsPage;
