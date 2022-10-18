import React, { useLayoutEffect } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from 'react-router-dom';
import {
  PodcastEpisodePage,
  PodcastEpisodesPage,
  PodcastPage,
  PodcastsPage,
  RootPage,
} from '../pages';

const ScrollToTopOnPageTransitions = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document?.documentElement?.scrollTo?.(0, 0);
  }, [location.pathname]);
  return children;
};

export const routes = [
  {
    path: '/',
    element: (
      <ScrollToTopOnPageTransitions>
        <RootPage />
      </ScrollToTopOnPageTransitions>
    ),
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
];

const router = createBrowserRouter(routes);

export default function Router() {
  return <RouterProvider router={router} />;
}
