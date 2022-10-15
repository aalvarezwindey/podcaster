import React from 'react';
import PodcastCard from '../PodcastCard/PodcastCard';
import styles from './PodcastList.module.css';

export default function PodcastList({ podcasts }) {
  return (
    <section className={styles.list}>
      {podcasts.map(({ id, ...podcast }) => (
        <PodcastCard key={id} {...podcast} />
      ))}
    </section>
  );
}
