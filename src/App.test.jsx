import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import podcastsMock from './mocks/podcasts.json';
import podcastDetailMock from './mocks/podcast-detail.json';
import userEvent from '@testing-library/user-event';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { routes } from './router';

const renderRouter = (initialEntries = ['/'], initialIndex = 0) => {
  const router = createMemoryRouter(routes, {
    initialEntries,
    initialIndex,
  });
  return {
    ...render(<RouterProvider router={router} />),
    router,
  };
};

const podcastFromDetailMock = podcastsMock.feed.entry.find(
  (p) =>
    p.id.attributes['im:id'] === String(podcastDetailMock.results[0].trackId)
);

const pickRandomElementFromArray = (arr = []) => {
  const randomIdx = Math.floor(Math.random() * arr.length);
  return arr[randomIdx];
};

const goToPodcastDetailPage = async (router) => {
  const podcastName = podcastDetailMock.results[0].trackName;
  const podcastNameElement = await screen.findByText(podcastName);
  userEvent.click(podcastNameElement);

  await waitFor(() =>
    expect(router.state.location.pathname.includes('/podcast')).toEqual(true)
  );
};

const goToPodcastEpisodeDetailPage = async (router) => {
  await goToPodcastDetailPage(router);
  const [, ...episodesData] = podcastDetailMock.results;
  const randomEpisode = pickRandomElementFromArray(episodesData);
  const randomEpisodeElement = await screen.findByTestId(
    new RegExp(randomEpisode.trackName, 'i')
  );

  fireEvent.click(randomEpisodeElement);

  return randomEpisode;
};

describe('Acceptance criteria', () => {
  it('should list podcasts in main page', async () => {
    renderRouter();
    const randomPodcast = pickRandomElementFromArray(podcastsMock.feed.entry);
    const randomPodcastName = randomPodcast['im:name'].label;
    const podcastNameElement = await screen.findByText(randomPodcastName);
    expect(podcastNameElement).toBeInTheDocument();
  });

  it('should filter podcasts based on filter input', async () => {
    renderRouter();
    // before filtering, podcast length should be the number of matches
    const matchesElement = await screen.findByText(
      new RegExp(podcastsMock.feed.entry.length),
      'i'
    );
    expect(matchesElement).toBeInTheDocument();

    // filtering by the exact name of the podcast should give only one match
    const filterInput = screen.getByRole('textbox');
    const randomPodcast = pickRandomElementFromArray(podcastsMock.feed.entry);
    const randomPodcastName = randomPodcast['im:name'].label;
    fireEvent.change(filterInput, { target: { value: randomPodcastName } });

    const matchesElementOnlyOne = await screen.findByText('1');
    expect(matchesElementOnlyOne).toBeInTheDocument();
  });

  it('should navigate to podcast detail page when a podcast is selected', async () => {
    const { router } = renderRouter();

    expect(router.state.location.pathname).toEqual('/');

    const podcastName = podcastDetailMock.results[0].trackName;
    const podcastNameElement = await screen.findByText(podcastName);
    userEvent.click(podcastNameElement);

    await waitFor(() =>
      expect(router.state.location.pathname.includes('/podcast'))
    );
    const episodesCountElement = await screen.findByText(
      `Episodes: ${podcastDetailMock.results[0].trackCount}`
    );
    const podcastDescriptionElement = screen.getByText(
      podcastFromDetailMock.summary.label
    );
    expect(podcastDescriptionElement).toBeInTheDocument();
    expect(episodesCountElement).toBeInTheDocument();
  });

  it('should list podcast episodes in podcast detail page', async () => {
    const { router } = renderRouter();
    expect(router.state.location.pathname).toEqual('/');
    await goToPodcastDetailPage(router);

    const [, ...episodesData] = podcastDetailMock.results;
    const randomEpisode = pickRandomElementFromArray(episodesData);
    const randomEpisodeElement = await screen.findByText(
      randomEpisode.trackName
    );
    expect(randomEpisodeElement).toBeInTheDocument();
  });
});
