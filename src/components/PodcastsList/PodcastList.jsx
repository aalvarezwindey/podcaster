import React from 'react';
import PropTypes from 'prop-types';
import PodcastCard from '../PodcastCard/PodcastCard';
import styles from './PodcastList.module.css';

export default function PodcastList({ podcasts, onPodcastSelected }) {
  return (
    <section className={styles.list}>
      {podcasts.map(({ id, ...podcast }) => (
        <PodcastCard
          key={id}
          {...podcast}
          onClick={() => onPodcastSelected({ id, ...podcast })}
        />
      ))}
    </section>
  );
}

PodcastList.propTypes = {
  podcasts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onPodcastSelected: PropTypes.func.isRequired,
};
