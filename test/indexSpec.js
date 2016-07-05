import test from 'ava';
import { multiply } from '../';

test('returns 0 when either argument is 0', t => {
  t.is(multiply(0, 2), 0);
  t.is(multiply(4, 0), 0);
});

test('returns the value of one number if the other is 1', (t) => {
  t.is(multiply(1, 8), 8);
  t.is(multiply(5, 1), 5);
});

test('is commutative', (t) => {
  t.is(multiply(2, 4), multiply(4, 2));
});

test('returns the product of the two numbers', (t) => {
  t.is(multiply(11, 9), 99);
});

test('handles negative numbers', (t) => {
  t.is(multiply(-2, 2), -4);
  t.is(multiply(2, -2), -4);
  t.is(multiply(-2, -2), 4);
});
