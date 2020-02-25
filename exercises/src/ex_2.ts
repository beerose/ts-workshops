/**
 * Exercise 2: Type Guards
 */

import { ok } from 'assert';

type Primitive = string | number | bigint | boolean | symbol | null | undefined;

/**
 * Task 1: Fill the body of the following type guard, that checks whether value
 * is a primitive.
 */

const isPrimitive = (val: unknown): val is Primitive => {
  return true;
};

ok(isPrimitive(1) === true);
ok(isPrimitive('wowowo!') === true);
ok(isPrimitive(true) === true);
ok(isPrimitive(null) === true);
ok(isPrimitive({ count: 1 }) === false);
ok(isPrimitive(() => true) === false);
