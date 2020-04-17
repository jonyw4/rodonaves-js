import Rodonaves from '../../src';

test('call getDeliveryTime and check response', async () => {
  const rodonaves = new Rodonaves(
    process.env.API_RODONAVES_USER,
    process.env.API_RODONAVES_PASSWORD,
    'dev',
    20000,
  );
  const response = await rodonaves.getDeliveryTime('12608220', '28695000');
  // console.log(response);
  expect(response).toBeTruthy();
});
