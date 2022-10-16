import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FilterInputText from '../../components/FilterInputText/FilterInputText';
import PodcastList from '../../components/PodcastsList/PodcastList';
import { usePodcasts } from '../../hooks';

export default function PodcastsPage() {
  const navigate = useNavigate();
  const [filterText, setFilterText] = useState('');
  const podcasts = usePodcasts({ filterText });

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
      <PodcastList podcasts={podcasts} onPodcastSelected={onPodcastSelected} />
    </main>
  );
}
