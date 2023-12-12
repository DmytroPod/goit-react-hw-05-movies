import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getSearch } from 'Servise/API';
import MoviesList from 'components/MoviesList/MoviesList';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesByName, setMoviesByName] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const location = useLocation();

  useEffect(() => {
    const fetchgetSearch = async () => {
      try {
        const search = searchParams.get('search');
        if (!search) {
          setMoviesByName([]);
          return;
        }

        const data = await getSearch(search);
        setMoviesByName(data.results);
      } catch (err) {
        err(
          'We are sorry, but something went wrong :( Please, try again later'
        );
      }
    };

    fetchgetSearch();
  }, [searchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    const inputValue = e.target.search.value.trim().toLowerCase();

    setSearchParams({ search: inputValue });

    setSearchValue('');
  };

  const handleInputChange = e => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <label>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Enter movie name"
            type="text"
            name="search"
            value={searchValue}
            onChange={handleInputChange}
          />
          <button type="submit">Search</button>
        </form>
      </label>
      <MoviesList movies={moviesByName} location={location} />
    </>
  );
};

export default MoviesPage;
