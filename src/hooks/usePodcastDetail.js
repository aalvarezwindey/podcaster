import { PodcastService } from '../services';
import { useService } from './useService';

const usePodcastDetail = ({ podcastId }, ...rest) =>
  useService(() => PodcastService.getPodcastEpisodes(podcastId), ...rest);

export default usePodcastDetail;
