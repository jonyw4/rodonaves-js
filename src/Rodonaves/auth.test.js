import Rodonaves from './index';

test('calls auth', async () => {
  const rodonaves = new Rodonaves('carimflex', 'BP9AXI76');
  const auth = await rodonaves.auth();
  expect(auth).toBe(true);
  expect(rodonaves.token).not.toBeNull();
});
