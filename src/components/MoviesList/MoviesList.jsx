import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies.map(({ poster_path, id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
                alt=""
              />
              <h2>{title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MoviesList;
