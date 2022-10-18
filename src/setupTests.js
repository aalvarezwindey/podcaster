// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { server } from './mocks/msw/server';

// MSW setup

beforeAll(() =>
  server.listen({
    onUnhandledRequest(req) {
      // eslint-disable-next-line no-console
      console.log(
        `Found an unhandled ${req.method} request to ${req.url.href}`
      );
    },
  })
);
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
