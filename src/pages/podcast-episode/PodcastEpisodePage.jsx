import React from 'react';
import { useLocation } from 'react-router-dom';
import PodcastEpisodeTrack from '../../components/PodcastEpisodeTrack/PodcastEpisodeTrack';

export default function PodcastEpisodePage() {
  const { state } = useLocation();
  const { title, description, mediaUrl } = state.episode;

  return (
    <PodcastEpisodeTrack
      title={title}
      description={description}
      mediaUrl={mediaUrl}
    />
  );
}
