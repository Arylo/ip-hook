import os from 'os';
import test from 'ava';
import defaultFn, { getIps, getIps as nameFn } from '../../lib/utils/getIps';

test('Export', (t) => {
  t.is(typeof defaultFn, 'function');
  t.is(typeof nameFn, 'function');
});

test('No interface name', (t) => {
  const result = nameFn();
  t.is(Object.keys(result).length, 1);
  t.true(!!result.hostname);
});

test('Exist interface name', (t) => {
  const keys = Object.keys(os.networkInterfaces());
  for (const key of keys) {
    t.not(Object.keys(getIps(key)).length, 1);
  }
  t.plan(keys.length);
});

test('Non-exist interface name', (t) => {
  const result = nameFn(Math.random().toFixed(2));
  t.is(Object.keys(result).length, 1);
  t.true(!!result.hostname);
});
