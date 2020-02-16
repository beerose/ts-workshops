/**
 * Exercise 12: Sum Types and Conditional Types
 *
 * In this exercise we're going to implement lightweight sum type matching
 * which imitates patter matching.
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
 * Below type extracts all the discriminants values from given union type.
 */
type TypeOf<T extends { type: any }> = T extends { type: infer Type }
  ? Type
  : never;

/**
 * Hover on the below type to see waht's the result.
 */
type PetTypes = TypeOf<Pet>;

/**
 * FilterType returns set intersection.
 *
 * Task 1: Recator FilterType so it doesn't use conditional types.
 * Hint: Use one of the utility types.
 */
type FilterType<T, Matching> = T extends Matching ? T : never;

/**
 * Cases type builds a dictionary where discriminants are keys,
 * and values are functions that have to be called
 */
type Cases<T extends { type: any }, R> = {
  [P in TypeOf<T>]: (val: FilterType<T, { type: P }>) => R;
};

function match<T extends { type: string }, C extends Cases<T, any>>(
  value: T,
  cases: C,
): ReturnType<C[keyof C]> {
  return cases[value.type as TypeOf<T>](
    value as FilterType<T, { type: string }>,
  );
}

const pet: Cat | Dog = { type: 'Cat', a: 10 } as any;

const _: number | number[] = match(pet, {
  Cat: a => a.lives.map(life => life.age),
  Dog: b => b.age,
});
