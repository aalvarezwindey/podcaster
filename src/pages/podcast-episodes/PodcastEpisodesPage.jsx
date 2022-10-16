import React from 'react';
import { useOutletContext } from 'react-router-dom';
import PodcastEpisodesHeader from '../../components/PodcastEpisodesHeader/PodcastEpisodesHeader';
import PodcastEpisodesTable from '../../components/PodcastEpisodesTable/PodcastEpisodesTable';
import styles from './PodcastEpisodesPage.module.css';

export default function PodcastEpisodesPage() {
  const { episodes, episodesAmount } = useOutletContext();

  return (
    <section className={styles.section}>
      <PodcastEpisodesHeader episodesAmount={episodesAmount} />
      <PodcastEpisodesTable episodes={episodes} />
    </section>
  );
}
