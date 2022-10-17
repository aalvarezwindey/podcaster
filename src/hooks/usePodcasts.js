import { PodcastService } from '../services';
import { useService } from './useService';

const usePodcasts = ({ filterText }, ...rest) => {
  const filterTextTransformed = filterText.trim().toLowerCase();
  const serviceProps = useService(
    () => PodcastService.getTopPodcasts(),
    ...rest
  );

  return {
    ...serviceProps,
    data: (serviceProps.data || []).filter(
      (podcast) =>
        podcast.name.toLowerCase().includes(filterTextTransformed) ||
        podcast.author.toLowerCase().includes(filterTextTransformed)
    ),
  };
};

export default usePodcasts;
