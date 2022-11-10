import { Link, Route, Routes, NavLink} from "react-router-dom";

import Home from "pages/Home";
import { Header, HeaderList, HeaderLink } from "./App.styled";


export const App = () => {
  return (
    <>
      <Header>
        <nav>
          <HeaderList>
            <HeaderLink>
              <NavLink className={css.headerLink} to="/" end>
                Home
              </NavLink>
            </HeaderLink>
            <HeaderLink>
              <NavLink className={css.headerLink} to="movies">
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
 