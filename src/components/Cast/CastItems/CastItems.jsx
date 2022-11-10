import PropTypes from 'prop-types';
import defaultUser from '../../../images/defaultUser.png'

import { CastListItem, ItemWrapp, ItemDescription } from './CastItems.styled';

export const CastItems = ({ item }) => {
  const { gender, name, profile_path, character } = item;
  return (
    <CastListItem>
      <ItemWrapp>
        <img
          width={'75px'}
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w500${profile_path}`
              : defaultUser
          }
          alt={name}
        />
      </ItemWrapp>
      <ItemDescription>
        {character && <p>{character}</p>}
        {name && <p>{name}</p>}
        {gender && <p>{gender === 1 ? 'Female' : 'Male'}</p>}
      </ItemDescription>
    </CastListItem>
  );
};

CastItems.propTypes = {
  item: PropTypes.shape({
    gender: PropTypes.number,
    name: PropTypes.string,
    profile_path: PropTypes.string,
    character: PropTypes.string,
  }),
};