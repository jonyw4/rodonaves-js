import Rodonaves from '../../src';

test('call getCity and check response', async () => {
  const rodonaves = new Rodonaves(
    process.env.API_RODONAVES_USER,
    process.env.API_RODONAVES_PASSWORD,
    'dev',
    20000,
  );
  const response = await rodonaves.getCityByZipCode('12608220');
  // console.log(response);
  expect(response).toBeTruthy();
});
