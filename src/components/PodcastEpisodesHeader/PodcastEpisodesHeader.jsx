import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import styles from './PodcastEpisodesHeader.module.css';

function PodcastEpisodesHeader({ episodesAmount }) {
  return (
    <Card className={styles.card}>
      <h1>Episodes: {episodesAmount}</h1>
    </Card>
  );
}

PodcastEpisodesHeader.propTypes = {
  episodesAmount: PropTypes.number.isRequired,
};

export default PodcastEpisodesHeader;
