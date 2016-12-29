import test from 'ava';
import {method, asyncMethod} from '../index';
test('method', (t) => {
  t.is(typeof method, 'function');
});

test('has access to dom', (t) => {
  t.is(typeof document, 'object');
});


test('should return true for params passed that are greater than 0', (t) => {
  t.truthy(method(1));
});

test('async flow', async (t) => {
  t.is(await asyncMethod(),42)
});
