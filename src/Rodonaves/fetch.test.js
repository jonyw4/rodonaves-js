import Rodonaves from './index';

test('calls fetch', async () => {
  const rodonaves = new Rodonaves('carimflex', 'BP9AXI76');
  const response = await rodonaves.fetch('/token', 'POST', undefined, {
    auth_type: rodonaves.mode,
    grant_type: 'password',
    username: rodonaves.username,
    password: rodonaves.password,
  });
  expect(response).toBeTruthy();
});
