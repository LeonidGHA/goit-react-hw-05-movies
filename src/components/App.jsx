import { Route, Routes, NavLink } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import css from './App.module.css';

const Home = lazy(() => import('./page/Home/Home'));
const Movies = lazy(() => import('./page/Movies/Movies'));
const MoviesDetails = lazy(() => import('./page/Movies/MoviesDetails'));
const Cast = lazy(() => import('./page/Movies/Cast/Cast'));
const Reviews = lazy(() => import('./page/Movies/Reviews/Reviews'));
const NotFound = lazy(() => import('./page/NotFound'));

export const App = () => {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      ;
    </Suspense>
  );
};
