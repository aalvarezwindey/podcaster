import podcastsResponseMock from '../mocks/podcasts.json';

const podcasts = podcastsResponseMock.feed.entry.map((podcastEntry) => ({
  id: podcastEntry.id.attributes['im:id'],
  name: podcastEntry['im:name'].label,
  imageURL: podcastEntry['im:image'][2].label,
  author: podcastEntry['im:artist'].label,
  description: podcastEntry.summary.label,
}));
export function usePodcasts({ filterText = '' }) {
  const filterTextTransformed = filterText.trim().toLowerCase();
  return podcasts.filter(
    (podcast) =>
      podcast.name.toLowerCase().includes(filterTextTransformed) ||
      podcast.author.toLowerCase().includes(filterTextTransformed)
  );
}
