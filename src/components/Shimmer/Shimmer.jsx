import React from 'react';
import PropTypes from 'prop-types';
import styles from './Shimmer.module.css';

function Shimmer({ borderRadius, height, width }) {
  return (
    <div
      className={styles.shimmer}
      style={{
        width,
        height,
        borderRadius,
      }}
    />
  );
}

Shimmer.propTypes = {
  borderRadius: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

Shimmer.defaultProps = { borderRadius: '6px', height: '100%', width: '100%' };

export default Shimmer;
