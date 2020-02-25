/**
 * Exercise 5: Object keys
 */

/**
 * Object.keys() doen's return keyof type. It return type is string[].
 * This is by desgign, because a type with additional properties is always a subtype of its base type.
 *
 * Take a look at the following type User and ExtendedUser:
 */

interface User {
  name: string;
  surname: string;
  age: number;
}

interface ExtendedUser extends User {
  address: string;
}

/**
 * Each object of type ExtendedUser is also a valid User.
 */
const extendedUser: ExtendedUser = {
  name: 'Jon',
  surname: 'Doe',
  age: 30,
  address: 'Abracadabra Street',
};
const user: User = extendedUser;

/**
 * So if we had a function as follow that is using keyof
 * we'd expect it to never throw error.
 *
 * But passing object `user` as created above, would result in error,
 * since it has more properties than type User.
 */

const handleUserProperties = (p: keyof User) => {
  switch (p) {
    case 'age':
      return 'Age';
    case 'name':
      return 'Name';
    case 'surname':
      return 'Surname';
    default:
      throw new Error('invalid property');
  }
};

/**
 * So if Object.keys would return keyof type, then it wouldn't
 * always produce an exhaustive list.
 *
 * Yet, sometimes we may want to have exact type's propeties
 * as a return type from Object.keys(), not just string[].
 * That's what we're going to do in this exercise.
 *
 * Task 1: Add generic parameter to the function and use it to type `source` param.
 * Task 2: Add type assertion in the function body.
 */

const UNSAFE_keys = </** fill me */>(source: /** fill me */) =>
  Object.keys(source) as /** fill me */[];

const keys = UNSAFE_keys(user);
