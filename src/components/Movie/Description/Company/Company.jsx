import PropTypes from 'prop-types';
import { CompanyItem, CompanyItemThumb, CompanyItemImage } from './Company.styled';


export const Company = ({ company }) => {
  const { logo_path, name } = company;
  return (
    <CompanyItem>
      <CompanyItemThumb>
        {logo_path && (
          <CompanyItemImage
            width={'100px'}
            title={name}
            className={css.image}
            src={`https://image.tmdb.org/t/p/original${logo_path}`}
            alt={name}
          />
        )}
      </CompanyItemThumb>
    </CompanyItem>
  );
};

Company.propTypes = {
  cologo_pathmpany: PropTypes.shape({
    logo_path: PropTypes.string,
    name: PropTypes.string,
  }),
};