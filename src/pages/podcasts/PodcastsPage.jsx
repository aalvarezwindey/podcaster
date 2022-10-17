import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FilterInputText from '../../components/FilterInputText/FilterInputText';
import PodcastList, {
  PodcastListShimmer,
} from '../../components/PodcastsList/PodcastList';
import { usePodcasts } from '../../hooks';
import { logger } from '../../logger';

export default function PodcastsPage() {
  const navigate = useNavigate();
  const [filterText, setFilterText] = useState('');
  const { data: podcasts, error, isLoading } = usePodcasts({ filterText });

  if (error) {
    logger.error('[PodcastsPage] usePodcasts error', error);
    // TODO show better error UI
    return <p>Something went wrong... Try again later</p>;
  }

  const onPodcastSelected = (podcast) => {
    navigate(`/podcast/${podcast.id}`, {
      state: {
        podcast,
      },
    });
  };
  return (
    <main>
      <FilterInputText
        value={filterText}
        onChange={setFilterText}
        placeholder="Filter podcasts..."
        matchesCount={podcasts.length}
      />
      {isLoading ? (
        <PodcastListShimmer />
      ) : (
        <PodcastList
          podcasts={podcasts}
          onPodcastSelected={onPodcastSelected}
        />
      )}
    </main>
  );
}
