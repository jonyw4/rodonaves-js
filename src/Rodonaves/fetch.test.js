import Rodonaves from './index';
import {
  RodonavesFetchServerError,
} from '../errors';

test('calls fetch and succeed', async () => {
  const rodonaves = new Rodonaves('carimflex', 'BP9AXI76');
  const response = await rodonaves.fetch('/token', 'POST', undefined, {
    auth_type: rodonaves.mode,
    grant_type: 'password',
    username: rodonaves.username,
    password: rodonaves.password,
  });
  expect(response).toBeTruthy();
});

test('calls fetch and throw ServerError', async () => {
  const fetch = async () => {
    const rodonaves = new Rodonaves('carimflex', '12345');
    await rodonaves.fetch('/token', 'POST', undefined, {
      auth_type: rodonaves.mode,
      grant_type: 'password',
      username: rodonaves.username,
      password: rodonaves.password,
    });
  };
  return expect(fetch()).rejects.toThrow(RodonavesFetchServerError);
});
