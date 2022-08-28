import { Route, Routes, NavLink } from 'react-router-dom';

import css from './App.module.css';

import Home from './page/Home/Home';
import Movies from './page/Movies/Movies';
import MoviesDetails from './page/Movies/MoviesDetails';
import Cast from './page/Movies/Cast/Cast';
import Reviews from './page/Movies/Reviews/Reviews';

export const App = () => {
  return (
    <div className={css.container}>
      <nav className={css.navigation}>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${css.navigationLink} ${css.active}`
              : `${css.navigationLink}`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${css.navigationLink} ${css.active}`
              : `${css.navigationLink}`
          }
          to="/Movies"
        >
          Movies
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Movies/:id" element={<MoviesDetails />}>
          <Route path="Cast" element={<Cast />} />
          <Route path="Reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
};
