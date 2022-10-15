import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterInputText.module.css';

function FilterInputText({ value, placeholder, onChange, matchesCount }) {
  return (
    <div className={styles.input}>
      <span>{matchesCount}</span>
      <input
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

FilterInputText.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  matchesCount: PropTypes.number,
};

export default FilterInputText;
