import PropTypes from 'prop-types';
import { AiOutlineLink } from 'react-icons/ai';
import css from './ReviewItem.module.css';
import DefUser from 'img/defaultUser.jpg';
import { MATCH_WORD } from 'services/config/matchWords';
import { normalizeAvatar } from 'services/helpers/avatarAdressNormalize';
import {
  ReviewItemWrap, ReviewCard, ReviewCardThumb, UserText,
UserRating, ReviewContent, ReviewLink, ReviewData} from './ReviewsItem.styled'

export const ReviewsItem = ({ review }) => {
  const { author, author_details, content, created_at, url } = review;
  const { avatar_path, name, rating, username } = author_details;
  return (
    <ReviewItemWrap>
      <article className={css.unit}>
        <ReviewCard>
          <ReviewCardThumb>
            <img
              width={'75px'}
              src={
                avatar_path ? normalizeAvatar(avatar_path, MATCH_WORD) : DefUser
              }
              alt={author}
            />
          </ReviewCardThumb>
          <div className={css.userData}>
            <UserText>@{username}</UserText>
            <UserText>{name}</UserText>
            <UserRating>{rating}</UserRating>
          </div>
          <ReviewData> {new Date(created_at).toLocaleString()}</ReviewData>
        </ReviewCard>
        <ReviewContent>
          <p>{content}</p>
        </ReviewContent>
        <ReviewLink
          href={url}
          rel="noreferrer nofollow noopener"
          target='"_blank"'
        >
          Original
          {<AiOutlineLink width="20px" height="20px" />}
        </ReviewLink>
      </article>
    </ReviewItemWrap>
  );
};

ReviewsItem.propTypes = {
  review: PropTypes.shape({
    author: PropTypes.string,
    author_details: PropTypes.shape({
      avatar_path: PropTypes.string,
      name: PropTypes.string,
      rating: PropTypes.number,
      username: PropTypes.string,
    }),
    content: PropTypes.string,
    created_at: PropTypes.string,
    url: PropTypes.string,
  }),
};