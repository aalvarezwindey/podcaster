import HTTPService from './HTTPService';
import { logger } from '../logger';
import Cache from './Cache';

const HOUR_IN_MILLIS = 1000 * 3600;
const A_DAY_IN_MILLIS = 24 * HOUR_IN_MILLIS;

class PodcastService extends HTTPService {
  constructor() {
    super();
    this.cache = new Cache({ millisTTL: A_DAY_IN_MILLIS });
  }

  async getTopPodcasts() {
    try {
      const CACHE_KEY = 'getTopPodcasts';
      const hit = await this.cache.get(CACHE_KEY);
      if (hit) return hit;

      const podcastsData = await this.get(
        'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
      );

      const result = podcastsData.feed.entry.map((podcastEntry) => ({
        id: podcastEntry.id.attributes['im:id'],
        name: podcastEntry['im:name'].label,
        imageURL: podcastEntry['im:image'][2].label,
        author: podcastEntry['im:artist'].label,
        description: podcastEntry.summary.label,
      }));
      this.cache.set(CACHE_KEY, result);
      return result;
    } catch (err) {
      logger.error('[PodcastService][getTopPodcasts] error', err);
      throw err;
    }
  }

  async getPodcastEpisodes(podcastId) {
    try {
      const CACHE_KEY = `getPodcastEpisodes_${podcastId}`;
      const hit = await this.cache.get(CACHE_KEY);
      if (hit) return hit;

      const podcastDetailData = await this.get(
        `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=200`
      );

      // first element is data about Podcast
      const [podcastDetail, ...podcastEpisodesData] = podcastDetailData.results;

      const result = {
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
      this.cache.set(CACHE_KEY, result);
      return result;
    } catch (err) {
      logger.error('[PodcastService][getPodcastEpisodes] error', err);
      throw err;
    }
  }
}

export default new PodcastService();
