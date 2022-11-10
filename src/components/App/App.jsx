import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import Header from 'components/Header';

import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import { Loader } from 'components/Loader';

const Home = lazy(() => import('pages/Home'));
const MoviePage = lazy(() => import('pages/MoviePage'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));

// import Home from "pages/Home";
import { Header, HeaderList, HeaderLink } from "./App.styled";


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
        <Route path="movies" element={<Movies />}></Route>
            <Route path="movies/:movieId" element={<MovieDetails />}></Route>
        <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />}></Route>
          <Route path="*" element={<Navigate to="/" replace />}></Route>
      </Routes>
    </>
  );
};
 