import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import defaultMovie from '../../../images/defaultMovie.png';
import {
  PreviewWrapp, PreviewPicture, PictureThumb,
  PictureTag, PictureLink, PictureLinkItem, MoreLinkItem
} from './Preview.styled';

export const Preview = ({ filmCard }) => {
  const { poster_path, title, name, tagline } = filmCard;
  return (
    <PreviewWrapp>
      <PreviewPicture>
        <PictureThumb>
          <img
            width={'300px'}
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : defaultMovie
            }
            alt={title ?? name}
          />
        </PictureThumb>
        <PictureTag>{tagline}</PictureTag>

        <PictureLink>
          <PictureLinkItem>
            <MoreLinkItem>
              <NavLink to="cast">
              Learn more about cast
            </NavLink>
            </MoreLinkItem>
          </PictureLinkItem>
          <PictureLinkItem>
            <MoreLinkItem>
              <NavLink to="reviews">
              Reviews
            </NavLink>
            </MoreLinkItem>
          </PictureLinkItem>
        </PictureLink>
      </PreviewPicture>
    </PreviewWrapp>
  );
};

Preview.propTypes = {
  filmCard: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
    tagline: PropTypes.string,
  }),
};