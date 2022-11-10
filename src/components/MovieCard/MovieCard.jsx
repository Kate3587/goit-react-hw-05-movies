import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import defaultMovie from '../../images/defaultMovie.png'
import {
  MovieCardItem, MovieCardItemLink, MovieCardImgThumb,
  MovieCardTitle, MovieCardText
} from './MovieCard.styled';

export const MovieCard = ({ data }) => {
  const { poster_path, title, release_date, id, overview } = data;
  const location = useLocation();
  return (
    <MovieCardItem>
      <MovieCardItemLink>
        <Link
        to={`/movies/${id}`}
        state={{ from: location }}
        >
        <MovieCardImgThumb>
          <img
            width={'100px'}
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w200${poster_path}`
                : defaultMovie
            }
            alt={title}
          />
        </MovieCardImgThumb>
        <span>
          <MovieCardTitle>{title}</MovieCardTitle>
          <MovieCardText>{release_date}</MovieCardText>
          <MovieCardText>{overview}</MovieCardText>
        </span>
        </Link>
        </MovieCardItemLink>
    </MovieCardItem>
  );
};

MovieCard.propTypes = {
  data: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    id: PropTypes.number,
    overview: PropTypes.string,
  }),
};