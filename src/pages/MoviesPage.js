import { useEffect, useState } from 'react';

import { useLocation, useSearchParams } from 'react-router-dom';

import { getSearch } from 'Servise/API';

import MoviesList from 'components/MoviesList/MoviesList';

import css from '../pages.css/MoviesPage.module.css';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesByName, setMoviesByName] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const search = searchParams.get('search');
    if (!search) {
      return;
    }
    const fetchgetSearch = async () => {
      try {
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

  const location = useLocation();
  return (
    <>
      <label className={css.label}>
        <form onSubmit={handleSubmit}>
          <input
            className={css.input}
            placeholder="Enter movie name"
            type="text"
            name="search"
            value={searchValue}
            onChange={handleInputChange}
          />
          <button className={css.button} type="submit">
            Search
          </button>
        </form>
      </label>
      <MoviesList movies={moviesByName} location={location} />
    </>
  );
};

export default MoviesPage;
