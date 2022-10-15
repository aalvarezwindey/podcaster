import React, { useState } from 'react';
import AppHeader from '../../components/AppHeader/AppHeader';
import FilterInputText from '../../components/FilterInputText/FilterInputText';
import PodcastList from '../../components/PodcastsList/PodcastList';
import { usePodcasts } from '../../hooks';

export default function PodcastsPage() {
  const [filterText, setFilterText] = useState('');
  const podcasts = usePodcasts({ filterText });
  return (
    <main>
      <AppHeader />
      <FilterInputText
        value={filterText}
        onChange={setFilterText}
        placeholder="Filter podcasts..."
        matchesCount={podcasts.length}
      />
      <PodcastList podcasts={podcasts} />
    </main>
  );
}
