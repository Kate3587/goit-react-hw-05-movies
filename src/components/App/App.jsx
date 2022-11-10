import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate, NavLink, Link } from 'react-router-dom';

import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import { Loader } from 'components/Loader';

import { Header, HeaderList, HeaderLink } from './App.styled';

const Home = lazy(() => import('pages/Home'));
const MoviePage = lazy(() => import('pages/MoviePage'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));

export const App = () => {
  return (
    <>
      <Header>
        <nav>
          <HeaderList>
            <HeaderLink>
              <NavLink to="/" end>
                Home
              </NavLink>
            </HeaderLink>
            <HeaderLink>
              <NavLink to="movies">
                Movies
              </NavLink>
            </HeaderLink>
          </HeaderList>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}></Suspense>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="movies" element={<MoviePage />}></Route>
            <Route path="movies/:movieId" element={<MovieDetails />}></Route>
        <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />}></Route>
          <Route path="*" element={<Navigate to="/" replace />}></Route>
      </Routes>
    </>
  );
};
 