import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { DescriptionAttribute } from './DescriptionAttribute/DescriptionAttribute'
import { Company } from './Company';
import {
  DescriptionText, ExitLink, DescriptionTitle,
  DescriptionTextWrapp, DescriptionOverview, DescriptionCompanyList
} from './Description.styled';


export const Description = ({ fields, state }) => {
  const { title, movie, overview, production_companies } = fields;
  return (
    <DescriptionText>
      <ExitLink>
        <Link to={state?.from ?? '/'}>
          <span>Turn back</span>
        </Link>
      </ExitLink>
      
      <DescriptionTitle>{title}</DescriptionTitle>
      <DescriptionTextWrapp>
        <DescriptionAttribute movie={movie} />
        <DescriptionOverview>{overview}</DescriptionOverview>

        <DescriptionCompanyList>
          {production_companies.map(company => {
            if (!company.logo_path) {
              return null;
            } else {
              return <Company company={company} key={company.id} />;
            }
          })}
        </DescriptionCompanyList>
      </DescriptionTextWrapp>
    </DescriptionText>
  );
};

Description.propTypes = {
  fields: PropTypes.shape({
    title: PropTypes.string,
    movie: PropTypes.object,
    overview: PropTypes.string,
    production_companies: PropTypes.array,
  }),
  state: PropTypes.shape({
    from: PropTypes.shape({
      pathname: PropTypes.string,
      search: PropTypes.string,
    }),
  }),
};