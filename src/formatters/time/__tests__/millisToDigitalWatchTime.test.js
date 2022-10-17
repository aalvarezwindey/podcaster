import { millisToDigitalWatchTime } from '../millisToDigitalWatchTime';

describe('millisToDigitalWatchTime', () => {
  it('should return 1:00:00 for 3600 * 1000', () => {
    expect(millisToDigitalWatchTime(3600 * 1000)).toEqual('1:00:00');
  });

  it('should return 1:01:00 for 3660 * 1000', () => {
    expect(millisToDigitalWatchTime(3660 * 1000)).toEqual('1:01:00');
  });

  it('should return 1:01:05 for 3665 * 1000', () => {
    expect(millisToDigitalWatchTime(3665 * 1000)).toEqual('1:01:05');
  });

  it('should return 14:00:00 for 14 * 3600 * 1000', () => {
    expect(millisToDigitalWatchTime(14 * 3600 * 1000)).toEqual('14:00:00');
  });

  it('should return 15:01 for (15 * 60 * 1000) + 1', () => {
    expect(millisToDigitalWatchTime(15 * 60 * 1000 + 1)).toEqual('15:01');
  });
});
