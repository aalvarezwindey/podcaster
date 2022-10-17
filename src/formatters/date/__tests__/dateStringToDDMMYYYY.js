import { dateStringToDDMMYYYY } from '../dateStringToDDMMYYYY';

describe('dateStringToDDMMYYYY', () => {
  it('should return "16/10/2022" for "2022-10-16T18:40:00Z"', () => {
    expect(dateStringToDDMMYYYY('2022-10-16T18:40:00Z')).toEqual('16/10/2022');
  });

  it('should return "" for ""', () => {
    expect(dateStringToDDMMYYYY('')).toEqual('');
  });

  it('should return "" for "invalid"', () => {
    expect(dateStringToDDMMYYYY('invalid')).toEqual('');
  });
});
