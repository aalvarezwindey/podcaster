import React, { useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import PodcastCardExtended from '../../components/PodcastCardExtended/PodcastCardExtended';
import usePodcastDetail from '../../hooks/usePodcastDetail';
import styles from './PodcastPage.module.css';

export default function PodcastPage() {
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const params = useParams();
  const podcastDetail = usePodcastDetail({ podcastId: params.podcastId });

  // TODO: handle loading
  if (!podcastDetail) return <h1>loading...</h1>;

  const { podcast } = podcastDetail;
  return (
    <section className={styles.section}>
      <aside>
        <PodcastCardExtended {...podcast} />
      </aside>
      <Outlet
        context={{
          episodesAmount: podcastDetail.episodesAmount,
          episodes: podcastDetail.episodes,
          selectedEpisode,
        }}
      />
    </section>
  );
}
