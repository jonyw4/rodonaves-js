import Rodonaves from './index';

test('call getCity and check response', async () => {
  const rodonaves = new Rodonaves('carimflex', 'BP9AXI76');
  const response = await rodonaves.getCityByZipCode('12608220');
  expect(response).toBeTruthy();
  expect(response.CityDescription).toBe('LORENA');
  expect(response.UnitFederation.Description).toBe('SP');
});
