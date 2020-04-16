import axios from 'axios';
import Rodonaves from './index';

jest.mock('axios');
axios.mockResolvedValue();

describe('Rodonaves.simulateQuote()', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should call simulateQuote without token API with success', async () => {
    axios
      .mockImplementationOnce(() => Promise.resolve({
        data: { access_token: 'token123' },
      }))
      .mockImplementationOnce(() => Promise.resolve({
        data: {
          CityId: '3333',
        },
      }))
      .mockImplementationOnce(() => Promise.resolve({
        data: {
          CityId: '5235',
        },
      }))
      .mockImplementationOnce(() => Promise.resolve({
        data: {
          Value: 333,
          DeliveryTime: 3,
        },
      }));

    const rodonaves = new Rodonaves('u', 'p');
    const response = await rodonaves.simulateQuote(
      '12608220',
      '28695000',
      [
        {
          height: 11,
          length: 20,
          width: 30,
          weight: 0.14,
        },
      ],
      200,
      '11140054000179',
    );
    expect(response).toEqual({
      Value: 333,
      DeliveryTime: 3,
    });
    expect(axios).toHaveBeenCalledTimes(4);
    expect(axios.mock.calls[3][0]).toEqual({
      baseURL: 'https://01wapi.rte.com.br/',
      url: '/api/v1/simula-cotacao',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer token123',
      },
      params: {},
      data: {
        OriginCityId: '3333',
        OriginZipCode: '12608220',
        DestinationCityId: '5235',
        DestinationZipCode: '28695000',
        TotalWeight: 0.14,
        EletronicInvoiceValue: 200,
        CustomerTaxIdRegistration: '11140054000179',
        Packs: [
          {
            AmountPackages: 1,
            Weight: 0.14,
            Length: 20,
            Height: 11,
            Width: 30,
          },
        ],
      },
      timeout: 1000,
    });
  });

  it('should call simulateQuote without token API with success', async () => {
    const rodonaves = new Rodonaves('u', 'p');
    const simulateQuote = rodonaves.simulateQuote(
      '12608220',
      '28695000',
      [],
      200,
      '11140054000179',
    );
    await expect(simulateQuote).rejects.toThrow(Error);
  });
});
