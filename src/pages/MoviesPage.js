import { useState } from 'react';

const MoviesPage = () => {
  const [search, setSearch] = useState('');
  const hadlySearch = ev => {
    ev.preventDefault();
    setSearch(ev.currentTarget.search.name);
  };
  return (
    <>
      <div>
        <label>
          <form onSubmit={hadlySearch}>
            <input
              type="text"
              placeholder="Enter movie name"
              name="search"
              required
              autoComplete="off"
            />
            <button type="submit">search</button>
          </form>
        </label>
      </div>
      <div></div>
    </>
  );
};
export default MoviesPage;
