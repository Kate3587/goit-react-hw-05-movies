import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import { Loader } from 'components/Loader';
import AppBar from 'components/AppBar/AppBar';

const Home = lazy(() => import('pages/Home'));
const MoviePage = lazy(() => import('pages/MoviePage'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));


export const App = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<MoviePage />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </>
  );
};
 