import PropTypes from 'prop-types';
import { AttributeList, AttributeListItem, ItemName, ItemProperty } from './DescriptionAttribute.styled';


export const DescriptionAttribute = ({ movie }) => {
  const {
    original_title = '',
    adult,
    release_date = '',
    spoken_languages = '',
    runtime = 0,
    budget = 0,
    genres = [],
    production_countries = [],
  } = movie;
  return (
    <AttributeList>
      {adult && (
        <AttributeListItem>
          <ItemName>Age:</ItemName>
          <ItemProperty>{adult ? '18+' : '0+'}</ItemProperty>
        </AttributeListItem>
      )}
      {release_date && (
        <AttributeListItem>
          <ItemName>Release date:</ItemName>
          <ItemProperty>{release_date}</ItemProperty>
        </AttributeListItem>
      )}

      {budget ? (
        <AttributeListItem>
          <ItemName>Budget:</ItemName>
          <ItemProperty>{(budget / 1000000).toFixed(1)}M $</ItemProperty>
        </AttributeListItem>
      ) : null}

      {original_title && (
        <AttributeListItem>
          <ItemName>Original name:</ItemName>
          <ItemProperty>{original_title}</ItemProperty>
        </AttributeListItem>
      )}
      {spoken_languages > 0 && (
        <AttributeListItem>
          <ItemName>Langugaes:</ItemName>
          <ItemProperty>
            {spoken_languages.map(({ english_name }) => english_name).join(' ')}
          </ItemProperty>
        </AttributeListItem>
      )}
      {genres > 0 && (
        <AttributeListItem>
          <ItemName>Genres:</ItemName>
          <ItemProperty>
            {genres.map(({ name }) => name).join(' ')}
          </ItemProperty>
        </AttributeListItem>
      )}
      {runtime && (
        <AttributeListItem>
          <ItemName>Duration:</ItemName>
          <ItemProperty>{(runtime / 60).toFixed(2)} h</ItemProperty>
        </AttributeListItem>
      )}
      {production_countries > 0 && (
        <AttributeListItem>
          <ItemName>Countries:</ItemName>
          <ItemProperty>
            {production_countries.map(({ name }) => name).join(' ')}
          </ItemProperty>
        </AttributeListItem>
      )}
    </AttributeList>
  );
};

DescriptionAttribute.propTypes = {
  movie: PropTypes.shape({
    original_title: PropTypes.string,
    adult: PropTypes.bool,
    release_date: PropTypes.string,
    spoken_languages: PropTypes.arrayOf(
      PropTypes.shape({ english_name: PropTypes.string })
    ),
    runtime: PropTypes.number,
    budget: PropTypes.number,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
    production_countries: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
  }),
};