import Rodonaves from '../../src';

test('call simulateQuote and check response', async () => {
  const rodonaves = new Rodonaves(
    process.env.API_RODONAVES_USER,
    process.env.API_RODONAVES_PASSWORD,
    'dev',
    20000,
  );
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
  // console.log(response);
  expect(response).toBeTruthy();
}, 30000);
