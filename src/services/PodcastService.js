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

      return {
        episodesAmount: podcastDetail.trackCount,
        episodes: podcastEpisodesData.map((episodeEntry) => ({
          id: episodeEntry.trackId,
          title: episodeEntry.trackName,
          duration: episodeEntry.trackTimeMillis,
          releaseDate: episodeEntry.releaseDate,
          description: episodeEntry.description,
          mediaUrl: episodeEntry.episodeUrl,
        })),
      };
    } catch (err) {
      logger.error('[PodcastService][getPodcastEpisodes] error', err);
      throw err;
    }
  }
}

export default new PodcastService();
