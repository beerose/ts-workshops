/**
 * Exercise 7: Nullish Coalescing
 */

/**
 * From TypeScript 3.7 there's a new operator `??` which you can think of as
 * a way to “fall back” to a default value when dealing with null or undefined.
 *
 * For example, `return values.name ?? placeholder` means:
 * if values.name is defined return values.name, otherwise return placeholder.
 *
 * Task: Convert the following code, so it uses ?? operator.
 */

const displayName = (user: { name?: string }) => {
  if (user.name !== undefined && user.name !== null) {
    return user.name;
  }
  return '-';
};

const displayName2 = (user: { name?: string }) =>
  user.name ?? '-'; /** implement me! */
