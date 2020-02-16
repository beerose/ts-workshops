/**
 * Exercise 4: Nominal types
 */

/**
 * In computer science, a nominal type system (or name-based type system)
 * is a major class of type system,
 * in which compatibility and equivalence of data types
 * is determined by explicit declarations and/or
 * the name of the types.
 * Nominal systems are used to determine if types are equivalent,
 * as well as if a type is a subtype of another.
 *
 * We want to have USD and EUR types and have sure that we won't
 * be able to use USD in place of EUR and vice versa.
 *
 * TypeScript's structural type system would allow us do the following thing:
 *
 * const eur: EUR = 1;
 * function gross(net: USD): USD {
 *   return (net + tax) as USD;
 * }
 * gross(eur) ✅
 *
 * We'd like to above code to result in error.
 *
 * There are some techniques for simulating nominal types within TypeScript.
 * The most common technique is called branding.
 * A brand, or tag, is usually a string literal type added to a non-existent property on an object.
 * You can read more about it here: https://medium.com/better-programming/nominal-typescript-eee36e9432d2
 *
 * Task: Add implementation to the following type Brand.
 */

export type Brand<T, S extends PropertyKey> = /** fill me! */;

type USD = Brand<number, 'USD'>;
type EUR = Brand<number, 'EUR'>;

const tax: USD = 5 as USD;
const usd: USD = 10 as USD;
const eur: EUR = usd * 1.08;

// USD is assignable to number
const x: number = usd;

function gross(net: USD): USD {
  return (net + tax) as USD;
}

// Expect: No compile error
gross(usd);

// Number and EUR are not assignable to USD
// Expect error
const dollars: USD = 100;

// Expect: Compile error (Type '"EUR"' is not assignable to type '"USD"'.)
gross(eur);
