import { Rodonaves } from '../../src';

test('call getCity and check response', async () => {
  const rodonaves = new Rodonaves(
    process.env.API_RODONAVES_USER,
    process.env.API_RODONAVES_PASSWORD,
  );
  const response = await rodonaves.getCityByZipCode('12608220');
  // console.log(response);
  expect(response).toBeTruthy();
  expect(response.CityDescription).toBe('LORENA');
  expect(response.UnitFederation.Description).toBe('SP');
});
