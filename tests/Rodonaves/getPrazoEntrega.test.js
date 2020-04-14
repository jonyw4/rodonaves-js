import { Rodonaves } from '../../src';

test('call getPrazoEntrega and check response', async () => {
  const rodonaves = new Rodonaves(
    process.env.API_RODONAVES_USER,
    process.env.API_RODONAVES_PASSWORD,
  );
  const response = await rodonaves.getPrazoEntrega('12608220', '28695000');
  // console.log(response);
  expect(response).toBeTruthy();
});
