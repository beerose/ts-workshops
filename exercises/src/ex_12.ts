/**
 * Exercise 12: Sum Types and Conditional Types
 *
 * In this exercise we're going to implement lightweight sum type matching
 * which imitates well known from other languages pattern matching.
 * It can be use as a "switch expression".
 */

interface Cat {
  type: 'cat';
  name: string;
  lives: { age: number }[];
}
interface Dog {
  type: 'dog';
  name: string;
  age: number;
}

type Pet = Cat | Dog;

/**
 * We're assuming that the discriminant property is named `type`.
 * The type below extracts all the discriminants from given union type.
 *
 * Task 1: Fill the blanks with proper types.
 */
type TypeOf<T extends { type: any }> = T extends { type: /* ❓ */ }
  ? /* ❓ */
  : never;

type PetTypes = TypeOf<Pet>; // Expected: 'dog' | 'cat'

/**
 * Cases type builds a dictionary type where discriminants ('dog' | 'cat' here) are the keys,
 * and the values are functions to be called on a match.
 * 
 * Task 2: Fill the blanks with proper types.
 */
type Cases<T extends { type: any }, R> = {
  [P in /* ❓ */]: (val: Extract<T, { type: P }>) => /* ❓ */;
};

function match<T extends { type: string }, C extends Cases<T, any>>(
  value: T,
  cases: C,
): ReturnType<C[keyof C]> {
  return cases[value.type as TypeOf<T>](value as Extract<T, { type: string }>);
}

const pet /* : Cat | Dog */ = {
  type: 'cat',
  name: 'Fluffy',
  lives: [{ age: 7 }, { age: 9 }],
} as Cat | Dog;
// Notice that we need to assert as Cat | Dog here
// If we just annotated pet variable with this type
// TypeScript would narrow the type of pet to Cat

const _: number | string = match(pet, {
  cat: a => a.lives.reduce((acc, x) => x.age + acc, 0),
  dog: b => `${b.name} is ${b.age} years old.`,
});
