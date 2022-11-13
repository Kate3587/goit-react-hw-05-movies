import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import defaultMovie from '../../images/defaultMovie.png'
import {
  MovieCardItem, MovieCardItemLink, MovieCardImgThumb,
  MovieCardTitle, MovieCardText, MovieCardWrap
} from './MovieCard.styled';


export const MovieCard = ({ data }) => {
  console.log (data)
  const { poster_path, title, release_date, id, overview } = data;
  const location = useLocation();
  return (
   
    <MovieCardItem>
      <MovieCardWrap>
        
        <Link
        to={`/movies/${id}`}
        state={{ from: location }}
        >
        <MovieCardItemLink>
       
          <MovieCardImgThumb
            width={'150px'}
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w200${poster_path}`
                : defaultMovie
            }
            alt={title}
          />
   
        <span>
          <MovieCardTitle>{title}</MovieCardTitle>
          <MovieCardText>{release_date}</MovieCardText>
          <MovieCardText>{overview}</MovieCardText>
        </span>
        
        </MovieCardItemLink>
        </Link>
      </MovieCardWrap>
      
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

