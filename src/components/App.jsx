import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// import Home from './page/Home/Home';
// import Movies from './page/Movies/Movies';
// import MoviesDetails from './page/Movies/MoviesDetails';
// import Cast from './page/Movies/Cast/Cast';
// import Reviews from './page/Movies/Reviews/Reviews';
import SharedLayout from './SharedLayout';

const Home = lazy(() => import('./page/Home/Home'));
const Movies = lazy(() => import('./page/Movies/Movies'));
const MoviesDetails = lazy(() => import('./page/Movies/MoviesDetails'));
const Cast = lazy(() => import('./page/Movies/Cast/Cast'));
const Reviews = lazy(() => import('./page/Movies/Reviews/Reviews'));

export const App = () => {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="Movies" element={<Movies />} />
          <Route path="Movies/:id" element={<MoviesDetails />}>
            <Route path="Cast" element={<Cast />} />
            <Route path="Reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
