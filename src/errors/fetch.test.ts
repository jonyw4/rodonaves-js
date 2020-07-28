import {
  RodonavesFetchOtherError,
  RodonavesFetchClientError,
  RodonavesFetchServerError
} from '.';

describe('RodonavesFetchErrors', () => {
  it('should throw Error of type RodonavesFetchOtherError', () => {
    const t = () => {
      throw new RodonavesFetchOtherError('Erro', {});
    };
    expect(t).toThrow(RodonavesFetchOtherError);
  });

  it('should throw Error of type RodonavesFetchClientError', () => {
    const t = () => {
      throw new RodonavesFetchClientError('Client error', {}, '400', {});
    };
    expect(t).toThrow(RodonavesFetchClientError);
  });

  it('should throw Error of type RodonavesFetchServerError', () => {
    const t = () => {
      throw new RodonavesFetchServerError(
        'Client error',
        {},
        '400',
        {},
        {
          data: {},
          status: 500,
          statusText: 'Server Error',
          headers: {},
          config: {}
        }
      );
    };
    expect(t).toThrow(RodonavesFetchServerError);
  });
});
