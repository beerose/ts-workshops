/**
 * Exercise 11
 */

/**
 * If we have a type which is wrapped type like Promise,
 * how we can get a type which is inside the wrapped type?
 *
 * For example if we have Promise<ExampleType> how to get ExampleType?
 *
 * Task: add implementation for Unbox.
 */

import { ok } from 'assert';

type X = Promise<string>;
type Y = Promise<{ field: number }>;

type ResultX = Unbox<X>; // Expected: string
type ResultY = Unbox<Y>; // Expected: { field: number }

type Unbox<A> = /** implement me! **/;

const x: ResultX = 'Hello';
const y: ResultY = { field: 1 };
