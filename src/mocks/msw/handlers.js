import { rest } from 'msw';
import podcastsMock from '../podcasts.json';
import podcastDetailMock from '../podcast-detail.json';

const TOP_PODCASTS_URL =
  'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';

const podcastId = podcastDetailMock.results[0].trackId;
const PODCAST_DETAIL_URL = `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=200`;

const ALLOW_ORIGIN_URL = `https://api.allorigins.win/get`;

export const handlers = [
  rest.get(ALLOW_ORIGIN_URL, (req, res, ctx) => {
    const url = req.url.searchParams.get('url');
    switch (url) {
      case TOP_PODCASTS_URL:
        return res(
          ctx.status(200),
          ctx.json({ contents: JSON.stringify(podcastsMock) })
        );

      case PODCAST_DETAIL_URL:
        return res(
          ctx.status(200),
          ctx.json({ contents: JSON.stringify(podcastDetailMock) })
        );

      default:
        console.error('Unkown URL passed to Allow Origin Domain:', url);
        return res(ctx.status(500));
    }
  }),
];
