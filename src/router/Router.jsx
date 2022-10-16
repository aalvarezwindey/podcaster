import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  PodcastEpisodePage,
  PodcastEpisodesPage,
  PodcastPage,
  PodcastsPage,
  RootPage,
} from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    children: [
      {
        path: '',
        element: <PodcastsPage />,
      },
      {
        path: 'podcast/:podcastId',
        element: <PodcastPage />,
        children: [
          {
            path: '',
            element: <PodcastEpisodesPage />,
          },
          {
            path: 'episode/:episodeId',
            element: <PodcastEpisodePage />,
          },
        ],
      },
    ],
  },
]);
export default function Router() {
  return <RouterProvider router={router} />;
}
