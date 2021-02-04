import React from 'react';
import PropTypes from 'prop-types';



const SearchContainer = ({ onHandleChange }) => {
  return (
    <div>
      <h2>This is my Search Container</h2>
      <label>News Search</label>
      <input
        id="newsSearch"
        onChange={onHandleChange} />
    </div>
  );
};

SearchContainer.propTypes = {
  query: PropTypes.string,
  onHandleChange: PropTypes.func.isRequired
};

export default SearchContainer;
