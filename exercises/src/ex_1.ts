/**
 * Exercise 1: Mapped types
 */

interface Person {
  id: number;
  name: string;
  age: number;
}

/**
 * Very often when we want to send an object for update to the API,
 * we only need to send a subset of it — only the properties that were changed.
 * Let's say we want to update item of type Person. Then we would need 
 * following type:
 */

interface PersonUpdate {
  id: number;
  name?: string;
  age?: number;
}

/**
 * It's not cool, because whenever you'd need to change Person type,
 * you'd also need to change PersonUpdate. So it's likely they get out of sync. 
 * 
 * That's why we want to create a type that depends on Person. 
 * We can do it using mapped types. 
 * 
 * As the first step, make all of the Person's properties optional:
 */

type MyPartialType<Type> = /** implement me! */;

type MappedPerson = MyPartialType<Person>;


/**
 * Now, let's create a type where only name and bio are optional.
 */

type MyPartialTypeForUpdate<Type> = /** implement me! */;

const test: MyPartialTypeForUpdate<Person> = {
  id: 1,
}