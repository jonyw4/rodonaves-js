import axios from 'axios';
import Rodonaves from './index';

jest.mock('axios');
// @ts-ignore
axios.mockResolvedValue();

describe('Rodonaves.getDeliveryTime()', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should call getDeliveryTime without token API with success', async () => {
    axios
      // @ts-ignore
      .mockImplementationOnce(() => Promise.resolve({
        data: { access_token: 'token123' },
      }))
      .mockImplementationOnce(() => Promise.resolve({
        data: {
          CityDescription: 'Lorena',
          UnitFederation: { Description: 'SP' },
        },
      }))
      .mockImplementationOnce(() => Promise.resolve({
        data: {
          CityDescription: 'São Paulo',
          UnitFederation: { Description: 'SP' },
        },
      }))
      .mockImplementationOnce(() => Promise.resolve({
        data: {
          DeliveryTime: 3,
        },
      }));

    const rodonaves = new Rodonaves('u', 'p');
    const response = await rodonaves.getDeliveryTime('1200000', '150000');
    expect(response).toEqual(3);
    expect(axios).toHaveBeenCalledTimes(4);
    // @ts-ignore
    expect(axios.mock.calls[3][0]).toEqual({
      baseURL: 'https://01wapi.rte.com.br/',
      url: '/api/v1/prazo-entrega',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer token123',
      },
      params: {},
      data: {
        OriginCityDescription: 'Lorena',
        OriginUFDescription: 'SP',
        DestinationCityDescription: 'São Paulo',
        DestinationUFDescription: 'SP',
      },
      timeout: 1000,
    });
  });
});
