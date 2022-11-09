import { Link, Route, Routes, NavLink} from "react-router-dom";

import { Home } from "pages/Home/Home";

export const App = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink className={css.headerLink} to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={css.headerLink} to="movies">
                Movies
              </NavLink>
            </li>
          </ul>
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
 