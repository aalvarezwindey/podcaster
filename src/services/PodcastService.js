import HTTPService from './HTTPService';
import { logger } from '../logger';

class PodcastService extends HTTPService {
  constructor() {
    super();
    this.cache = {};
  }

  async getTopPodcasts() {
    try {
      const podcastsData = await this.get(
        'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
      );

      return podcastsData.feed.entry.map((podcastEntry) => ({
        id: podcastEntry.id.attributes['im:id'],
        name: podcastEntry['im:name'].label,
        imageURL: podcastEntry['im:image'][2].label,
        author: podcastEntry['im:artist'].label,
        description: podcastEntry.summary.label,
      }));
    } catch (err) {
      logger.error('[PodcastService][getTopPodcasts] error', err);
      throw err;
    }
  }

  async getPodcastEpisodes(podcastId) {
    try {
      const podcastDetailData = await this.get(
        `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=200`
      );

      // first element is data about Podcast
      const [podcastDetail, ...podcastEpisodesData] = podcastDetailData.results;

      // NOTE: this could be improved by saving the selected podcast state in the client
      // or if the API returns the detailed podcast in episodes fetch
      // This algorithm has time complexity of O(n) with the other approach
      // getting podcast detail would have O(1)
      const podcasts = await this.getTopPodcasts();
      const podcast = podcasts.find((podcast) => podcast.id === podcastId);

      return {
        podcast,
        episodesAmount: podcastDetail.trackCount,
        episodes: podcastEpisodesData.map((episodeEntry) => ({
          title: episodeEntry.trackName,
          duration: episodeEntry.trackTimeMillis,
          releaseDate: episodeEntry.releaseDate,
        })),
      };
    } catch (err) {
      logger.error('[PodcastService][getPodcastEpisodes] error', err);
      throw err;
    }
  }
}

export default new PodcastService();