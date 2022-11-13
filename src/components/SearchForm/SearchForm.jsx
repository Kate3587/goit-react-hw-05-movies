import PropTypes from 'prop-types';
import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { FormForSearch, FormWrapper, FormInput, FormBtn } from './SearchForm.styled';


export const SearchForm = ({ onHandleSubmit }) => {
  const [query, setQuery] = useState('');

  const onChange = event => setQuery(event.target.value);
  const onSubmit = event => {
    event.preventDefault();
    onHandleSubmit({ value: query });
  };

  return (
    <FormForSearch onSubmit={onSubmit}>
      <FormWrapper>
        <FormInput
          name="film"
          onChange={onChange}
          placeholder="Film name"
          value={query}
        />
        {query && (
          <FormBtn type="submit">
            <ImSearch />
          </FormBtn>
        )}
      </FormWrapper>
    </FormForSearch>
  );
};
SearchForm.propTypes = {
  onHandleSubmit: PropTypes.func,
};