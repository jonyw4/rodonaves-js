/* eslint-disable no-prototype-builtins */
import Rodonaves from './index';

describe('Rodonaves.constructor()', () => {
  test('check if class has all prototypes', async () => {
    expect(Rodonaves.prototype.hasOwnProperty('fetch')).toBe(true);
    expect(Rodonaves.prototype.hasOwnProperty('auth')).toBe(true);
    expect(Rodonaves.prototype.hasOwnProperty('getCityByZipCode')).toBe(true);
    expect(Rodonaves.prototype.hasOwnProperty('getDeliveryTime')).toBe(true);
    expect(Rodonaves.prototype.hasOwnProperty('simulateQuote')).toBe(true);
  });

  test('calls constructor with default params and check const', async () => {
    const rodonaves = new Rodonaves('user1', 'pass1');
    expect(rodonaves.mode).toBe('dev');
    expect(rodonaves.username).toBe('user1');
    expect(rodonaves.password).toBe('pass1');
    expect(rodonaves.timeout).toBe(1000);
    expect(rodonaves.token).toBeNull();
  });

  test('calls constructor with custom params and check const', async () => {
    const rodonaves = new Rodonaves('user2', 'pass2', 'prod', 2000);
    expect(rodonaves.mode).toBe('prod');
    expect(rodonaves.username).toBe('user2');
    expect(rodonaves.password).toBe('pass2');
    expect(rodonaves.timeout).toBe(2000);
    expect(rodonaves.token).toBeNull();
  });
});
