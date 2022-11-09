import { Link, Route, Routes } from "react-router-dom";

import { Home } from "components/pages/Home/Home";

export const App = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="movies" element={<Movies />}></Route>
            <Route path="movies/:movieId" element={<MovieDetails />}></Route>
        <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />}></Route>
          <Route path="*" element={<Navigate to="/" replace />}></Route> */}
      </Routes>
    </>
  );
};
 