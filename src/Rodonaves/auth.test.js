import axios from 'axios';
import qs from 'qs';
import Rodonaves from './index';

jest.mock('axios');
axios.mockResolvedValue();

describe('Rodonaves.auth()', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should call token API with success', async () => {
    axios.mockImplementationOnce(() => Promise.resolve({
      data: { access_token: 'token123' },
    }));

    const rodonaves = new Rodonaves('u', 'p');
    const response = await rodonaves.auth();

    expect(response).toBe(true);
    expect(axios).toHaveBeenCalledTimes(1);
    expect(axios).toHaveBeenCalledWith({
      baseURL: 'https://01wapi.rte.com.br/',
      url: '/token',
      method: 'POST',
      data: qs.stringify({
        auth_type: 'dev',
        grant_type: 'password',
        username: 'u',
        password: 'p',
      }),
      params: {},
      headers: { 'Content-Type': 'multipart/form-data' },
      timeout: 1000,
    });
  });
});
