/**
 * Exercise 2: Type Guards
 */

import { ok } from 'assert';

export type Primitive =
  | string
  | number
  | bigint
  | boolean
  | symbol
  | null
  | undefined;

/**
 * Task 1: Fill the body of the following type guard, that checks wheter value
 * id a primitive.
 */

export const isPrimitive = (val: unknown): val is Primitive => {};

/**
 * run with ts-node src/ex_2.ts
 */
ok(isPrimitive(1) === true);
ok(isPrimitive('wowowo!') === true);
ok(isPrimitive(true) === true);
ok(isPrimitive(null) === true);
ok(isPrimitive({ count: 1 }) === false);
ok(isPrimitive(() => true) === false);
