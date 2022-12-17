import PropTypes from 'prop-types';
import React from 'react';
import { FilterLabel, Input } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <Input type="text" value={value} onChange={onChange}></Input>
    </FilterLabel>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
