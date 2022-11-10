import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import defaultMovie from '../../images/defaultMovie.png'

// import css from './MoviePreviewCard.module.css';

export const MovieCard = ({ data }) => {
  const { poster_path, title, release_date, id, overview } = data;
  const location = useLocation();
  return (
    <li className={css.item}>
      <Link
        className={css.link}
        to={`/movies/${id}`}
        state={{ from: location }}
      >
        <div className={css.thumb}>
          <img
            width={'100px'}
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w200${poster_path}`
                : defaultMovie
            }
            alt={title}
          />
        </div>
        <span>
          <p className={css.subtitle}>{title}</p>
          <p className={css.text}>{release_date}</p>
          <p className={css.text}>{overview}</p>
        </span>
      </Link>
    </li>
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