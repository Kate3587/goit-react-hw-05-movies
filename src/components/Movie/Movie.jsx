import { Outlet, useLocation } from 'react-router-dom';
import { Description } from './Description';
import PropTypes from 'prop-types';

import { Preview } from './Preview';
import {MovieSection, MovieWrapp} from './Movie.styled'

export const Movie = ({ movie }) => {
  const { state } = useLocation();
  const {
    name,
    title,
    poster_path,
    backdrop_path,
    overview,
    tagline,
    production_companies,
  } = movie;
  return (
    <MovieSection
      style={{
        backgroundImage: `linear-gradient( rgba(191, 194, 245, 0.95),
         rgba(24, 26, 45, 0.95)),
         url(https://image.tmdb.org/t/p/w500${backdrop_path})`,
      }}
    >
      <MovieWrapp>
        <Preview filmCard={{ poster_path, title, name, tagline }} />
        <Description
          fields={{ title, movie, overview, production_companies }}
          state={state}
        />
      </MovieWrapp>
      <Outlet />
    </MovieSection>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string,
    title: PropTypes.string,
    poster_path: PropTypes.string,
    backdrop_path: PropTypes.string,
    overview: PropTypes.string,
    tagline: PropTypes.string,
    production_companies: PropTypes.array,
  }),
};