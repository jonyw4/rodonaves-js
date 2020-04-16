import axios from 'axios';
import Rodonaves from './index';
import {
  AxiosTestError,
  RodonavesFetchServerError,
  RodonavesFetchClientError,
  RodonavesFetchOtherError,
} from '../errors';

jest.mock('axios');
axios.mockResolvedValue();

describe('Rodonaves.fetch()', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should fetch a GET request successfully from RTE API', async () => {
    axios.mockImplementationOnce(() => Promise.resolve({
      data: { access_token: 'token123' },
    }));

    const rodonaves = new Rodonaves('u', 'p');
    const response = await rodonaves.fetch(
      '/token',
      'GET',
      { user: 'u', password: 'p' },
      {},
      'multipart/form-data',
    );

    expect(response).toEqual({ access_token: 'token123' });
    expect(axios).toHaveBeenCalledTimes(1);
    expect(axios).toHaveBeenCalledWith({
      baseURL: 'https://01wapi.rte.com.br/',
      url: '/token',
      method: 'GET',
      data: '',
      headers: { 'Content-Type': 'multipart/form-data' },
      params: { password: 'p', user: 'u' },
      timeout: 1000,
    });
  });

  it('should fetch an RodonavesOtherError from RTE API', async () => {
    axios.mockRejectedValue(new AxiosTestError({}));
    const rodonaves = new Rodonaves('u', 'p');
    const fetch = rodonaves.fetch('/test', 'GET');
    await expect(fetch).rejects.toThrow(RodonavesFetchOtherError);
  });

  it('should fetch an RodonavesFetchClientError from RTE API', async () => {
    axios.mockRejectedValue(new AxiosTestError({ request: {} }));
    const rodonaves = new Rodonaves('u', 'p');
    const fetch = rodonaves.fetch('/test', 'GET');
    await expect(fetch).rejects.toThrow(RodonavesFetchClientError);
  });

  it('should fetch an RodonavesFetchServerError from RTE API', async () => {
    axios.mockRejectedValue(new AxiosTestError({ response: { status: 404 } }));
    const rodonaves = new Rodonaves('u', 'p');
    const fetch = rodonaves.fetch('/test', 'GET');
    await expect(fetch).rejects.toThrow(RodonavesFetchServerError);
  });
});
