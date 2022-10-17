import React from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import PodcastCardExtended from '../../components/PodcastCardExtended/PodcastCardExtended';
import usePodcastDetail from '../../hooks/usePodcastDetail';
import { logger } from '../../logger';
import styles from './PodcastPage.module.css';

export default function PodcastPage() {
  const params = useParams();
  const { state } = useLocation();
  const {
    isLoading,
    data: podcastDetail,
    error,
  } = usePodcastDetail({ podcastId: params.podcastId });

  if (error) {
    logger.error('[PodcastPage] usePodcastDetail error', error);
    // TODO show better error UI
    return <p>Something went wrong... Try again later</p>;
  }

  const { podcast } = state;
  return (
    <section className={styles.section}>
      <aside>
        <PodcastCardExtended {...podcast} />
      </aside>
      <Outlet
        context={{
          isLoading,
          episodesAmount: podcastDetail?.episodesAmount,
          episodes: podcastDetail?.episodes,
        }}
      />
    </section>
  );
}
