import { useEffect, useState } from 'react';
import { PodcastService } from '../services';

export default function usePodcastDetail({ podcastId }) {
  const [podcastDetail, setPodcastDetail] = useState();

  useEffect(() => {
    PodcastService.getPodcastEpisodes(podcastId).then((data) =>
      setPodcastDetail(data)
    );
  }, [podcastId]);

  if (!podcastDetail) return null;

  return { ...podcastDetail };
}
