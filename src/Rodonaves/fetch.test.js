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
  it('should fetch a GET request successfully from RTE API', async () => {
    axios.mockImplementationOnce(() => Promise.resolve({
      data: { token: 'token123' },
    }));

    const rodonaves = new Rodonaves('u', 'p');
    const response = await rodonaves.fetch('/token', 'GET', { user: 'u', password: 'p' });

    expect(response).toEqual({ token: 'token123' });
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

  it('should fetch an RodonavesOtherError from API', async () => {
    axios.mockRejectedValue(new AxiosTestError({}));
    const rodonaves = new Rodonaves('u', 'p');
    const fetch = rodonaves.fetch('/test', 'GET');
    await expect(fetch).rejects.toThrow(RodonavesFetchOtherError);
  });

  it('should fetch an RodonavesFetchClientError from API', async () => {
    axios.mockRejectedValue(new AxiosTestError({ request: {} }));
    const rodonaves = new Rodonaves('u', 'p');
    const fetch = rodonaves.fetch('/test', 'GET');
    await expect(fetch).rejects.toThrow(RodonavesFetchClientError);
  });

  it('should fetch an RodonavesFetchServerError from API', async () => {
    axios.mockRejectedValue(new AxiosTestError({ response: { status: 404 } }));
    const rodonaves = new Rodonaves('u', 'p');
    const fetch = rodonaves.fetch('/test', 'GET');
    await expect(fetch).rejects.toThrow(RodonavesFetchServerError);
  });
});
