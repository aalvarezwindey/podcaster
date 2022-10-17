import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Card from '../../components/Card/Card';
import Shimmer from '../../components/Shimmer/Shimmer';
import PodcastEpisodesHeader from '../../components/PodcastEpisodesHeader/PodcastEpisodesHeader';
import PodcastEpisodesTable from '../../components/PodcastEpisodesTable/PodcastEpisodesTable';
import styles from './PodcastEpisodesPage.module.css';

const EpisodesHeaderShimmer = () => (
  <Card>
    <Shimmer height="58px" />
  </Card>
);

const PodcastEpisodesTableShimmer = () => (
  <Card>
    <Shimmer height="1000px" />
  </Card>
);

export default function PodcastEpisodesPage() {
  const { episodes, episodesAmount, isLoading } = useOutletContext();

  return (
    <section className={styles.section}>
      {isLoading ? (
        <EpisodesHeaderShimmer />
      ) : (
        <PodcastEpisodesHeader episodesAmount={episodesAmount} />
      )}
      {isLoading ? (
        <PodcastEpisodesTableShimmer />
      ) : (
        <PodcastEpisodesTable episodes={episodes} />
      )}
    </section>
  );
}
