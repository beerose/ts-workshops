/**
 * Exercise 10: Utility types
 */

/**
 * SetDifference type should return a set difference of given union types `A` and `B`
 * 
 * Task 1: Implement this type using conditional types.
 * Expected: "1"
 */
export type SetDifference<A, B> = /** implement me! */;

declare const one: SetDifference<'1' | '2' | '3', '2' | '3' | '4'>;

/**
 * Subtract from `T` removes properties that exist in `T1` 
 * (`T1` has a subset of the properties of `T`)
 * 
 * Task 2: Implement Substract using SetDifference type.
 * Expected: { name: string, visible: boolean }
 */
export type Subtract<T extends T1, T1 extends object> = /** implement me! */;

type Props = { name: string; age: number; visible: boolean };
type DefaultProps = { age: number };

type RestProps = Subtract<Props, DefaultProps>;
declare const restProps: RestProps;

/**
 * Optional makes a set of properties optional in T.
 *
 * For example:
 * type Props = {
 *   name: string;
 *   age: number;
 *   visible: boolean;
 * }
 * type Props2 = Optional<Props, 'age' | 'visible'>;
 * Expected: { name: string; age?: number; visible?: boolean; }
 * 
 * Task 3: Implement Optional type using utility types. 
 * Expected: { name: string }
 */
export type Optional<T extends object, K extends keyof T = keyof T> = /** implement me */;

type Item = {
  weight: number,
  name: string,
}

type ItemWithOptionalWeight = Optional<Item, "weight">

const item: ItemWithOptionalWeight = {
  name: "book"
}