/**
 * Exercise 11
*/
 

/** 
 * If we have a type which is wrapped type like Promise,
 * how we can get a type which is inside the wrapped type?
 *
 * For example if we have Promise<ExampleType> how to get ExampleType?
 * 
 * Task: add implementation for ExtractType
 */

import { ok } from 'assert';

type X = Promise<string>;
type Y = Promise<{ field: number }>;

type ResultX = ExtractType<X>; // ResultX type equals string
type ResultY = ExtractType<Y>; // ResultY type equals { field: number }

type ExtractType<A> = /** implement me! **/ ;

declare const x: ResultX;
declare const y: ResultY;

ok(typeof x === 'string');
ok('field' in y && typeof y.field === 'number');
