import axios from 'axios';
import Rodonaves from './index';

jest.mock('axios');
// @ts-ignore
axios.request.mockResolvedValue();

describe('Rodonaves.getCityByZipCode()', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should call getCityByZipCode without token API with success', async () => {
    axios.request
      // @ts-ignore
      .mockImplementationOnce(() => Promise.resolve({
        data: { access_token: 'token123' },
      }))
      .mockImplementationOnce(() => Promise.resolve({
        data: { name: 'cityName' },
      }));

    const rodonaves = new Rodonaves('u', 'p');
    const response = await rodonaves.getCityByZipCode('12608-160');
    expect(response).toEqual({ name: 'cityName' });
    expect(axios.request).toHaveBeenCalledTimes(2);
    // @ts-ignore
    expect(axios.request.mock.calls[1][0]).toEqual({
      baseURL: 'https://01wapi.rte.com.br/',
      url: '/api/v1/busca-por-cep',
      method: 'GET',
      params: {
        zipCode: '12608160',
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer token123',
      },
      data: {},
      timeout: 1000,
    });
  });

  it('should call getCityByZipCode with token API with success', async () => {
    // @ts-ignore
    axios.request.mockImplementationOnce(() => Promise.resolve({
      data: { name: 'cityName' },
    }));

    const rodonaves = new Rodonaves('u', 'p');
    rodonaves.token = '123';
    const response = await rodonaves.getCityByZipCode('12608-160');
    expect(response).toEqual({ name: 'cityName' });
    expect(axios.request).toHaveBeenCalledTimes(1);
    expect(axios.request).toHaveBeenCalledWith({
      baseURL: 'https://01wapi.rte.com.br/',
      url: '/api/v1/busca-por-cep',
      method: 'GET',
      params: {
        zipCode: '12608160',
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 123',
      },
      data: {},
      timeout: 1000,
    });
  });
});
