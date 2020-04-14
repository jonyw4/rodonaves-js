import {
  RodonavesFetchOtherError,
  RodonavesFetchClientError,
  RodonavesFetchServerError,
} from '.';

describe('RodonavesFetchErrors', () => {
  it('should throw Error of type RodonavesFetchOtherError', () => {
    const t = () => {
      throw new RodonavesFetchOtherError();
    };
    expect(t).toThrow(RodonavesFetchOtherError);
  });

  it('should throw Error of type RodonavesFetchClientError', () => {
    const t = () => {
      throw new RodonavesFetchClientError();
    };
    expect(t).toThrow(RodonavesFetchClientError);
  });

  it('should throw Error of type RodonavesFetchServerError', () => {
    const t = () => {
      throw new RodonavesFetchServerError(404);
    };
    expect(t).toThrow(RodonavesFetchServerError);
  });
});
