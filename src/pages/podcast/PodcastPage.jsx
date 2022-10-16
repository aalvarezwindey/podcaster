import React from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import PodcastCardExtended from '../../components/PodcastCardExtended/PodcastCardExtended';
import usePodcastDetail from '../../hooks/usePodcastDetail';
import styles from './PodcastPage.module.css';

export default function PodcastPage() {
  const params = useParams();
  const { state } = useLocation();
  const podcastDetail = usePodcastDetail({ podcastId: params.podcastId });

  // TODO: handle loading
  if (!podcastDetail) return <h1>loading...</h1>;

  const { podcast } = state;
  return (
    <section className={styles.section}>
      <aside>
        <PodcastCardExtended {...podcast} />
      </aside>
      <Outlet
        context={{
          episodesAmount: podcastDetail.episodesAmount,
          episodes: podcastDetail.episodes,
        }}
      />
    </section>
  );
}
