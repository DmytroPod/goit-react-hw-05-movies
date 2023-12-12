import { NavLink, Outlet } from 'react-router-dom';

import css from './Layout.module.css';

const Layout = () => {
  return (
    <div>
      <nav className={css.nav}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
