import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import { toastConfig } from './toastConfig';

// PAGES
const Home = lazy(() => import('./pages/Home'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Movies = lazy(() => import('./pages/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const GenreFilter = lazy(() => import('./pages/GenreFilter'));
const HeaderLayout = lazy(() => import('./HeaderLayout/HeaderLayout'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeaderLayout />}>
          <Route index element={<Home />} />
          <Route path="movie" element={<Movies />} />
          <Route path="movie/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="genreFilter/:GenreId" element={<GenreFilter />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Toaster {...toastConfig} />
    </>
  );
};
